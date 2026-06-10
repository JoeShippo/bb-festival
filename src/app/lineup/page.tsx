export { metadata } from './metadata';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import {GiChiliPepper, GiNoodles, GiPizzaSlice, GiHamburger} from 'react-icons/gi'
import { MdOutlineFoodBank } from "react-icons/md";
import Link from 'next/link';
import FestivalLineup from '@/components/FestivalLineUp';
import ArtistGrid from '@/components/ArtistGrid';


export default function FestivalInfoPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[20vh] grid place-items-center bg-[var(--yellow)] py-20 md:py-30 text-[#052c2f]">
        <div className="text-center -rotate-2">
          <h1 className="font-heading text-6xl md:text-[120px] leading-[0.85]">
            Music Lineup
          </h1>
          <p className="mt-4 text-2xl md:text-4xl font-heading">
            3 Days of Unforgettable Bands & Artists
          </p>
        </div>
      </section>


            <section className="py-16 md:py-24 bg-white text-[#052c2f]">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT - IMAGE */}
    <div className="hidden md:block relative w-full h-[420px] rounded-xl overflow-hidden">
      <img
        src="/2025/DSC05793_1.jpg"
        alt="Live music at The Bell & Bear Summer Festival"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

    {/* RIGHT - TEXT */}
    <div>
      <h2 className="font-heading text-4xl md:text-5xl mb-8">The Bell & Bear's Summer Festival</h2>

      <div className="md:text-lg max-w-3xl space-y-4">
        <p>
          Get ready for a full weekend of live music as our Summer Festival brings together local favourites, feel-good crowd-pleasers, and headline acts across three packed days.
        </p>
        <p>
          From laid-back daytime sets to big evening performances, our lineup is all about great music, festival energy, and artists who know how to get the crowd going. Meet the bands and performers joining us across the weekend.
        </p>
      </div>
    </div>

  </div>
</section>

      <FestivalLineup />
      <ArtistGrid />








      <Footer />
    </>
  );
}
