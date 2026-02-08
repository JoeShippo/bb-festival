'use client'

import { useCountdown } from '@/hooks/useCountdown';
import { CountdownBadge } from '@/components/CountdownBadge';


export default function HeroBanner() {
  const { days, hours, minutes } = useCountdown(
    new Date('2026-07-10T12:00:00')
  );

  return (
    <section
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/reusable/DSC05822.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Colour overlay */}
      <div className="absolute inset-0 bg-[var(--yellow)]/75" />

       <CountdownBadge />

      {/* MAIN HERO CONTENT */}
      <div className="relative z-10 inline-block text-left -rotate-1 -translate-y-20 md:-translate-y-15 2xl:-translate-y-10">
        <h1 className="font-heading text-3xl md:text-[50px] leading-none text-[#052c2f]">
          The Bell & Bear's
        </h1>

        <h1 className="font-heading text-[120px] md:text-[150px] 2xl:text-[175px]  leading-[0.8] text-[#052c2f]">
          <span className="block">Summer<br/>Festival</span>
        </h1>

        <p className="mt-2 md:mt-4 text-3xl md:text-[50px] font-heading text-[#052c2f]">
        July 2026
        </p>
      </div>

      {/* DATE BANNER */}
     {/* DATE BANNER */}
<div className="absolute bottom-10 left-1/2 w-[110%] -translate-x-1/2 z-20">
  <div
    className="
      bg-white
      shadow-[0_-12px_30px_rgba(0,0,0,0.25)]
      -rotate-1
    "
  >
    {/* CONTENT – counter rotate */}
    <div className="">
      <div className="max-w-4xl mx-auto px-6 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LEFT – DATES */}
        <div className="flex items-center gap-4 font-heading text-[#052c2f]">
          <div className="text-center leading-none">
            <div className="uppercase tracking-widest text-xl mb-[-10]">Fri</div>
            <div className="text-5xl md:text-6xl 2xl:text-7xl">10</div>
          </div>
          <div className="text-center leading-none">
            <div className="uppercase tracking-widest text-xl mb-[-10]">Sat</div>
            <div className="text-5xl md:text-6xl 2xl:text-7xl">11</div>
          </div>
          <div className="text-center leading-none">
            <div className="uppercase tracking-widest text-xl mb-[-10]">Sun</div>
            <div className="text-5xl md:text-6xl 2xl:text-7xl">12</div>
          </div>

          <div className="ml-2 text-5xl md:text-7xl 2xl:text-8xl leading-none">
            <span className="text-[var(--green)]">July</span> 2026
          </div>
        </div>

        {/* RIGHT – EVENT CALLOUT */}
        <div className="text-center md:text-right font-heading leading-tight">
          <div className="text-xl md:text-3xl text-[#052c2f]">
            The Bell & Bear · Emberton
          </div>
          <div className="inline-block mt-1 px-4 py-1.5 bg-[var(--green)] text-white text-lg md:text-xl">
            14 Bands & Artists · 16 Ales · Lager & Cider
          </div>
        </div>

      </div>
    </div>
  </div>
</div>



    </section>
  );
}
