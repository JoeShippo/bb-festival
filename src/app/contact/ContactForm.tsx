'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { sendContact, type ContactFormState } from '@/app/actions/contact';

const initialState: ContactFormState = {
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary w-full" disabled={pending}>
      {pending ? 'Sending…' : 'Submit Message'}
    </button>
  );
}

export default function ContactForm() {
const [state, formAction] = useActionState(sendContact, initialState);

  return (
    <form action={formAction} className="space-y-6 text-lg">
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      {/* Timing */}
      <input type="hidden" name="startedAt" value={Date.now()} />

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="firstName"
          placeholder="First Name*"
          className="input input-bordered w-full"
          required
        />
        <input
          name="lastName"
          placeholder="Last Name*"
          className="input input-bordered w-full"
          required
        />
      </div>

      <input
        name="email"
        type="email"
        placeholder="Email Address*"
        className="input input-bordered w-full"
        required
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        className="input input-bordered w-full"
      />

      <textarea
        name="message"
        rows={5}
        placeholder="Your message*"
        className="textarea textarea-bordered w-full"
        required
      />

      <SubmitButton />

      {/* Feedback */}
      {state.message && (
        <div
          className={`alert ${
            state.success ? 'alert-success' : 'alert-error'
          }`}
        >
          <span>{state.message}</span>
        </div>
      )}
    </form>
  );
}
