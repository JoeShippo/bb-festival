'use server';

import { headers } from 'next/headers';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const submissions = new Map<string, number>();

export type SponsorshipFormState = {
  success: boolean;
  message?: string;
};

export async function sendSponsorshipEnquiry(
  _prevState: SponsorshipFormState,
  formData: FormData
): Promise<SponsorshipFormState> {
  /* --------------------
     SPAM PROTECTION
  -------------------- */

  // Honeypot
  if (formData.get('company_hp')) {
    return { success: false };
  }

  // Too fast submit
  const startedAt = Number(formData.get('startedAt'));
  if (!startedAt || Date.now() - startedAt < 2000) {
    return { success: false };
  }

  // Basic rate limit per IP
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

  const selectedPackage = formData.get('package')?.toString();
  const firstName = formData.get('firstName')?.toString().trim();
  const lastName = formData.get('lastName')?.toString().trim();
  const company = formData.get('company')?.toString().trim();
  const phone = formData.get('phone')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const website = formData.get('website')?.toString().trim();

  if (!selectedPackage || !firstName || !lastName || !company || !phone || !email) {
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
      subject: `Festival Sponsorship Enquiry – ${firstName} ${lastName}`,
      html: `
        <p><strong>Package:</strong> ${selectedPackage}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
      `,
    });

    return {
      success: true,
      message:
        'Thanks for your interest in sponsoring Summer Festival — we’ll be in touch shortly.',
    };
  } catch {
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
}