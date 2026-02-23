'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import {
  sendSponsorshipEnquiry,
  type SponsorshipFormState,
} from '@/app/actions/sponsorship';

const initialState: SponsorshipFormState = {
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary w-full" disabled={pending}>
      {pending ? 'Submitting…' : 'Submit Enquiry'}
    </button>
  );
}

export default function SponsorshipForm() {
  const [state, formAction] = useActionState(
    sendSponsorshipEnquiry,
    initialState
  );

  return (
    <form action={formAction} className="space-y-8 md:text-lg">
      {/* Honeypot */}
      <input
        type="text"
        name="company_hp"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <input type="hidden" name="startedAt" value={Date.now()} />

      {/* Package Selection */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-heading text-xl md:text-3xl mb-2">
            Sponsorship Package*
          </span>
        </label>

        <div className="space-y-3">
          {[
            'Headline Stage Sponsor',
            'Side Stage Sponsor',
            'Stage Banner Sponsor',
            'Not Sure Yet'
          ].map((label) => (
            <label key={label} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="package"
                value={label}
                className="radio radio-neutral"
                required
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
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
        name="company"
        placeholder="Company Name*"
        className="input input-bordered w-full"
        required
      />

      <input
        name="phone"
        placeholder="Phone Number*"
        className="input input-bordered w-full"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address*"
        className="input input-bordered w-full"
        required
      />

      <input
        name="website"
        placeholder="Website"
        className="input input-bordered w-full"
      />

      <SubmitButton />

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