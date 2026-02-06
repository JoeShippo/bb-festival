'use server';

import { headers } from 'next/headers';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const submissions = new Map<string, number>();

export type ContactFormState = {
  success: boolean;
  message?: string;
};

export async function sendContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  /* --------------------
     SPAM PROTECTION
  -------------------- */

  if (formData.get('company')) {
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

  const firstName = formData.get('firstName')?.toString().trim();
  const lastName = formData.get('lastName')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const phone = formData.get('phone')?.toString().trim();
  const message = formData.get('message')?.toString().trim();

  if (!firstName || !lastName || !email || !message) {
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
      subject: `New contact enquiry – ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return {
      success: true,
      message: 'Thanks for getting in touch — we’ll be in contact shortly.',
    };
  } catch {
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
}
