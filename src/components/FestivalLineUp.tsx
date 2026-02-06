const lineup = [
  {
    day: "Friday",
    colour: "bg-[var(--pink)]/15 border-[var(--pink)]/40",
    accent: "text-[var(--pink)]",
    sets: [
      { time: "4:30pm – 5:30pm", artist: "TBC" },
      { time: "6:00pm – 7:00pm", artist: "TBC" },
      { time: "7:30pm – 8:30pm", artist: "TBC" },
      { time: "9:00pm – 10:30pm", artist: "TBC" },
    ],
  },
  {
    day: "Saturday",
    colour: "bg-[var(--yellow)]/15 border-[var(--yellow)]/40",
    accent: "text-[var(--yellow)]",
    sets: [
      { time: "1:30pm – 2:30pm", artist: "TBC" },
      { time: "3:00pm – 4:00pm", artist: "TBC" },
      { time: "4:30pm – 5:30pm", artist: "TBC" },
      { time: "6:00pm – 7:00pm", artist: "TBC" },
      { time: "7:30pm – 8:30pm", artist: "TBC" },
      { time: "9:00pm – 10:30pm", artist: "TBC" },
    ],
  },
  {
    day: "Sunday",
    colour: "bg-[var(--teal)]/15 border-[var(--teal)]/40",
    accent: "text-[var(--teal)]",
    sets: [
      { time: "12:15pm – 1:30pm", artist: "TBC" },
      { time: "2:00pm – 3:00pm", artist: "TBC" },
      { time: "3:30pm – 4:30pm", artist: "TBC" },
      { time: "5:00pm – 6:30pm", artist: "TBC" },
    ],
  },
];

export default function FestivalLineup() {
  return (
    <section className="py-24 bg-[var(--dark)] text-white relative overflow-hidden">
      {/* Subtle festival texture / glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-5xl mb-16 text-center">
          The Line-Up
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {lineup.map((day) => (
            <div
              key={day.day}
              className={`
                ${day.colour}
                rounded-3xl
                p-8
                border
                backdrop-blur-sm
                shadow-xl
                transition
                hover:-translate-y-1
              `}
            >
              <h3
                className={`font-heading text-3xl mb-6 text-center ${day.accent}`}
              >
                {day.day}
              </h3>

              <ul className="space-y-4">
                {day.sets.map((set, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="font-body text-sm text-white/70">
                      {set.time}
                    </span>

                    <span className="text-2xl font-heading tracking-wide">
                      {set.artist}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-white/70 text-lg">
          Full artist line-up to be announced soon. Times subject to change.
        </p>
      </div>
    </section>
  );
}
