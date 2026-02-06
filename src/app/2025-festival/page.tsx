'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Slider from 'react-slick';
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"

import { useState, useEffect } from 'react';

export default function Festival2025Page() {
const [lightboxOpen, setLightboxOpen] = useState(false);
const [activeImage, setActiveImage] = useState<string | null>(null);


useEffect(() => {
  document.body.style.overflow = lightboxOpen ? 'hidden' : '';
  return () => {
    document.body.style.overflow = '';
  };
}, [lightboxOpen]);



    function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Previous slide"
      className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        z-10
        w-12 h-12
        rounded-full
        bg-white
        text-[#052c2f]
        shadow-lg
        flex items-center justify-center
        transition-all duration-300
        hover:bg-[var(--yellow)]
        hover:scale-110
        cursor-pointer
      "
    >
      <FaChevronLeft />
    </button>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Next slide"
      className="
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        z-10
        w-12 h-12
        rounded-full
        bg-white
        text-[#052c2f]
        shadow-lg
        flex items-center justify-center
        transition-all duration-300
        hover:bg-[var(--yellow)]
        hover:scale-110
        cursor-pointer
      "
    >
      <FaChevronRight />
    </button>
  );
}

const gallerySettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '15%',
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '0%',
      },
    },
  ],
};


const galleryImages = [
    '/2025/Business-Suite_creation_805015195183293.jpg',
  '/2025/Business-Suite_creation_1194724359335836.jpg',
  '/2025/Business-Suite_creation_1902878567230523.jpg',
  '/2025/Business-Suite_creation_1936193163820748.jpg',
  '/2025/Business-Suite_creation_2025661781573881.jpg',
  '/2025/Business-Suite_creation_2265870803830691.jpg',
  
  '/2025/DSC_3357-scaled.jpg',
  '/2025/DSC05779_1.jpg',
  '/2025/DSC05784.jpg',
  '/2025/DSC05786.jpg',
  '/2025/DSC05787.jpg',
  '/2025/DSC05790_1.jpg',
  '/2025/DSC05791.jpg',
  '/2025/DSC05792_1.jpg',
  '/2025/DSC05793_1.jpg',
  '/2025/DSC05822.jpg',
  '/2025/DSC05835.jpg',
  '/2025/DSC05842.jpg',
  '/2025/DSC05848-rotated.jpg',
  '/2025/DSC05853.jpg',
  '/2025/DSC05860.jpg',
  '/2025/DSC05861.jpg',
  '/2025/DSC05862.jpg',
  '/2025/DSC05864.jpg',
  '/2025/DSC05881.jpg',
  '/2025/DSC05883.jpg',
  '/2025/DSC05885.jpg',
  '/2025/DSC05890-rotated.jpg',
  '/2025/DSC05896.jpg',
  '/2025/DSC05899.jpg',
  '/2025/DSC05901.jpg',
  '/2025/DSC05904.jpg',
  '/2025/IMG-20250711-WA0015.jpg',
  '/2025/IMG-20250713-WA0004.jpg',
  '/2025/IMG-20250713-WA0005.jpg',
  '/2025/IMG-20250713-WA0006.jpg',
  '/2025/IMG-20250713-WA0012.jpg',
];


