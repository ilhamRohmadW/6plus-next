import Image from "next/image";
type Props = {
  link: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  duration: string;
  title: string;
  detailClass?: string;
  tag: string;
  published: string;
};

export default function Item({
  link,
  image,
  imageWidth,
  imageHeight,
  duration,
  title,
  detailClass,
  tag,
  published
  }: Props) {
  return (
    <a href={link} className="item group">
      <figure className="item__figure">
        <Image
          className="item__figure__img"
          src={image}
          alt="news"
          width={imageWidth}
          height={imageHeight}
          style={{ height: 'auto' }}
        />
        <iframe className="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameBorder="0" allowFullScreen allow="encrypted-media *;"></iframe>
        <span className="item__time bg-black/70 text-white">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
          <span>{duration}</span>
        </span>
      </figure>
      <span className="item__title">{title}</span>
      <div className={`item__detail ${detailClass}`}>
        <span className="item__tag">{tag}</span>
        <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
        <span className="item__published">{published}</span>
      </div>
    </a>
  );
}
