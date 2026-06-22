import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

// ─── Types ───────────────────────────────────────────────────────────────────

type Sponsor = {
  name: string;
  logo?: string;         // path relative to /public, e.g. "/sponsors/graphcentric.png"
  bio?: string;
  website?: string;
  email?: string;
  phone?: string;
  facebook?: string;
  instagram?: string;
};

// ─── Sponsor Data ────────────────────────────────────────────────────────────

const festivalSponsors: {
  tier: 1 | 2 | 3;
  sponsor: Sponsor;
}[] = [
  // Tier 1
  {
    tier: 1,
    sponsor: {
      name: "GraphCentric",
      logo: "/sponsors/graphcentric.png",
      bio: "GraphCentric builds intelligent data platforms that help businesses make smarter decisions - putting the right information in the right hands, at the right time. Their technology connects people, applications and AI across a shared body of business knowledge, so organisations can move faster without losing control of what matters. We're proud to have them as our headline sponsor this year.",
      website: "https://graphcentric.com/index",
      email: "",
      phone: "",
      facebook: "",
      instagram: "",
    },
  },
  // Tier 2
  {
    tier: 2,
    sponsor: {
      name: "Oak Wealth Planning",
      logo: "/sponsors/oakwealth.jpeg",
      bio: "Oak Wealth Planning is a Milton Keynes-based financial advisory firm dedicated to helping you make confident, informed decisions at every stage of life. Whether you're planning for retirement, protecting what matters most, getting on the property ladder or growing your wealth - Rob Jordan and the team take the time to understand your goals and build a plan around them.\n\nWith whole-of-market research, innovative technology and a genuinely personal approach, Rob and the team go beyond the numbers. They're proud to be authorised and regulated by the Financial Conduct Authority, giving you the peace of mind that your finances are in safe hands.\n\nClarity. Confidence. Your future.",
      website: "https://oakwp.co.uk",
      email: "info@oakwp.co.uk",
      phone: "01234 888825",
      facebook: "",
      instagram: "",
    },
  },
  // Tier 3

  {
    tier: 3,
    sponsor: {
      name: "Souls Coaches",
      logo: "",
      bio: "Souls Coaches has been getting people where they need to go since 1923. This family-owned, Olney-based coach hire company offers everything from airport transfers and corporate travel to school trips, UK tours and Christmas party transport - with a fleet ranging from 16 to 100 seats.\n\n Over a century of reliability, and still going strong. We're delighted to have them on board.",
      website: "https://soulscoaches.co.uk/",
      email: "sales@souls-coaches.co.uk",
      phone: "01234 711242",
      facebook: "",
      instagram: "",
    },
  },
    {
    tier: 3,
    sponsor: {
      name: "pibmadly",
      logo: "/sponsors/pib.png",
      bio: "A huge thank you to Maddi & Richard for their incredibly generous sponsorship this year - we couldn't do it without you.",
      website: "",
      email: "",
      phone: "",
      facebook: "",
      instagram: "",
    },
  },
];

