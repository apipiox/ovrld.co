import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="not-found section container">
      <p className="eyebrow lime">404 / OUTSIDE THE SET</p>
      <h1 className="title">NOTHING HERE. YET.</h1>
      <p className="copy">
        This page could not be found. Head back to the first drop.
      </p>
      <Link className="action" href="/001">
        EXPLORE OVRLD 001 ↗
      </Link>
    </main>
  );
}
