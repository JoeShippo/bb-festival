'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      {/* ===================== */}
      {/* BLUE CTA STRIP */}
      {/* ===================== */}
      <section className="bg-[var(--blue)] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT */}
          <div>
            <h3 className="font-heading text-3xl mb-2">
              Stay up to date
            </h3>
            <p className="opacity-90">
              Follow us on Facebook & Instagram
            </p>
          </div>

          {/* RIGHT – SOCIALS */}
          <div className="flex md:justify-end gap-6 text-3xl">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* MAIN FOOTER */}
      {/* ===================== */}
      <section className="bg-[#052c2f] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

          {/* COLUMN 1 – FESTIVAL LINKS */}
          <div>
            <h4 className="font-heading text-xl mb-4">Festival</h4>
            <ul className="space-y-2 opacity-80">
              <li><Link href="/festival-info" className="hover:underline">Festival Info</Link></li>
              <li><Link href="/barrel-sponsorship" className="hover:underline">Sponsor a Barrel</Link></li>
              <li><Link href="/2025-festival" className="hover:underline">2025 Highlights</Link></li>
              <li><Link href="/contact" className="hover:underline">Get In Touch</Link></li>
            </ul>
          </div>

          {/* COLUMN 2 – PUB LINKS */}
          <div>
            <h4 className="font-heading text-xl mb-4">The Bell & Bear</h4>
            <ul className="space-y-2 opacity-80">
              <li>
                <a
                  href="https://thebellandbear.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Main Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/BellAndBear/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bellandbear/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 – EMPTY (OPTIONAL SPACER) */}
          <div className='hidden md:block' />

          {/* COLUMN 4 – LOGO */}
          <div className="hidden md:flex md:justify-end">
            <Image
              src="/logo/2x/logo.png"
              alt="Bell & Bear Summer Festival"
              width={220}
              height={100}
              className="opacity-90"
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* COPYRIGHT */}
      {/* ===================== */}
      <section className="bg-[#041f22] text-white/60 text-sm py-6">
        <div className="max-w-7xl mx-auto px-6 text-left">
          © {new Date().getFullYear()} The Bell & Bear Summer Festival. <br className='block md:hidden'/>All rights reserved.
        </div>
      </section>
    </footer>
  );
}
