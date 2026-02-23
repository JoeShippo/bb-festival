import Link from "next/link";

export default function SponsorshipSection() {
  return (
    <section className="py-24 bg-white text-[#052c2f]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-left mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Sponsorship Opportunities
          </h2>

          <p className="md:text-lg mb-4 text-[#052c2f]/80">
            The Bell & Bear's Summer Festival is a three-day community celebration
            bringing together live music, families, local businesses and visitors
            from across Buckinghamshire.
          </p>

          <p className="md:text-lg text-[#052c2f]/80">
            Whether you're looking for premium stage branding or a simple way
            to show your support, we have sponsorship opportunities to suit
            businesses of all sizes.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">

          {/* Benefit 1 */}
          <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body text-center">
              <h3 className="font-heading text-2xl mb-2 text-[var(--pink)]">
                Brand Visibility
              </h3>
              <p>
                Prominent exposure across stage signage, printed programmes,
                on-site branding and digital promotion.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body text-center">
              <h3 className="font-heading text-2xl mb-2 text-[var(--teal)]">
                Engage With The Community
              </h3>
              <p>
                Align your business with a trusted, community-owned pub and
                one of the area's most loved summer events.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body text-center">
              <h3 className="font-heading text-2xl mb-2 text-[var(--green)]">
                Support Live Music & Fundraising
              </h3>
              <p>
                Your sponsorship helps fund entertainment, infrastructure and
                charitable giving across the festival weekend.
              </p>
            </div>
          </div>
        </div>

        {/* CTA SPLIT */}
        <div className="flex flex-col md:flex-row justify-center gap-6 text-center">

          <Link
            href="/sponsorship"
            className="btn btn-primary md:btn-lg"
          >
            View Festival Sponsorship Packages
          </Link>

          <Link
            href="/barrel-sponsorship"
            className="btn btn-outline md:btn-lg"
          >
            Sponsor a Barrel
          </Link>

        </div>

      </div>
    </section>
  );
}