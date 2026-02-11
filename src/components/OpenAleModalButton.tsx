'use client';

export default function OpenAleModalButton() {
  const openModal = () => {
    const modal = document.getElementById(
      'ale_modal'
    ) as HTMLDialogElement | null;

    modal?.showModal();
  };

  return (
    <button className="btn btn-primary" onClick={openModal}>
      Suggest an Ale
    </button>
  );
}
