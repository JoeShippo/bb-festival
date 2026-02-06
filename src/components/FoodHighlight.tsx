import Image from "next/image";

const vendors = [
  {
    name: "The Village Kitchen",
    logo: "/vendors/village-kitchen.jpg",
    bg: "bg-neutral-800/10",
  },
  {
    name: "Sizzlers",
    logo: "/vendors/sizzlers.jpg",
    bg: "bg-neutral-900/10",
  },
  {
    name: "RaSoi 6",
    logo: "/vendors/rasoi-6.png",
    bg: "bg-[#4b1d2a]/10",
  },
  {
    name: "The Little Oven of Joy",
    logo: "/vendors/little-oven-of-joy.webp",
    bg: "bg-[#c56a2d]/10",
  },
];


export default function FoodHighlight() {
  return (
    <section className="bg-[var(--teal)]/20 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-[#052c2f]">
            Food You Know (And Love!)
          </h2>

          <p className="md:text-lg mb-4 text-[--var:dark]/80">
            This year's Bell & Bear Summer Festival brings together four of your
            favourite food traders - all familiar faces you'll already know from
            the pub. From sizzling street food to comforting classics, expect bold
            flavours from the traders you've grown to love!
          </p>

          <p className="md:text-lg text-[--var:dark]/80">
            Whether you're craving favourites from The Village Kitchen, stacked
            burgers and hot dogs from Sizzlers, rich curries from RaSoi 6, or
            wood-fired pizza from The Little Oven of Joy, you'll find something
            worth queuing for. Come hungry - you're in very good hands.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 bg-base-100 rounded-2xl p-8 shadow-xl">
  {vendors.map((vendor) => (
    <div
      key={vendor.name}
      className={`
        ${vendor.bg}
        flex items-center justify-center
        rounded-xl
        p-8
        transition
        hover:-translate-y-1
        hover:shadow-lg
      `}
    >
      <Image
        src={vendor.logo}
        alt={`${vendor.name} logo`}
        width={220}
        height={120}
        className="object-contain max-h-24"
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