const barrelSponsors: Sponsor[] = [
  {
    name: "Mark Sale Painting & Decorating",
    logo: "",
    bio: "From painting and wallpapering to coving, laminate flooring, flat pack assembly, garden fencing, shed re-felting and exterior wood treatment - Mark Sale turns his hand to it all. \n \nNo job too big or small, and every job finished to the highest standard. Fully insured and happy to provide a free, no obligation quote.",
    website: "",
    email: "markwsale@gmail.com",
    phone: "07835 783937",
    facebook: "",
    instagram: "",
  },
  {
    name: "The Village Kitchen",
    logo: "",
    bio: "Run by Callum and Jodie out of The Bell & Bear itself, The Village Kitchen serves honest, home-cooked food with heart. \n\nFrom legendary Sunday roasts and full English breakfasts to themed evening menus - the menu changes, but the quality never does. Pop in on the weekend or book ahead via WhatsApp.",
    website: "",
    email: "hello@thevillagekitchen.co.uk",
    phone: "",
    facebook: "https://www.facebook.com/profile.php?id=61585899123062",
    instagram: "https://www.instagram.com/thevillagekitchenemberton/",
  },
  {
    name: "Shipped Studio",
    logo: "",
    bio: "Shipped Studio is the digital agency behind this very website. They build custom-coded websites, handle technical SEO, and run marketing campaigns for small businesses across Milton Keynes and beyond. \n\nNo templates, no vague promises - just fast, effective digital work for businesses with something worth saying.",
    website: "https://shipped-studio.co.uk",
    email: "hello@shipped-studio.co.uk",
    phone: "07356 203989",
    facebook: "",
    instagram: "",
  },
  {
    name: "Educare HR Solutions",
    logo: "",
    bio: "Based in Olney, EduCare HR Solutions provides compassionate, people-first HR support to schools, early years providers, care settings and growing SMEs. \n\nFrom safer recruitment and staff wellbeing to policy development and compliance - they believe the heart of every organisation is its people, and they're here to help it beat stronger.",
    website: "https://www.educarehrsolutions.co.uk/",
    email: "info@educarehrsolutions.co.uk",
    phone: "07368 942468",
    facebook: "",
    instagram: "",
  },
  // Family sponsors
  {
    name: "Judith Taylor",
    logo: "",
    bio: "Thank you to Judith - your support is greatly appreciated and helps make this festival happen.",
    website: "",
    email: "",
    phone: "",
    facebook: "",
    instagram: "",
  },
  {
    name: "The Brock Family",
    logo: "",
    bio: "Thank you to The Brock Family - your support is greatly appreciated and helps make this festival happen.",
    website: "",
    email: "",
    phone: "",
    facebook: "",
    instagram: "",
  },
  {
    name: "The Knight Family",
    logo: "",
    bio: "Thank you to The Knight Family - your support is greatly appreciated and helps make this festival happen.",
    website: "",
    email: "",
    phone: "",
    facebook: "",
    instagram: "",
  },
  {
    name: "The Hartshorn Family",
    logo: "",
    bio: "Thank you to The Hartshorn Family - your support is greatly appreciated and helps make this festival happen.",
    website: "",
    email: "",
    phone: "",
    facebook: "",
    instagram: "",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SponsorLinks({ sponsor, light }: { sponsor: Sponsor; light?: boolean }) {
  const hasLinks = sponsor.website || sponsor.email || sponsor.phone || sponsor.facebook || sponsor.instagram;
  if (!hasLinks) return null;

  const base = light ? "text-[#052c2f]/50 hover:text-[#052c2f]" : "text-white/60 hover:text-white";

  return (
    <div className="flex flex-wrap gap-3 mt-auto pt-4">
      {sponsor.website && (
        <a href={sponsor.website} target="_blank" rel="noopener noreferrer"
          className={`flex items-center gap-1.5 text-sm transition-colors ${base}`}>
          <FaGlobe size={13} /> Website
        </a>
      )}
      {sponsor.email && (
        <a href={`mailto:${sponsor.email}`}
          className={`flex items-center gap-1.5 text-sm transition-colors ${base}`}>
          <FaEnvelope size={13} /> Email
        </a>
      )}
      {sponsor.phone && (
        <a href={`tel:${sponsor.phone}`}
          className={`flex items-center gap-1.5 text-sm transition-colors ${base}`}>
          <FaPhone size={13} /> {sponsor.phone}
        </a>
      )}
      {sponsor.facebook && (
        <a href={sponsor.facebook} target="_blank" rel="noopener noreferrer"
          className={`flex items-center gap-1.5 text-sm transition-colors ${light ? "text-[#052c2f]/50 hover:text-[var(--blue)]" : "text-white/60 hover:text-[var(--blue)]"}`}>
          <FaFacebook size={13} /> Facebook
        </a>
      )}
      {sponsor.instagram && (
        <a href={sponsor.instagram} target="_blank" rel="noopener noreferrer"
          className={`flex items-center gap-1.5 text-sm transition-colors ${light ? "text-[#052c2f]/50 hover:text-[var(--pink)]" : "text-white/60 hover:text-[var(--pink)]"}`}>
          <FaInstagram size={13} /> Instagram
        </a>
      )}
    </div>
  );
}

function SponsorLogo({ sponsor, size }: { sponsor: Sponsor; size: 'lg' | 'md' | 'sm' }) {
  if (!sponsor.logo) return null;

  const circleSize = size === 'lg' ? 'w-24 h-24' : size === 'md' ? 'w-18 h-18' : 'w-12 h-12';
  const padding = size === 'lg' ? 'p-3' : size === 'md' ? 'p-2.5' : 'p-1.5';

  return (
    <div className={`${circleSize} ${padding} rounded-full bg-white border-2 border-white/30 flex items-center justify-center shrink-0`}>
      <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="w-full h-full object-contain" />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SponsorsSection() {
  const tier1 = festivalSponsors.filter((s) => s.tier === 1);
  const tier2 = festivalSponsors.filter((s) => s.tier === 2);
  const tier3 = festivalSponsors.filter((s) => s.tier === 3);

  return (
    <>
      {/* ── Festival Sponsors ─────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--dark)] text-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-6xl mb-4">Festival Sponsors</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              The incredible businesses and individuals whose generosity makes the Bell &amp; Bear Summer Festival possible.
            </p>
          </div>

          {/* ── Tier 1 – Headline (full-width card) ── */}
          {tier1.map(({ sponsor }) => (
            <div key={sponsor.name}
              className="mb-12 rounded-3xl border border-[var(--yellow)]/40 bg-[var(--yellow)]/5 p-10 md:p-14 flex flex-col md:flex-row items-center gap-10">
              {/* Text */}
              <div className="flex-1 min-w-0">
                <span className="text-[var(--yellow)] font-heading text-sm uppercase tracking-widest mb-1 block">
                  Headline Sponsor
                </span>
                <h3 className="font-heading text-4xl md:text-5xl mb-3">{sponsor.name}</h3>
                {sponsor.bio && <p className="text-white/70 text-base">{sponsor.bio.split('\n').map((line, i) => (<span key={i}>{line}{i < sponsor.bio!.split('\n').length - 1 && <br />}</span>))}</p>}
                <SponsorLinks sponsor={sponsor} />
              </div>
              {/* Logo in the whitespace */}
              {sponsor.logo && (
                <div className="hidden md:flex shrink-0 w-64 w-64 items-center justify-center p-6">
                  <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="w-full h-full object-contain" />
                </div>
              )}
            </div>
          ))}
          

          {/* ── Tier 2 left, Tier 3 stacked right ── */}
          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* Left column – Tier 2 */}
            {tier2.length > 0 && (
              <div className="flex flex-col gap-6 md:w-1/2">
                {tier2.map(({ sponsor }) => (
                  <div key={sponsor.name}
                    className="rounded-2xl border border-[var(--teal)]/40 bg-[var(--teal)]/5 p-8 flex flex-col gap-4 h-full">
                    <div className="flex items-center gap-4">
                      <SponsorLogo sponsor={sponsor} size="md" />
                      <div>
                        <span className="text-[var(--teal)] font-heading text-xs uppercase tracking-widest block mb-0.5">
                          Supporting Sponsor
                        </span>
                        <h3 className="font-heading text-3xl">{sponsor.name}</h3>
                      </div>
                    </div>
                    {sponsor.bio && <p className="text-white/70 text-sm">{sponsor.bio.split('\n').map((line, i) => (<span key={i}>{line}{i < sponsor.bio!.split('\n').length - 1 && <br />}</span>))}</p>}
                    <SponsorLinks sponsor={sponsor} />
                  </div>
                ))}
              </div>
            )}

            {/* Right column – Tier 3 stacked */}
            {tier3.length > 0 && (
              <div className="flex flex-col gap-6 md:w-1/2">
                {tier3.map(({ sponsor }) => (
                  <div key={sponsor.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <SponsorLogo sponsor={sponsor} size="sm" />
                      <h3 className="font-heading text-xl">{sponsor.name}</h3>
                    </div>
                    {sponsor.bio && <p className="text-white/70 text-sm">{sponsor.bio.split('\n').map((line, i) => (<span key={i}>{line}{i < sponsor.bio!.split('\n').length - 1 && <br />}</span>))}</p>}
                    <SponsorLinks sponsor={sponsor} />
                  </div>
                ))}
              </div>
            )}

          </div>




        </div>
      </section>

      {/* ── Barrel Sponsors ───────────────────────────────────────────── */}
      <section className="py-24 bg-white text-[#052c2f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-6xl mb-4">Barrel Sponsors</h2>
            <p className="text-[#052c2f]/60 text-lg max-w-xl mx-auto">
              Every barrel on tap this weekend has a name behind it. A huge thank you to our barrel sponsors - your contribution keeps the festival flowing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {barrelSponsors.map((sponsor) => (
              <div key={sponsor.name}
                className="rounded-2xl border border-[#052c2f]/10 bg-[#052c2f]/5 p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <SponsorLogo sponsor={sponsor} size="sm" />
                  <h3 className="font-heading text-xl">{sponsor.name}</h3>
                </div>
                {sponsor.bio && <p className="text-[#052c2f]/70 text-sm">{sponsor.bio.split('\n').map((line, i) => (<span key={i}>{line}{i < sponsor.bio!.split('\n').length - 1 && <br />}</span>))}</p>}
                <SponsorLinks sponsor={sponsor} light />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
