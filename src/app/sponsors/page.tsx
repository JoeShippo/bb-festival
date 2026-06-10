export { metadata } from './metadata';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SponsorsSection from '@/components/SponsorsSection';

export default function SponsorsPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[20vh] grid place-items-center bg-[var(--yellow)] py-20 md:py-30 text-[#052c2f]">
        <div className="text-center -rotate-2">
          <h1 className="font-heading text-6xl md:text-[120px] leading-[0.85]">
            Our Sponsors
          </h1>
          <p className="mt-4 text-2xl md:text-4xl font-heading">
            The people who make it all happen
          </p>
        </div>
      </section>

      <SponsorsSection />

      <Footer />
    </>
  );
}
