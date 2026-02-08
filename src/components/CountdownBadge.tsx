import { useCountdown } from '@/hooks/useCountdown';

export function CountdownBadge() {
  const { totalMs, days, hours, minutes } = useCountdown(
    new Date('2026-07-10T14:00:00')
  );

  // ⛔ Hide completely once started
  if (totalMs <= 0) return null;

  const lessThanDay = totalMs < 1000 * 60 * 60 * 24;
  const lessThanHour = totalMs < 1000 * 60 * 60;

  return (
    <div className="absolute top-5 right-3 md:top-10 md:right-10 z-30 w-[220px] rotate-6 scale-[0.6]
    sm:scale-90
    md:scale-100
    origin-top-right">
      {/* SVG SHAPE */}

      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl"  viewBox="-10 -10 365.95 317.61">
  <g>
    <path d="M70.12,18.96c9.74-4.49,20.3-8.91,30.69-11.69,37.7-10.07,110.33-9.69,147.85,1.21,8.95,2.6,18.18,6.15,26.45,10.46,16.23-31.97,64.1-20.17,60.33,17.46-1.03,10.3-8.36,18.85-16.93,23.95,3.29,4.75,6.07,11.36,8,16.92,5.53,15.96,12.87,38.93,16.64,55.18,10.95,47.18-29.59,95.2-64.08,122.88-70.14,56.28-142.29,56.43-212.42,0C36.06,230.74-3.4,184.9.23,143.11c1.2-13.82,13.64-50.47,18.7-65.09,2.02-5.85,4.79-12.68,8.25-17.67-15.97-8.77-22-27.91-13.12-44.05,12.19-22.15,46.48-20.74,56.05,2.66Z" fill="#1e1e1d" stroke="#ffffff" strokeWidth="6" vectorEffect="non-scaling-stroke"/>
  </g>
</svg>

      {/* CONTENT OVERLAY */}
      <div className="
        absolute inset-0
        flex flex-col items-center justify-center
        font-heading text-[var(--green)]
        text-center
        px-6
      ">
        <div className="text-lg uppercase tracking-widest mb-0">
          {lessThanDay ? 'Starting in' : 'Starts in'}
        </div>

        {/* ≥ 24 HOURS → DAYS ONLY */}
        {!lessThanDay && (
          <>
            <div className="text-7xl">{days}</div>
            <div className="text-2xl tracking-widest">  
                {days === 1 ? 'Day' : 'Days'}
            </div>
          </>
        )}

        {/* < 24 HOURS → HOURS + MINS */}
        {lessThanDay && !lessThanHour && (
          <div className="flex flex-row items-center">
            <div className="text-7xl mr-2">
              {hours}
              <span className="text-3xl ml-0.5">h</span>
            </div>
            <div className="text-7xl">
              {minutes}
              <span className="text-3xl ml-0.5">m</span>
            </div>
          </div>
        )}

        {/* < 1 HOUR → MINUTES ONLY */}
        {lessThanHour && (
          <>
            <div className="text-7xl">{minutes}</div>
            <div className="text-3xl tracking-widest">
                {minutes === 1 ? 'Minute' : 'Minutes'}
            </div>
          </>
        )}
      </div>
    </div>
  );
}