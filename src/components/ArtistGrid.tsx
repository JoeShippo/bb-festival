import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

type Artist = {
  name: string;
  day: string;
  time: string;
  bio: string;
  image: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
};

const artists: Artist[] = [
  // Friday
  {
    name: "Neil Armstrong",
    day: "Friday",
    time: "6:00pm - 7:00pm",
    bio: "Soulful singer-songwriter bringing heartfelt originals and timeless covers to kick off the weekend.",
    image: "/music/neil-armstrong.jpg",
    instagram: "",
    facebook: "https://www.facebook.com/neilarmstrongmusic",
    youtube: "",
  },
  {
    name: "Jabberwocky",
    day: "Friday",
    time: "7:30pm - 8:30pm",
    bio: "High-energy indie rock outfit known for their infectious riffs and electrifying stage presence.",
    image: "/music/jebberwocky.jpg",
    instagram: "https://www.instagram.com/jabberwocky_band",
    facebook: "",
    youtube: "",
  },
  {
    name: "The Reformers",
    day: "Friday",
    time: "9:00pm - 10:30pm",
    bio: "Friday night headliners delivering a powerful set of classic rock anthems and crowd-pleasing originals.",
    image: "/music/reformers.jpg",
    instagram: "",
    facebook: "https://www.facebook.com/reformersmk",
    youtube: "",
  },
  // Saturday
  {
    name: "Emberton Spotlight",
    day: "Saturday",
    time: "1:30pm - 2:30pm",
    bio: "Local favourites bringing sunshine vibes and feel-good pop to get the afternoon started.",
    image: "/reusable/IMG_0715.jpg",
    instagram: "",
    facebook: "",
    youtube: "",
  },
  {
    name: "Jazz The Two of Us",
    day: "Saturday",
    time: "3:00pm - 4:00pm",
    bio: "A beautiful jazz duo weaving smooth melodies and improvisations perfect for a sunny afternoon.",
    image: "/music/jazzthe2ofus.jpg",
    instagram: "",
    facebook: "https://www.facebook.com/jazzthe2ofusmusic",
    youtube: "",
  },
  {
    name: "Isa",
    day: "Saturday",
    time: "4:30pm - 5:30pm",
    bio: "Captivating vocalist with a voice that fills every corner of the room and leaves you wanting more.",
    image: "/music/isa.jpg",
    instagram: "https://www.instagram.com/Isasongstress",
    facebook: "https://www.facebook.com/isasongstress/",
    youtube: "https://youtube.com/@isasongstress",
  },
  {
    name: "Sam Wilkinson",
    day: "Saturday",
    time: "6:00pm - 7:00pm",
    bio: "Acoustic artist blending folk and pop with introspective lyrics and a warm, intimate sound.",
    image: "/music/samwilkinson.jpg",
    instagram: "",
    facebook: "https://www.facebook.com/thesamwilkinson/",
    youtube: "https://www.youtube.com/@thesamwilkinson",
  },
  {
    name: "Sam Wilson Sax",
    day: "Saturday",
    time: "7:30pm - 8:30pm",
    bio: "Silky saxophone grooves that bridge jazz, soul and funk - impossible not to move to.",
    image: "/music/samwilson.jpg",
    instagram: "https://www.instagram.com/sam.wilsn/",
    facebook: "",
    youtube: "",
  },
  {
    name: "Little White Lights",
    day: "Saturday",
    time: "9:00pm - 10:30pm",
    bio: "Saturday night headliners bringing indie anthems and euphoric energy to close out the big day.",
    image: "/music/littlewhitelights.jpg",
    instagram: "",
    facebook: "https://www.facebook.com/LittleWhiteLightsOfficial",
    youtube: "",
  },
  // Sunday
  {
    name: "Olney Brass Band",
    day: "Sunday",
    time: "12:30pm - 1:30pm",
    bio: "A rousing brass band to start Sunday with a bang - traditional sounds with a playful twist.",
    image: "/music/olneybrass.jpg",
    instagram: "https://www.instagram.com/olneybrass",
    facebook: "https://www.facebook.com/olneybrass",
    youtube: "",
  },
  {
    name: "Rhys Taylor",
    day: "Sunday",
    time: "2:00pm - 3:00pm",
    bio: "Soulful and sincere, Rhys brings a stripped-back acoustic set full of emotion and storytelling.",
    image: "/music/rhystaylor.jpg",
    instagram: "",
    facebook: "https://www.facebook.com/profile.php?id=61568195116045",
    youtube: "",
  },
  {
    name: "Archy Phipps",
    day: "Sunday",
    time: "3:30pm - 4:30pm",
    bio: "Blues-infused guitar work and gravel-voiced charisma from one of the area's most loved performers.",
    image: "/music/archy.jpeg",
    instagram: "",
    facebook: "",
    youtube: "https://youtube.com/@archytomas843",
  },
  {
    name: "The Naughty Step",
    day: "Sunday",
    time: "5:00pm - 6:30pm",
    bio: "The perfect festival closer - massive sing-alongs, non-stop energy, and a setlist built for dancing.",
    image: "/music/naughtystep.jpg",
    instagram: "https://www.instagram.com/thenaughtystepofficial/",
    facebook: "",
    youtube: "",
  },
];

const dayAccent: Record<string, string> = {
  Friday: "text-[var(--pink)]",
  Saturday: "text-[var(--yellow)]",
  Sunday: "text-[var(--teal)]",
};

export default function ArtistGrid() {
  return (
    <section className="py-24">
      <div className=" mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

          {/* Header cell - spans 3 cols at xl so row 1 = header + 1 artist card */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 md:min-h-[380px] rounded-2xl border border-white/10 flex flex-col justify-center md:px-10 md:py-12 pb-12">
            <h2 className="font-heading text-5xl md:text-6xl mb-4">Meet The Artists</h2>
            <p className=" text-lg max-w-lg">
              13 acts across 3 days - get to know the performers joining us this summer.
            </p>
          </div>

          {artists.map((artist) => (
            <div
              key={artist.name}
              className="group relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-[380px] flex flex-col justify-end shadow-xl"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-top md:bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${artist.image})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-heading text-sm uppercase tracking-widest ${dayAccent[artist.day]}`}>
                    {artist.day}
                  </span>
                  <span className="text-white/40 text-xs">·</span>
                  <span className="text-white/60 text-xs font-body">{artist.time}</span>
                </div>

                <h3 className="font-heading text-2xl text-white leading-tight mb-2">{artist.name}</h3>

                <p className="hidden md:block text-white/70 text-sm font-body leading-relaxed mb-4">
                  {artist.bio}
                </p>

                {/* Social links */}
                {(artist.instagram || artist.facebook || artist.youtube) && (
                  <div className="flex gap-3">
                    {artist.instagram && (
                      <a
                        href={artist.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${artist.name} on Instagram`}
                        className="text-white/60 hover:text-[var(--pink)] transition-colors"
                      >
                        <FaInstagram size={18} />
                      </a>
                    )}
                    {artist.facebook && (
                      <a
                        href={artist.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${artist.name} on Facebook`}
                        className="text-white/60 hover:text-[var(--yellow)] transition-colors"
                      >
                        <FaFacebook size={18} />
                      </a>
                    )}
                    {artist.youtube && (
                      <a
                        href={artist.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${artist.name} on YouTube`}
                        className="text-white/60 hover:text-red-400 transition-colors"
                      >
                        <FaYoutube size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
