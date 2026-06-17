import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────

type Ale = {
  name: string;
  brewery: string;
  abv: string;
  colour: string;
  style: string;
  description: string;
  image: string;
  local?: boolean;
  sponsorNote?: string;
};

type Draught = {
  name: string;
  producer: string;
  abv: string;
  description: string;
};

type Cider = {
  name: string;
  producer: string;
  abv: string;
  description: string;
};

type Wine = {
  name: string;
  type: string;
  origin: string;
  description: string;
};

type Soft = {
  name: string;
  description: string;
  alcoholFree?: boolean;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const ales: Ale[] = [
  {
    name: "Beautiful Game",
    brewery: "Vale Brewery",
    abv: "4.0%",
    colour: "Blonde",
    style: "Pale Ale",
    description: "A bright, refreshing blonde pale ale from local Vale Brewery. Light on the palate with gentle hop character and a clean, easy finish.",
    image: "/2026-ale/vale.png",
    local: true,
    sponsorNote: "Sponsored by The Hartshorns",
  },
  {
    name: "Abbot Ale",
    brewery: "Greene King",
    abv: "5.0%",
    colour: "Amber",
    style: "Bitter",
    description: "A rich, full-bodied amber bitter from one of England's most celebrated breweries. Malty with a satisfying depth and a long, warming finish.",
    image: "/2026-ale/abbot.png",
    sponsorNote: "Sponsored by Educare HR Solutions — educarehrsolutions.co.uk",
  },
  {
    name: "Fanny Ebbs",
    brewery: "Tring Brewery",
    abv: "3.9%",
    colour: "Blonde",
    style: "Pale Ale",
    description: "Named after a local legend, this blonde pale ale is light and refreshing with a floral hop aroma and a clean, crisp finish.",
    image: "/2025/ales/fanny-ebbs.png",
    local: true,
    sponsorNote: "Sponsored by Shipped Studio — shipped-studio.co.uk",
  },
  {
    name: "Sussex Best",
    brewery: "Harvey's",
    abv: "4.0%",
    colour: "Amber",
    style: "Bitter",
    description: "An iconic Sussex classic. Rich amber with complex malt flavours, subtle fruity hop character and a long, satisfying finish.",
    image: "/2025/ales/harveys.png",
    sponsorNote: "Sponsored by Judith Taylor",
  },
  {
    name: "Best Bitter",
    brewery: "Black Sheep",
    abv: "3.8%",
    colour: "Amber",
    style: "Bitter",
    description: "A well-balanced Yorkshire bitter from one of England's most beloved independent breweries. Clean, hoppy and very easy to drink.",
    image: "/2026-ale/BlackSheep.webp",
    sponsorNote: "Sponsored by Mark Sale — Painting & Decorating Services — 01234 567890",
  },
  {
    name: "Bass",
    brewery: "Marston's",
    abv: "4.4%",
    colour: "Golden",
    style: "Bitter",
    description: "Britain's most famous pale ale — a true icon. Lightly hopped with a gentle malt sweetness and a smooth, golden character.",
    image: "/2026-ale/bass.png",
    sponsorNote: "Sponsored by Mark Sale — Painting & Decorating Services — 01234 567890",
  },
  {
    name: "Cornish Best",
    brewery: "St Austell",
    abv: "3.4%",
    colour: "Amber",
    style: "Bitter",
    description: "A refreshing, sessionable amber bitter from Cornwall. Light and easy-drinking with a pleasant hop bitterness. Perfect for a long afternoon.",
    image: "/2026-ale/Cornish-Best-Beer-Card-Image.png",
    sponsorNote: "Sponsored by The Village Kitchen Emberton — thevillagekitchen.co.uk",
  },
  {
    name: "Mill Race",
    brewery: "Towcester Mill",
    abv: "3.9%",
    colour: "Blonde",
    style: "Pale Ale",
    description: "A fresh, approachable blonde pale ale from local Towcester Mill Brewery. Floral and fruity with a clean, refreshing finish.",
    image: "/2026-ale/towcester.webp",
    local: true,
  },
  {
    name: "Manhattan Project",
    brewery: "NVB",
    abv: "4.0%",
    colour: "Blonde",
    style: "Pale Ale",
    description: "A crisp, hoppy blonde pale ale from local NVB. Light in colour but full of flavour, with a punchy hop aroma and a dry, clean finish.",
    image: "/2025/ales/manhatten.png",
    local: true,
  },
  {
    name: "Inclined Plane",
    brewery: "Langton Brewery",
    abv: "4.2%",
    colour: "Amber",
    style: "Bitter",
    description: "A well-crafted amber bitter from Langton Brewery. Malt-forward with a firm hop backbone and a long, satisfying finish.",
    image: "/2026-ale/inclinedplane.jpg",
    local: true,
  },
  {
    name: "IPA",
    brewery: "Phipps NBC",
    abv: "4.3%",
    colour: "Golden",
    style: "IPA",
    description: "A classic British IPA from local legends Phipps NBC. Punchy hop aroma, citrus bite and a clean, bitter finish.",
    image: "/2025/ales/phipps-ipa.png",
    local: true,
    sponsorNote: "Sponsored by The Saturday Walkers",
  },
  {
    name: "Claudius",
    brewery: "Roman Way Brewery",
    abv: "4.5%",
    colour: "Amber",
    style: "IPA",
    description: "An amber IPA from Roman Way Brewery. Bold hop flavours balanced by a rich malt body — complex, confident and very drinkable.",
    image: "/2026-ale/Claudius-Website.png",
    local: true,
  },
  {
    name: "HSB",
    brewery: "Fuller's",
    abv: "4.8%",
    colour: "Amber",
    style: "Bitter",
    description: "Fuller's Honourable Special Bitter — a premium amber ale with a rich, warming malt character and a classic English hop finish.",
    image: "/2026-ale/HSB.png",
  },
  {
    name: "Ruby Mild",
    brewery: "Rudgate Brewery",
    abv: "4.4%",
    colour: "Ruby",
    style: "Mild",
    description: "A dark, brooding porter from local Phipps NBC. Notes of roasted coffee, dark chocolate and a smooth, velvety finish.",
    image: "/2026-ale/rubymild.png",
    sponsorNote: "Sponsored by The Knights",
  },
  {
    name: "Peculier Assassin",
    brewery: "Theakston",
    abv: "5.4%",
    colour: "Amber",
    style: "IPA",
    description: "A bold, powerful amber IPA from the makers of Old Peculier. Big hop flavour, warming strength and a long, complex finish.",
    image: "/2026-ale/pa.png",
  },
  {
    name: "Green Devil",
    brewery: "Oakham Ales",
    abv: "6.0%",
    colour: "Golden",
    style: "Pale Ale",
    description: "An intensely hopped golden IPA from Oakham Ales — the strongest of the weekend. Tropical fruit aromas, serious bitterness and a clean, dry finish. Handle with care.",
    image: "/2026-ale/Green-Devil-IPA-2024-PNG.png",
    local: true,
    sponsorNote: "Sponsored by The Brocks",
  },
];

const draughts: Draught[] = [
  { name: "Amstel", producer: "Heineken", abv: "4.1%", description: "" },
  { name: "Red Stripe", producer: "Red Stripe", abv: "4.7%", description: "" },
  { name: "Neck Oil", producer: "Beavertown", abv: "4.3%", description: "" },
  { name: "Cruzcampo", producer: "Cruzcampo", abv: "4.4%", description: "" },
  { name: "Hawkstone Cider", producer: "Hawkstone", abv: "5%", description: "" },
];

const ciders: Cider[] = [
  { name: "Traditional", producer: "Saxby's", abv: "5.8%", description: "" },
  { name: "Strawberry", producer: "Saxby's", abv: "3.4%", description: "" },
  { name: "Blackcurrant", producer: "Saxby's", abv: "3.4%", description: "" },
  { name: "Cherry", producer: "Saxby's", abv: "3.4%", description: "" },
  { name: "Plum", producer: "Saxby's", abv: "3.4%", description: "" },
  { name: "Straight Outta Orchards", producer: "Saxby's", abv: "7.5%", description: "" },
];

const wines = [
  { name: "Sauvignon Blanc", type: "White", origin: "Chile" },
  { name: "Pinot Grigio", type: "White", origin: "Italy" },
  { name: "Pinot Blush", type: "Rosé", origin: "Italy" },
  { name: "Prosecco", type: "Sparkling", origin: "Italy" },
  { name: "Malbec", type: "Red", origin: "Argentina" },
];

const spirits = [
  "Captain Morgans Spiced Rum",
  "Captain Morgans Dark Rum",
  "Smirnoff Vodka",
  "Gordon's Gin",
  "Whitley Neill Orange Gin",
  "Whitley Neill Black Cherry Gin",
  "Jack Daniel's",
  "Pimm's",
];

const softs = [
  "Coke",
  "Coke Zero",
  "Lemonade",
  "Slim Tonic",
  "Soda",
];

const zeroPercent = [
  "Moretti 0%",
  "Inch's Cider 0%",
  "Old Mout 0%",
  "Guinness 0%",
  "Gordon's 0% Gin",
  "Ghost Ship 0.5%",
];

// ─── Colour badge ─────────────────────────────────────────────────────────────

function ColourBadge({ colour }: { colour: string }) {
  const map: Record<string, string> = {
    "Blonde":   "bg-yellow-300/20 text-yellow-600",
    "Golden":   "bg-yellow-400/20 text-yellow-700",
    "Amber":    "bg-orange-400/20 text-orange-700",
    "Ruby":     "bg-red-700/20 text-red-400",
    "Brown":    "bg-stone-600/20 text-stone-400",
    "Dark":     "bg-stone-700/20 text-stone-300",
  };
  return (
    <span className={`text-xs font-body px-2 py-0.5 rounded-full ${map[colour] ?? "bg-white/10 text-white/60"}`}>
      {colour}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function DrinksLineup() {
  return (
    <>
      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white text-[#052c2f]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="hidden md:block relative w-full h-[420px] rounded-xl overflow-hidden">
            <img
              src="/reusable/DSC05791.jpg"
              alt="Real ales at The Bell & Bear Summer Festival"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-4xl md:text-5xl mb-8">The Drinks</h2>
            <div className="md:text-lg max-w-3xl space-y-4">
              <p>
                Across the weekend we'll be pouring an extensive range of real ales, draught lagers, ciders, wines and more — carefully chosen to give you something worth raising a glass to.
              </p>
              <p>
                Sixteen real ales on rotation, five draughts, five real ciders, and a full selection of wines, softs and alcohol-free options. There's something here for everyone.
              </p>
              <p>
                Many of our barrels are sponsored by local businesses and individuals — <Link href="/sponsors" className="text-[var(--teal)] font-semibold hover:underline">see all our sponsors here</Link>. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Real Ales ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--dark)] text-white" id="ales">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-6xl mb-4">Real Ales</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              16 hand-picked ales from local breweries and national favourites — all served straight from the cask.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...ales].sort((a, b) => parseFloat(a.abv) - parseFloat(b.abv)).map((ale) => (
              <div key={ale.name} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex flex-col">
                {/* Image */}
                {ale.image ? (
                  <div className="h-48 bg-white/5 flex items-center justify-center p-6">
                    <img src={ale.image} alt={ale.name} className="h-full w-auto object-contain" />
                  </div>
                ) : (
                  <div className="h-48 bg-white/5 flex items-center justify-center">
                    <span className="font-heading text-5xl text-white/10">{ale.name.charAt(0)}</span>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-2xl leading-tight">{ale.name}</h3>
                    <span className="font-heading text-[var(--yellow)] text-lg shrink-0">{ale.abv}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="text-white/50 text-sm font-body">{ale.brewery}</p>
                    {ale.local && (
                      <span className="text-xs font-body px-2 py-0.5 rounded-full bg-[var(--teal)]/20 text-[var(--teal)]">Local</span>
                    )}
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <ColourBadge colour={ale.colour} />
                    <span className="text-xs font-body px-2 py-0.5 rounded-full bg-white/10 text-white/60">{ale.style}</span>
                  </div>

                  {ale.sponsorNote && (
                    <p className="text-[var(--yellow)]/70 text-xs font-body mt-2 italic">{ale.sponsorNote}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Draught, Cider, Wine, Spirits, Softs & 0% ────────────────── */}
      <section className="py-24 bg-white text-[#052c2f]" id="draught">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-6xl mb-4">Draught, Cider & More</h2>
            <p className="text-[#052c2f]/60 text-lg max-w-xl mx-auto">
              Something for everyone — draught lager, real cider, wine, spirits, softs and alcohol-free options.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Draught */}
            <div>
              <h3 className="font-heading text-2xl mb-5 text-[var(--teal)]">Draught Lager & Cider</h3>
              <ul className="space-y-3">
                {draughts.map((d) => (
                  <li key={d.name} className="flex items-center justify-between gap-2 border-b border-black/10 pb-3">
                    <span className="font-heading text-lg">{d.name}</span>
                    <span className="text-[var(--teal)] font-heading text-sm">{d.abv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Real Cider */}
            <div>
              <h3 className="font-heading text-2xl mb-5 text-[var(--pink)]">Real Cider — Saxby's</h3>
              <ul className="space-y-3">
                {ciders.map((c) => (
                  <li key={c.name} className="flex items-center justify-between gap-2 border-b border-black/10 pb-3">
                    <span className="font-heading text-lg">{c.name}</span>
                    <span className="text-[var(--pink)] font-heading text-sm">{c.abv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wine */}
            <div>
              <h3 className="font-heading text-2xl mb-5 text-[#052c2f]">Wine</h3>
              <ul className="space-y-3">
                {wines.map((w) => (
                  <li key={w.name} className="flex items-center justify-between gap-2 border-b border-black/10 pb-3">
                    <span className="font-heading text-lg">{w.name}</span>
                    <span className="text-xs font-body px-2 py-0.5 rounded-full bg-black/5 text-[#052c2f]/60 shrink-0">{w.type}{w.origin ? ` · ${w.origin}` : ""}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spirits */}
            <div>
              <h3 className="font-heading text-2xl mb-5 text-[var(--teal)]">Spirits</h3>
              <ul className="space-y-3">
                {spirits.map((s) => (
                  <li key={s} className="font-heading text-lg border-b border-black/10 pb-3">{s}</li>
                ))}
              </ul>
            </div>

            {/* Softs */}
            <div>
              <h3 className="font-heading text-2xl mb-5 text-[var(--pink)]">Softs</h3>
              <ul className="space-y-3">
                {softs.map((s) => (
                  <li key={s} className="font-heading text-lg border-b border-black/10 pb-3">{s}</li>
                ))}
              </ul>
            </div>

            {/* 0% */}
            <div>
              <h3 className="font-heading text-2xl mb-5 text-[#052c2f]">Alcohol Free</h3>
              <ul className="space-y-3">
                {zeroPercent.map((s) => (
                  <li key={s} className="flex items-center justify-between gap-2 border-b border-black/10 pb-3">
                    <span className="font-heading text-lg">{s}</span>
                    <span className="text-xs font-body px-2 py-0.5 rounded-full bg-[var(--teal)]/20 text-[var(--teal)] shrink-0">0%</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
