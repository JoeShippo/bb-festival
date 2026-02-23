import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SponsorshipForm from './SponsorshipForm';
import Link from 'next/link';

function PackageCard({
  title,
  price,
  features,
  availability,
  secured,
  highlight,
}: {
  title: string;
  price?: string;
  features: string[];
  availability?: string;
  secured?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl p-8 space-y-6 shadow-lg overflow-hidden ${
        highlight
          ? 'bg-white '
          : 'bg-white'
      } ${secured ? 'opacity-80' : ''}`}
    >
      {/* SECURED STAMP */}
      {secured && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rotate-[-20deg] border-4 border-[var(--blue)] text-[var(--blue)] text-3xl md:text-5xl font-bold px-10 py-4 uppercase tracking-widest bg-white/70">
            Secured
          </div>
        </div>
      )}

      <h3 className="font-heading text-3xl">{title}</h3>

      {price && (
        <p className="text-3xl font-heading">{price}</p>
      )}

      <ul className="space-y-2 list-disc list-inside">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      {availability && !secured && (
        <p className="font-semibold text-red-600">{availability}</p>
      )}
    </div>
  );
}
export default function SponsorshipPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[20vh] grid place-items-center bg-[var(--blue)] py-20 md:py-30 text-white">
        <div className="text-center px-6 -rotate-1">
          <h1 className="font-heading text-6xl md:text-[120px] leading-[0.85]">
            Festival Sponsorship
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-heading">
            Partner With The Bell & Bear's Summer Festival 2026
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-24 bg-white text-[#052c2f]">
        <div className="max-w-5xl mx-auto px-6 space-y-6 md:text-lg">
          <h2 className="font-heading text-4xl md:text-5xl">
            Support a Growing Community Festival
          </h2>
          <p>
            The Bell & Bear's Summer Festival is a three-day event
            in Emberton, bringing together live music, local businesses,
            families and visitors from across Buckinghamshire.
          </p>
          <p>
            With hundreds of attendees across the weekend, sponsorship places
            your brand at the heart of the action - on stage, on signage,
            across social media and in our printed festival programme.
          </p>
          <p className="font-semibold">
            Every sponsor is featured in our pre-event promotion across
            website and social media.
          </p>
        </div>
      </section>

      {/* TIER 1 */}
      <section className="py-16 md:py-24 bg-[var(--yellow)] text-[#052c2f]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <h2 className="font-heading text-5xl">Tier 1 - Headline Packages</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <PackageCard
              title="Music Sponsor"
              price="£3,000"
              highlight
              features={[
                '1/2 4m x 2m Welcome Banner at entrance',
                'Full Page in Festival Programme',
                'Social Media & Website',
                '5 x Drinks Vouchers',
              ]}
              secured
            />

            <PackageCard
              title="Stage Sponsor (Full Cost)"
              price="£3,000"
              features={[
                '1/2 4m x 2m Welcome Banner at entrance',
                'Full Page in Festival Programme',
                'Social Media & Website',
                '5 x Drinks Vouchers',
              ]}
              availability="1 Left!"
            />
          </div>
        </div>
      </section>

      {/* TIER 2 */}
      <section className="py-16 md:py-24 bg-white text-[#052c2f]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <h2 className="font-heading text-5xl">Tier 2 - Featured Sponsors</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <PackageCard
              title="Stage Sponsor (Partial)"
              price="£1,000"
              features={[
                '1/3 banner across bottom of stage',
                'Half Page in Programme',
                'Social Media & Website',
                '5 x Drinks Vouchers',
              ]}
              availability="3 Left!"
            />

            <PackageCard
              title="Luxury Toilets"
              price="£700"
              features={[
                'A-Frame advertising at toilet entrance',
                'Half Page in Programme',
                'Social Media & Website',
                '5 x Drinks Vouchers',
              ]}
              secured
            />
          </div>
        </div>
      </section>

      {/* TIER 3 */}
      {/* TIER 3 */}
<section className="py-16 md:py-24 bg-[var(--yellow)] text-[#052c2f]">
  <div className="max-w-7xl mx-auto px-6 space-y-12">
    <h2 className="font-heading text-5xl">Tier 3 - Supporting Sponsors</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <PackageCard
        title="Transport"
        price="TBC"
        features={[
          'Festival Programme advertisement',
          'Social Media & Website',
          '5 x Drinks Vouchers',
        ]}
        secured
      />

      <PackageCard
        title="Cups"
        price="£600"
        features={[
          'Festival Programme advertisement',
          'Social Media & Website',
          '5 x Drinks Vouchers',
        ]}
        secured
      />

      <PackageCard
        title="Lighting & Decoration"
        price="£500"
        features={[
          'Festival Programme advertisement',
          'Social Media & Website',
          '5 x Drinks Vouchers',
        ]}
        availability="1 Left!"
      />

      <PackageCard
        title="General Sponsorship"
        price="£300"
        features={[
          'Festival Programme advertisement',
          'Social Media & Website',
          '5 x Drinks Vouchers',
        ]}
        //availability="Unlimited"
      />
    </div>
  </div>
</section>

      {/* BARREL CROSS SELL */}
      {/* TIER 4 */}
<section className="py-16 md:py-24 bg-white text-[#052c2f]">
  <div className="max-w-7xl mx-auto px-6 space-y-12">
    <h2 className="font-heading text-5xl">Tier 4 - Barrel Sponsorship</h2>

    <div className="bg-[var(--yellow)] rounded-xl p-10 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      
      <div className="space-y-4 md:max-w-2xl">
        <h3 className="font-heading text-3xl">Sponsor a Barrel - £100</h3>
        <p className="md:text-lg">
          Ideal for individuals and small businesses who want to support
          Summer Festival and gain visibility.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Festival Programme - Single Line</li>
          <li>Social Media & Website Feature</li>
          <li>3 x Drinks Tokens</li>
        </ul>
        <p className="font-semibold">
          16 barrels available - sponsor at any time.
        </p>
      </div>

      <div>
        <Link
          href="/barrel-sponsorship"
          className="btn btn-primary"
        >
          View Barrel Sponsorship
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* FORM */}
      <section className="py-16 md:py-24 bg-white text-[#052c2f] border-t">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl mb-8">
            Enquire About Sponsorship
          </h2>

          <SponsorshipForm />

          <p className="mt-6 text-sm opacity-80">
            Or email{' '}
            <a href="mailto:info@bbfestival.co.uk" className="underline">
              info@thebellandbear.co.uk
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}