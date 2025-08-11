import '@/app/assets/sass/components/bigVideo.sass';
type Props = {
  live?: boolean;
};

export default function BigVideo({live}: Props) {
  return (
    <div className="big-video bg-black">
        <div className="big-video__wrapper">
            <iframe className="vidio-embed" src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameBorder="0" allowFullScreen allow="encrypted-media *;"></iframe>
        </div>
        <div className="big-video__description bg-black" style={{'--instream-bg': 'url("../image/instream.png")'} as React.CSSProperties}>
            {live && (
                <div className="live-info">
                    <span className="live-info__badge bg-red-500 text-white">
                        LIVE NOW
                    </span>
                    <div className="live-info__meta">
                        <span className="live-info__title text-secondary font-medium">
                        Live Liputan6 Update
                        </span>
                        <span className="live-info__views text-gray-400">
                            <svg className="live-info__views__icon text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 4.5C4.5 4.5 1.73 10 1.73 10s2.77 5.5 8.27 5.5S18.27 10 18.27 10 15.5 4.5 10 4.5zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/><circle cx="10" cy="10" r="2.5" fill="currentColor" /></svg>
                            1,320 views
                        </span>
                    </div>
                </div>
            )}
            <span className="big-video__description__title">Dedi Mulyadi Soroti Pembangunan Tempat Wisata di Lembang yang Picu Bencana</span>
            <span className="big-video__description__text">Gubernur Jawa Barat Dedi Mulyadi buka suara terkait bencana yang melanda kawasan Lembang. Dedi Mulyadi menilai pembangunan vila hingga kafe di tempat wisata jadi pemicu bencana di Lembang.</span>
            <a href="#" className="big-video__description__button bg-secondary hover:bg-white hover:text-primary">Tonton Selengkapnya</a>
        </div>
    </div>
  );
}
