import Image from 'next/image';

export default function SplitIntro() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-heading text-4xl md:text-6xl 2xl:text-8xl mb-6 text-[--var:dark] leading-none">
          Brews, Food, <br className='hidden 2xl:block'/>Live Music & <br className='hidden 2xl:block'/>Community
        </h2>
        <div className='text-md md:text-lg text-[--var:dark]/80 max-w-[85%] space-y-4'>
            <p>The Bell & Bear Summer Festival is a weekend of live music, great beer, local food and village spirit - all centred around our pub and community.</p>
            <p>From the 10th to the 12th July 2026, this year's festival will be our biggest yet.</p>
            <p>Watch out for our band line up for the weekend and our extensive array of ciders and beers.</p>
        </div>
          

      </div>

      <div className="rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/reusable/DSC05862.jpg"
          alt=""
          width={800}
          height={600}
          className="object-cover"
        />
      </div>
    </section>
  );
}
