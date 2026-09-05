import { NotifyForm } from '@/components/forms/notify-form';
export function LaunchSection() {
  return (
    <section id="notify" className="launch-section section">
      <div className="container launch-grid">
        <div>
          <p className="eyebrow lime">OVRLD 001 / GET READY</p>
          <h2 className="title">
            001 IS
            <br />
            COMING.
          </h2>
        </div>
        <div className="launch-right">
          <p>Be first to know when preorders open.</p>
          <NotifyForm />
        </div>
      </div>
    </section>
  );
}