const ales = [
  { file: 'anthem.jpg', name: 'Anthem by St Austell' },
  { file: 'XT4.jpeg', name: 'XT4 by XT' },
  { file: 'dizzy.png', name: 'Dizzy Blonde by Robinsons' },
  { file: 'egyptiancream.png', name: 'Egyptian Cream by Nene Valley Brewery' },
  { file: 'fanny-ebbs.png', name: 'Fanny Ebbs by Tring' },
  { file: 'farmersblonde.png', name: 'Farmers Blonde by Bradfield Brewery' },
  { file: 'hairofdog.png', name: 'Hair of the Dog by Pennine Brewery' },
  { file: 'harveys.png', name: 'Sussex Best by Harveys' },
  { file: 'hop-kitty.png', name: 'Hop Kitty by Animal (XT)' },
  { file: 'manhatten.png', name: 'Manhattan Project by Nene Valley Brewery' },
  { file: 'old-peculier.png', name: 'Old Peculier by Theakston' },
  { file: 'phipps-ipa.png', name: 'IPA by Phipps' },
  { file: 'red-star.png', name: 'Red Star by Phipps' },
  { file: 'senate-gold.png', name: 'Senate Gold by Roman Way Brewery' },
  { file: 'steamale.webp', name: 'Steam Ale by Towcester Mill' },
  { file: 'unlocked-hornes.webp', name: 'Unlocked Hornes by Hornes Brewery' },
];


  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[20vh] grid place-items-center bg-[var(--pink)] py-30 text-[#052c2f] overflow-hidden">
        <div className="text-center -rotate-2 px-6">
          <h1 className="font-heading text-6xl md:text-[120px] leading-[0.85]">
            Festival 2025
          </h1>
          <p className="mt-4 text-2xl md:text-4xl font-heading">
            A weekend to remember
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white text-[#052c2f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-5xl mb-6">Looking Back</h2>

          <div className="space-y-4 text-lg max-w-3xl">
            <p>
              The 2025 Bell & Bear Summer Festival brought together incredible music,
              outstanding ales and a brilliant community atmosphere.
            </p>
            <p>
              Across three packed days, we welcomed bands, brewers and festival-goers
              from across the region.
            </p>
          </div>
        </div>
      </section>

      {/* LINE UP – 3 COLUMNS */}
      <section className="py-24 bg-[#052c2f] text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-5xl mb-12">The Line-Up</h2>

          <div className="grid md:grid-cols-3 gap-10 text-lg">
            {/* FRIDAY */}
            <div>
              <h3 className="font-heading text-3xl mb-4">Friday</h3>
              <ul className="space-y-2 opacity-90">
                <li>The Reformers</li>
                <li>Devon Bailey</li>
                <li>J45</li>
              </ul>
            </div>

            {/* SATURDAY */}
            <div>
              <h3 className="font-heading text-3xl mb-4">Saturday</h3>
              <ul className="space-y-2 opacity-90">
                <li>Francis</li>
                <li>Plato</li>
                <li>The Recollections</li>
                <li>Tinkers Lane</li>
                <li>Blindsight</li>
              </ul>
            </div>

            {/* SUNDAY */}
            <div>
              <h3 className="font-heading text-3xl mb-4">Sunday</h3>
              <ul className="space-y-2 opacity-90">
                <li>Sam the Saxophonist</li>
                <li>Crossroots</li>
                <li>Olney Brass</li>
                <li>Emberton Spotlight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SLIDER */}
      <section className="py-24 bg-white text-[#052c2f]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-5xl mb-10">Festival Gallery</h2>

<Slider {...gallerySettings}>
  {galleryImages.map((src, index) => (
    <div key={src} className="px-3">
      <div className="relative h-[420px] rounded-xl overflow-hidden cursor-zoom-in"
        onClick={() => {
          setActiveImage(src);
          setLightboxOpen(true);
        }}
      >
        <img
          src={src}
          alt={`Festival 2025 image ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  ))}
</Slider>

        </div>
      </section>

      {/* ALES – 4 COLUMNS */}
      <section className="py-24 bg-[var(--yellow)] text-[#052c2f]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-5xl mb-10">Ales on Tap</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {ales.map((ale) => (
    <div
      key={ale.file}
      className="bg-white rounded-xl p-4 text-center shadow"
    >
      <div className="relative h-40 mb-4">
        <img
          src={`/2025/ales/${ale.file}`}
          alt={ale.name}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      <p className="font-heading text-lg">{ale.name}</p>
    </div>
  ))}
</div>

        </div>
      </section>

      <Footer />


      {lightboxOpen && activeImage && (
  <div
    className="
      fixed inset-0 z-[200]
      bg-black/90
      flex items-center justify-center
      p-6
      cursor-zoom-out
      animate-in fade-in zoom-in duration-200
    "
    onClick={() => setLightboxOpen(false)}
  >
    <img
      src={activeImage}
      alt="Enlarged festival image"
      className="max-w-full max-h-full rounded-lg shadow-2xl"
    />
  </div>
)}


    </>
  );
}
