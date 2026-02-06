import Image from "next/image";
import Link from "next/link";

export default function DrinksHighlight() {
  return (
    <section className="py-24 bg-white text-[#052c2f]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: IMAGE PLACEHOLDER */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/reusable/DSC05791.jpg"
            alt="Real ales and drinks at The Bell & Bear Summer Festival"
            width={800}
            height={600}
            className="object-cover"
          />
        </div>

        {/* RIGHT: CONTENT */}
        <div>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            The Drinks
          </h2>

          <p className="md:text-lg mb-4 text-[--var:dark]/80">
            Across the weekend, we'll be pouring an extensive range of real ales, beers and ciders from a carefully chosen mix of local favourites and standout national producers.
          </p>

          <p className="md:text-lg mb-4 text-[--var:dark]/80">
            Expect <strong>16 guest ales</strong> on rotation throughout the festival.
          </p>

          <p className="md:text-lg mb-4 text-[--var:dark]/80">
            We're currently finalising the line-up and are always open to suggestions. If there's a brewery or beer you'd love to see on the bar, <Link href="/contact" className="text-[var(--teal)] font-semibold hover:underline">let us know</Link>.
          </p>

          <p className="md:text-lg mb-6 text-[--var:dark]/80">
            We'll also be opening up selected casks for sponsorship. If you're interested in sponsoring a barrel - whether as a business, group, or individual - you can{" "}
            <Link
              href="/barrel-sponsorship"
              className="text-[var(--pink)] font-semibold hover:underline"
            >
              find out more here
            </Link>.
          </p>

          <p className="md:text-lg text-[#052c2f]/80">
            Not a beer drinker? No problem. Alongside the ales, we'll be serving
            lagers, wines, spirits, soft drinks, and a full range of alcohol-free
            options throughout the weekend.
          </p>
        </div>
      </div>
    </section>
  );
}
