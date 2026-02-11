'use server';

import { headers } from 'next/headers';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const submissions = new Map<string, number>();

export type AleFormState = {
  success: boolean;
  message?: string;
};

export async function sendAleSuggestion(
  _prevState: AleFormState,
  formData: FormData
): Promise<AleFormState> {

  /* --------------------
     SPAM PROTECTION
  -------------------- */

  if (formData.get('company_hp')) {
    return { success: false };
  }

  const startedAt = Number(formData.get('startedAt'));
  if (!startedAt || Date.now() - startedAt < 2000) {
    return { success: false };
  }

  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') ?? 'unknown';
  const last = submissions.get(ip) ?? 0;

  if (Date.now() - last < 30_000) {
    return {
      success: false,
      message: 'Please wait a moment before submitting again.',
    };
  }

  submissions.set(ip, Date.now());

  /* --------------------
     DATA
  -------------------- */

  const beerName = formData.get('beerName')?.toString().trim();
  const brewery = formData.get('brewery')?.toString().trim();
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();

  if (!beerName || !name || !email) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    };
  }

  /* --------------------
     EMAIL
  -------------------- */

  try {
    await resend.emails.send({
      from: 'Bell & Bear Festival <info@bbfestival.co.uk>',
      to: ['joe.shipton@shipped-studio.co.uk'],
      replyTo: email,
      subject: `Ale Suggestion – ${beerName}`,
      html: `
        <p><strong>Ale:</strong> ${beerName}</p>
        <p><strong>Brewery:</strong> ${brewery || 'Not provided'}</p>
        <p><strong>Suggested By:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return {
      success: true,
      message:
        'Thanks for your suggestion! Keep an eye on our socials for the shortlist and voting.',
    };
  } catch {
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
}
