import Nav from '@/components/Nav';
import HeroBanner from '@/components/HeroBanner';
import SplitIntro from '@/components/SplitIntro';
import FoodHighlight from '@/components/FoodHighlight';
import SponsorABarrel from '@/components/SponsorABarrel';
import Footer from '@/components/Footer';
import FestivalLineup from '@/components/FestivalLineUp';
import DrinksHighlight from '@/components/DrinksHighlight';
import SponsorshipSection from '@/components/SponsorshipSection';

export default function Home() {
  return (
    <>
      <Nav />
      <HeroBanner />
      <SplitIntro />
      <FestivalLineup />
      <DrinksHighlight />
      <FoodHighlight />
      <SponsorshipSection />
      <Footer />
    </>
  );
}
