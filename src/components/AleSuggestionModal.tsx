'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendAleSuggestion, type AleFormState } from '@/app/actions/aleSuggestion';

const initialState: AleFormState = {
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary w-full" disabled={pending}>
      {pending ? 'Submitting…' : 'Submit Suggestion'}
    </button>
  );
}

export default function AleSuggestionModal() {
  const [state, formAction] = useActionState(
    sendAleSuggestion,
    initialState
  );

  return (
    <dialog id="ale_modal" className="modal">
      <div className="modal-box max-w-2xl">
        <h3 className="font-heading text-3xl mb-6">
          Suggest an Ale for the Festival
        </h3>

        <form action={formAction} className="space-y-4 md:text-lg">

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

          <input
            name="beerName"
            placeholder="Ale Name*"
            className="input input-bordered w-full"
            required
          />

          <input
            name="brewery"
            placeholder="Brewery (if known)"
            className="input input-bordered w-full"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Your Name*"
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
          </div>

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

        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
