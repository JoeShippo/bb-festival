import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BarrelSponsorshipForm from './BarrelSponsorshipForm';
import OpenAleModalButton from '@/components/OpenAleModalButton';
import AleSuggestionModal from '@/components/AleSuggestionModal';

export default function SponsorPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[20vh] grid place-items-center bg-[var(--blue)] py-20 md:py-30 text-white">
        <div className="text-center px-6 -rotate-1">
          <h1 className="font-heading text-6xl md:text-[120px] leading-[0.85]">
            Sponsor a Barrel
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-heading">
            Support the Festival · Get Noticed
          </p>
        </div>
      </section>

      {/* WHY SPONSOR */}
      <section className="py-16 md:py-24 bg-white text-[#052c2f]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/reusable/IMG-20250713-WA0004.jpg"
              alt="Joe & Reon behind the festival bar"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-4 md:text-lg">
            <h2 className="font-heading text-4xl md:text-5xl">Why Sponsor a Barrel?</h2>
            <p>
              This year we're offering barrel sponsorship at the Bell & Bear Summer Festival. By getting involved, you'll be helping us cover event and entertainment costs while playing a genuine part in bringing the festival to life.
            </p>
            <p>
              As a sponsor, your logo will be displayed prominently at the
              festival bar, in the programme, and on the website - with
              perks for you and your team.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-20">
          <h2 className="font-heading text-4xl md:text-5xl mb-10">Sponsorship Benefits</h2>

          <div className="grid md:grid-cols-3 gap-5 md:gap-10 md:text-lg">
            <div className="space-y-3">
              <h3 className="font-heading text-2xl md:text-3xl">Logo Exposure</h3>
              <p>Your company logo or name on the festival website, festival signage and programme.</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-2xl md:text-3xl">Complimentary Drink Tokens</h3>
              <p>Receive complimentary drink tokens so you and your guests can enjoy the weekend.</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-2xl md:text-3xl">Community Support</h3>
              <p>Be part of a local event that brings people together and support your community pub.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS / PACKAGES */}
      <section className="py-16 md:py-24 bg-[var(--yellow)] text-[#052c2f]">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="font-heading text-4xl md:text-5xl mb-6">
      How Sponsorship Works & What Ales Are Available
    </h2>

    <p className="max-w-3xl mb-4 md:text-lg mb-12">
      This year we have 16 festival barrels available for sponsorship - 
      and we're inviting you to help shape the beer list before they're confirmed.
    </p>
   

    <div className="grid md:grid-cols-4 gap-6 md:gap-10 md:text-lg mb-12">

      <div className="space-y-3">
        <h3 className="font-heading text-2xl md:text-3xl">1. Suggest an Ale</h3>
        <p>
          Tell us what you'd love to see pouring at the festival.
          Local favourites, something unique, or a personal classic - 
          we're open to ideas.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="font-heading text-2xl md:text-3xl">2. Shortlist & Vote</h3>
        <p>
          If we receive lots of suggestions, we'll create a shortlist 
          of around 20 ales for the community to vote on to help us narrow it down.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="font-heading text-2xl md:text-3xl">3. Final 16 Revealed</h3>
        <p>
          Once voting closes, we'll reveal the final 16 barrels that 
          will feature at the festival.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="font-heading text-2xl md:text-3xl">4. Sponsor a Barrel</h3>
        <p>
          Each of the 16 selected barrels will be available to sponsor. 
          Sponsors will be linked directly to their chosen ale throughout the weekend.
        </p>
      </div>

    </div>

    <h3 className="font-heading text-2xl md:text-3xl mb-6">Got a beer you'd like to suggest?</h3>
    <OpenAleModalButton />

  </div>
</section>


      {/* HOW TO SPONSOR FORM */}
      <section className="py-16 md:py-24 bg-white text-[#052c2f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl mb-8">Enquire About <br className='md:hidden' />Sponsoring a Barrel</h2>

          <BarrelSponsorshipForm />


          <p className="mt-6 text-sm opacity-80">
            Or email us at <a href="mailto:info@thebellandbear.co.uk" className="underline">info@thebellandbear.co.uk</a> or call 01234 385537 and ask to speak to one of the managers.
          </p>
        </div>
      </section>

      {/* SHOWCASE / THANK YOU */}
      {/* <section className="py-24 bg-[#053c2f] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-5xl mb-10">Our Sponsors</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white text-[#052c2f] rounded-xl p-6 text-center space-y-3">
                <div className="h-20 bg-[#ccc] rounded-lg"></div>
                <p className="font-heading">Sponsor Name</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <AleSuggestionModal />

      <Footer />
    </>
  );
}
