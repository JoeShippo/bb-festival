'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiX } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaChevronDown } from 'react-icons/fa';

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      {/* NAV WRAPPER */}
      <nav className="relative z-30 bg-white">
        <div className="relative max-w-7xl mx-auto px-6 h-20 md:h-30 flex items-center">

          {/* LEFT LINKS (desktop) */}
          {/* LEFT LINKS (desktop) */}
<div className="hidden md:flex flex-1 gap-16 font-heading text-2xl text-[#052c2f]">
  <Link
    href="/festival-info"
    className="transition-colors duration-300 ease-out hover:text-[var(--yellow)]"
  >
    Festival Info
  </Link>

  {/* Sponsorship dropdown */}
  <div className="relative group">
    {/* Top-level label (click goes to /sponsorship) */}
    <Link
  href="/sponsorship"
  className="flex items-center gap-2 transition-colors duration-300 ease-out hover:text-[var(--yellow)]"
>
  <span>Sponsorship</span>
  <FaChevronDown className="text-base mt-[2px]" />
</Link>

    {/* Dropdown */}
    <div
      className="
        absolute left-0 top-full pt-4
        opacity-0 translate-y-2 pointer-events-none
        group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
        transition-all duration-200 ease-out
        z-50
      "
    >
      <div className="bg-white rounded-xl shadow-xl border border-black/10 overflow-hidden min-w-[260px]">
        <Link
          href="/sponsorship"
          className="block px-5 py-4 text-xl text-[#052c2f] hover:bg-[var(--yellow)]/20 transition-colors"
        >
          Festival Sponsorship
          <span className="block text-sm opacity-70">
            Stage, music, cups, toilets & more
          </span>
        </Link>

        <div className="h-px bg-black/10" />

        <Link
          href="/barrel-sponsorship"
          className="block px-5 py-4 text-xl text-[#052c2f] hover:bg-[var(--yellow)]/20 transition-colors"
        >
          Sponsor a Barrel
          <span className="block text-sm opacity-70">
            £100 per barrel · 16 available
          </span>
        </Link>
      </div>
    </div>
  </div>
</div>

          {/* LOGO (ABSOLUTE + SPILL) */}
          <Link
            href="/"
            className="
              absolute
              md:left-1/2
              md:-translate-x-1/2
              top-3
              md:top-[15px]
              z-40
            "
          >
            <Image
              src="/logo/2x/logo.png"
              alt="Bell & Bear Festival"
              width={250}
              height={110}
              priority
              className="w-[160px] md:w-[250px]"

            />
          </Link>

          {/* RIGHT LINKS + BURGER */}
          <div className="flex flex-1 justify-end items-center gap-16">
            <div className="hidden md:flex gap-16 font-heading text-2xl text-[#052c2f]">
              <Link href="/2025-festival" className='cursor-pointer transition-colors duration-300 ease-out hover:text-[var(--yellow)]'>2025 Highlights</Link>
              <Link href="/contact" className='transition-colors duration-300 ease-out hover:text-[var(--yellow)]'>Get In Touch</Link>
            </div>

            {/* BURGER */}
            <button
  aria-label="Menu"
  onClick={() => setOpen(true)}
  className="
    cursor-pointer
    relative z-50
    flex flex-col gap-1.5
    text-[#052c2f]
    transition-colors duration-300 ease-out
    hover:text-[var(--yellow)]
  "
>
  <span className="w-6 h-1 bg-current" />
  <span className="w-6 h-1 bg-current" />
  <span className="w-6 h-1 bg-current" />
</button>

          </div>
        </div>
      </nav>

      {/* FULL SCREEN MENU */}
<div
  className={`
    fixed inset-0 z-[100]
    bg-[#052c2f] text-white
    transition-transform duration-300 ease-out
    ${open ? 'translate-x-0' : '-translate-x-full'}
  `}
>
  <div className="p-8 flex flex-col h-full">

    {/* CLOSE BUTTON */}
    <div className="flex justify-end">
      <button
        onClick={() => setOpen(false)}
        aria-label="Close menu"
        className="
          cursor-pointer
          text-white
          transition-colors duration-300
          hover:text-[var(--yellow)]
        "
      >
        <FiX size={42} />
      </button>
    </div>

    {/* MENU LINKS */}
    <div className="flex-1 flex flex-col justify-center gap-8 font-heading text-4xl md:text-5xl">
      <Link
        href="/festival-info"
        onClick={() => setOpen(false)}
        className="transition-colors duration-300 hover:text-[var(--yellow)]"
      >
        Festival Info
      </Link>

      <Link
        href="/sponsorship"
        onClick={() => setOpen(false)}
        className="transition-colors duration-300 hover:text-[var(--pink)]"
      >
        Festival Sponsorship
      </Link>

      <Link
        href="/barrel-sponsorship"
        onClick={() => setOpen(false)}
        className="transition-colors duration-300 hover:text-[var(--pink)]"
      >
        Sponsor a Barrel
      </Link>

      <Link
        href="/2025-festival"
        onClick={() => setOpen(false)}
        className="transition-colors duration-300 hover:text-[var(--teal)]"
      >
        2025 Highlights
      </Link>

      <Link
        href="/contact"
        onClick={() => setOpen(false)}
        className="transition-colors duration-300 hover:text-[var(--green)]"
      >
        Get In Touch
      </Link>
      <div className="my-4 h-px w-24 bg-white/30" />

      <Link
        href="https://thebellandbear.co.uk/"
        onClick={() => setOpen(false)}
        className="transition-colors duration-300 hover:text-[var(--yellow)]"
      >
        The Bell and Bear
      </Link>
    </div>

    {/* SOCIALS */}
    <div className="flex justify-between items-center pt-6 border-t border-white/20">
      

      <div className="flex gap-6 text-2xl">
        <a
          href="https://www.instagram.com/bellandbear/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-[var(--pink)]"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/BellAndBear/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-[var(--blue)]"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
      </div>
      <span className="text-sm opacity-70">
        © {new Date().getFullYear()} The Bell & Bear
      </span>
    </div>

  </div>
</div>

    </>
  );
}
