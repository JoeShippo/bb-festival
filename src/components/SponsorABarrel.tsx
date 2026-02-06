import Link from "next/link";

export default function SponsorABarrel() {
  return (
    <section className="py-24 bg-white text-[#052c2f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Sponsor a Barrel
          </h2>

          <p className="md:text-lg mb-4 text-[#052c2f]/80">
            This year at the Bell & Bear Summer Festival, we're opening
            up our barrels for sponsorship.
          </p>

          <p className="md:text-lg text-[#052c2f]/80">
            It's a simple way to support the festival, help cover event and
            entertainment costs, and contribute to community and charity
            fundraising - while enjoying a few perks along the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {/* Benefit 1 */}
          <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body text-center">
              <h3 className="font-heading text-2xl mb-2 text-[var(--pink)]">
                Logo Exposure
              </h3>
              <p>
                Your logo displayed at the festival bar, in the printed
                programme, and across the festival website.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body text-center">
              <h3 className="font-heading text-2xl mb-2 text-[var(--teal)]">
                Complimentary Drinks Tokens
              </h3>
              <p>
                Complimentary drink tokens so you and your guests can enjoy the weekend.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body text-center">
              <h3 className="font-heading text-2xl mb-2 text-[var(--green)]">
                Support the Community
              </h3>
              <p>
                Be part of a local event that brings people together and helps
                support good causes.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/barrel-sponsorship" className="btn btn-primary md:btn-lg">
            Find out more about sponsoring a barrel
          </Link>
        </div>
      </div>
    </section>
  );
}
 