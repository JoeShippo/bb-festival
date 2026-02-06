import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import {GiChiliPepper, GiNoodles, GiPizzaSlice, GiHamburger} from 'react-icons/gi'

export default function FestivalInfoPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[20vh] grid place-items-center bg-[var(--yellow)] py-20 md:py-30 text-[#052c2f]">
        <div className="text-center -rotate-2">
          <h1 className="font-heading text-6xl md:text-[120px] leading-[0.85]">
            Festival Info
          </h1>
          <p className="mt-4 text-2xl md:text-4xl font-heading">
            Everything you need to know
          </p>
        </div>
      </section>

      {/* TIMES */}
<section className="py-16 md:py-24 bg-white text-[#052c2f]">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT - TIMES */}
    <div>
      <h2 className="font-heading text-4xl md:text-5xl mb-10">Times</h2>

      {/* Friday + Saturday */}
      <div className="grid md:grid-cols-2 gap-2 md:gap-8 mb-2 md:mb-10 md:text-lg">
        <div>
          <h3 className="font-heading text-2xl md:text-3xl mb-3">Friday</h3>
          <p>Open at 12pm</p>
          <p>Live Music 16:30 - 22:30</p>
          <p>Close at 00:00</p>
        </div>

        <div>
          <h3 className="font-heading text-2xl md:text-3xl mb-3">Saturday</h3>
          <p>Open at 12pm</p>
          <p>Live Music 13:30 - 22:30</p>
          <p>Close at 00:00</p>
        </div>
      </div>

      {/* Sunday */}
      <div className="md:text-lg max-w-sm">
        <h3 className="font-heading text-2xl md:text-3xl mb-3">Sunday</h3>
        <p>Open at 12:15pm</p>
        <p>Live Music 13:30 - 18:30</p>
        <p>Close at 20:00</p>
      </div>
    </div>

    {/* RIGHT - IMAGE */}
    <div className="hidden md:block relative w-full h-[420px] rounded-xl overflow-hidden">
      <img
        src="/reusable/DSC05787.jpg"
        alt="Festival atmosphere"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

  </div>
</section>


      {/* MUSIC */}
      <section className="py-16 md:py-24 bg-[#052c2f] text-white">
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
      <h2 className="font-heading text-4xl md:text-5xl mb-8">Music</h2>

      <div className="md:text-lg max-w-3xl space-y-4">
        <p>
          Expect a full weekend of live music featuring a mix of local favourites,
          crowd-pleasers and festival energy.
        </p>
        <p>
          Bands and artists will perform across the weekend, with headline acts each night.
        </p>
        <p>
          Full line-up to be announced soon.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* BEERS, CIDERS & BEVERAGES */}
      <section className="py-16 md:py-24 bg-[var(--yellow)] text-[#052c2f]">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT - TEXT */}
    <div>
      <h2 className="font-heading text-4xl md:text-5xl mb-8">
        Beers, Ciders & Beverages
      </h2>

      <div className="md:text-lg max-w-xl space-y-4">
        <p>
          We'll be showcasing an extensive range of real ales, craft beers and ciders
          from both local and national producers.
        </p>
        <p>
          Expect 16 guest ales throughout the weekend.
        </p>
        <p>
          Not a beer drinker? No problem.
        </p>
        <p>
          We'll also be serving lagers, wines, spirits, soft drinks and alcohol-free options.
        </p>
      </div>
    </div>

    {/* RIGHT - IMAGE */}
    <div className="hidden md:block relative w-full h-[420px] rounded-xl overflow-hidden">
      <img
        src="/reusable/IMG-20250711-WA0015.jpg"
        alt="Festival beers and ciders"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

  </div>
</section>


      {/* FOOD & DRINKS */}
      <section className="py-16 md:py-24 bg-white text-[#052c2f]">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    <div className="hidden md:block relative w-full h-[420px] rounded-xl overflow-hidden">
      <img
        src="/reusable/DSC05775_1.jpg"
        alt="Festival food and drink"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

    {/* LEFT - TEXT */}
    <div>
      <h2 className="font-heading text-4xl md:text-5xl mb-8">Food & Drinks</h2>

      <div className="space-y-4 md:text-lg max-w-xl mb-4">
        <p>
            Our regular food traders you know and love will be joining us across the featival weekend.
        </p>
        <p>
            From currys & noodles to burgers and pizzas, there will be something for everyone!
        </p>
        </div>
        <div className="md:text-lg max-w-xl">
        <h3 className='font-heading text-2xl mb-2'>
            Need a quick reminder of who's who?
        </h3>
        <ul
  className="
    space-y-2
    [&>li>a]:flex
    [&>li>a]:items-center
    [&>li>a]:gap-1
    [&>li>a]:text-lg
    [&>li>a]:opacity-80
    [&>li>a]:transition-all
    [&>li>a]:duration-300
    [&>li>a:hover]:opacity-100
    [&>li>a:hover]:text-[var(--yellow)]
  "
>
  <li>
    <a href="https://www.instagram.com/thelittleovenofjoy/" target="_blank" rel="noopener">
      <GiPizzaSlice className="text-xl" />
      The Little Oven of Joy
    </a>
  </li>

  <li>
    <a href="https://www.instagram.com/sizzlersstreetfood/" target="_blank" rel="noopener">
      <GiHamburger className="text-xl" />
      Sizzlers
    </a>
  </li>

  <li>
    <a href="https://www.instagram.com/wewillwokyoumk/" target="_blank" rel="noopener">
      <GiNoodles className="text-xl" />
      We Will Wok You
    </a>
  </li>

  <li>
    <a href="https://www.instagram.com/rasoi_6/" target="_blank" rel="noopener">
      <GiChiliPepper className="text-xl" />
      RaSoi 6
    </a>
  </li>
</ul>


      </div>
    </div>

    {/* RIGHT - IMAGE */}
    

  </div>
</section>


      <section className="py-16 md:py-24 bg-[var(--dark)] text-[#ffffff]">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT - TEXT */}
    <div>
      <h2 className="font-heading text-4xl md:text-5xl mb-8">
            Man's Best Friend
          </h2>

      <div className="md:text-lg max-w-xl space-y-4">
            <p>
              Well-behaved dogs are very welcome at the festival.
            </p>
            <p>
              Please keep dogs on leads at all times and be mindful of crowds,
              live music and other festival-goers.
            </p>
            <p>
              Water stations will be available to keep your four-legged friends hydrated.
            </p>
      </div>
    </div>

    {/* RIGHT - IMAGE */}
    <div className="hidden md:block relative w-full h-[420px] rounded-xl overflow-hidden">
      <img
        src="/reusable/DSC03723.jpg"
        alt="Festival beers and ciders"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

  </div>
</section>


      <Footer />
    </>
  );
}
