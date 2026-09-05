import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AppScreens } from '@/components/app/app-showcase';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'OVRLD App — Log. Track. OVRLD.',
  'A native lifting tracker for workout logging, previous performance, training volume and workout history. Coming soon.',
  '/app',
);
export default function AppPage() {
  return (
    <main id="main">
      <section className="app-page-hero section container">
        <div className="app-page-heading">
          <div>
            <p className="eyebrow lime">OVRLD APP / COMING SOON</p>
            <h1 className="display">
              LOG.
              <br />
              TRACK.
              <br />
              <span className="lime">OVRLD.</span>
            </h1>
          </div>
          <div>
            <p className="app-page-lead">
              THE WORK ADDS UP.
              <br />
              KEEP A RECORD.
            </p>
            <p className="copy">
              Your sets. Your training history. Your progress. A native lifting
              tracker that keeps the work in view, from the first rep to the
              next session.
            </p>
            <span className="status-label">COMING SOON</span>
          </div>
        </div>
        <AppScreens all />
      </section>
      <section className="app-details section container">
        <p className="eyebrow lime">BUILT AROUND YOUR TRAINING</p>
        <h2 className="title">
          PICK UP WHERE
          <br />
          YOU LEFT OFF.
        </h2>
        <div className="detail-topics">
          {[
            {
              title: 'EVERY SET, RECORDED.',
              text: 'Log weight and reps, see previous performance, and follow your completed sets through a workout.',
            },
            {
              title: 'A HISTORY THAT STAYS USEFUL.',
              text: 'Revisit your sessions, exercises, and sets. See the training you have already put in.',
            },
            {
              title: 'PROGRESS IN PERSPECTIVE.',
              text: 'Follow training volume and workout history to understand what changed over time.',
            },
          ].map((item, index) => (
            <div key={item.title}>
              <span className="eyebrow muted">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <p className="preview-note">
          Screenshots from the current OVRLD app build. The app is not yet
          available to download.
        </p>
      </section>
      <section className="app-closing section container">
        <p className="eyebrow muted">PHYSICAL TOOLS. DIGITAL PROGRESS.</p>
        <h2 className="title">
          SAME INTENTION.
          <br />
          DIFFERENT TOOLS.
        </h2>
        <Link href="/001" className="action">
          MEET OVRLD 001 <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
