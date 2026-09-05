import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
const screens = [
  {
    src: '/images/app-home.webp',
    alt: 'OVRLD Home showing recent workouts and training volume',
    label: 'TRACK.',
    description: 'Understand the history.',
  },
  {
    src: '/images/app-log.webp',
    alt: 'OVRLD workout logging with previous sets, weight and reps',
    label: 'LOG.',
    description: 'Record the work.',
  },
  {
    src: '/images/app-progress.webp',
    alt: 'OVRLD Profile showing a volume chart and workout history',
    label: 'PROGRESS.',
    description: 'Know what changed.',
  },
];
export function AppScreens({ all = false }: { all?: boolean }) {
  return (
    <div className={`app-screens ${all ? 'full' : ''}`}>
      {screens.map((screen, index) => (
        <figure key={screen.src} className={`app-screen screen-${index}`}>
          <div className="phone-frame">
            <Image
              src={screen.src}
              alt={screen.alt}
              width={1320}
              height={2868}
              sizes="(max-width: 700px) 48vw, 23vw"
            />
          </div>
          {all && (
            <figcaption>
              <h2>{screen.label}</h2>
              <p>{screen.description}</p>
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
export function AppShowcase() {
  return (
    <section className="app-section section">
      <div className="container">
        <div className="app-heading">
          <p className="eyebrow lime">THE DIGITAL SIDE OF OVRLD</p>
          <h2 className="title">
            GEAR FOR THE WORK.
            <br />
            <span className="muted">SOFTWARE FOR THE PROGRESS.</span>
          </h2>
        </div>
        <div className="app-showcase-grid">
          <div className="app-showcase-copy">
            <p className="eyebrow">
              OVRLD APP <span className="status-label">COMING SOON</span>
            </p>
            <div className="app-points">
              {[screens[1], screens[0], screens[2]].map((item, index) => (
                <div key={item.label}>
                  <span className="eyebrow muted">0{index + 1}</span>
                  <div>
                    <h3>{item.label}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/app" className="text-link">
              EXPLORE THE APP <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <AppScreens />
        </div>
      </div>
    </section>
  );
}
