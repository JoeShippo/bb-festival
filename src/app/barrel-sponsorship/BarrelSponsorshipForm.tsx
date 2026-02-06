'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import {
  sendBarrelSponsorship,
  type BarrelFormState,
} from '@/app/actions/barrelSponsorship';

const initialState: BarrelFormState = {
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary w-full" disabled={pending}>
      {pending ? 'Submitting…' : 'Submit'}
    </button>
  );
}

export default function BarrelSponsorshipForm() {
  const [state, formAction] = useActionState(
    sendBarrelSponsorship,
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

      {/* Timing */}
      <input type="hidden" name="startedAt" value={Date.now()} />

      {/* Barrels */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-heading text-xl md:text-3xl mb-2">
            No. of Barrels
          </span>
        </label>

        <div className="grid grid-cols-2 gap-4 md:flex md:gap-6">
          {['One', 'Two', 'Three', 'Other'].map((label) => (
            <label key={label} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="barrels"
                value={label.toLowerCase()}
                className="radio radio-neutral"
                required
              />
              <span className="label-text">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Name */}
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
        placeholder="Company Name (optional)"
        className="input input-bordered w-full"
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
