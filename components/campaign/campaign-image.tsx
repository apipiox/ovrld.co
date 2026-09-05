import Image from 'next/image';
export type CampaignMedia = {
  image: string;
  alt: string;
  webm?: string;
  mp4?: string;
  captions?: string;
};
export function CampaignImage({
  media,
  className = '',
  sizes = '100vw',
  priority = false,
}: {
  media: CampaignMedia;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`campaign-image ${className}`}>
      {media.webm || media.mp4 ? (
        <video
          controls
          playsInline
          preload="none"
          poster={media.image}
          aria-label={media.alt}
        >
          {media.webm && <source src={media.webm} type="video/webm" />}
          {media.mp4 && <source src={media.mp4} type="video/mp4" />}
          <track
            kind="captions"
            src={media.captions}
            srcLang="en"
            label="English"
            default
          />
          Your browser does not support this video.
        </video>
      ) : (
        <Image
          src={media.image}
          alt={media.alt}
          fill
          sizes={sizes}
          preload={priority}
        />
      )}
    </div>
  );
}
