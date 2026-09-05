import {
  CampaignImage,
  type CampaignMedia,
} from '@/components/campaign/campaign-image';
export function HowToUse({
  steps,
}: {
  steps: { title: string; description: string; media?: CampaignMedia }[];
}) {
  if (!steps.length) return null;
  return (
    <section className="section container">
      <h2 className="title">THE SETUP.</h2>
      <div className="how-to-grid">
        {steps.map((step, index) => (
          <article key={step.title}>
            {step.media && (
              <CampaignImage
                media={step.media}
                sizes="(max-width: 700px) 100vw, 30vw"
              />
            )}
            <span className="eyebrow lime">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p className="copy">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
