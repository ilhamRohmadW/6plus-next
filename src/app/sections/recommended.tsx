import Image from "next/image";
import '@/app/assets/sass/components/recommend.sass';

export default function Recommend() {
    const items = [
        { 
            id: 1, 
            link: '#link1',
            tag: 'LIputan6 Update',
            image: "/image/news-1.png",
            title: 'VIDEO : Inovasi “Gila” Dari GITEX 2025',
            published: '1 jam yang lalu',
            duration: '05:30'
        },
        { 
            id: 2, 
            link: '#link2',
            tag: 'Zeneration',
            image: "/image/news-2.png",
            title: 'VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat',
            published: '1 jam yang lalu',
            duration: '05:30'
        },
        { 
            id: 3, 
            link: '#link3',
            tag: 'LIputan6 Update',
            image: "/image/news-3.png",
            title: 'VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia',
            published: '1 jam yang lalu',
            duration: '05:30'
        },
        { 
            id: 4, 
            link: '#link4',
            tag: 'LIputan6 Update',
            image: "/image/news-4.png",
            title: 'VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?',
            published: '1 jam yang lalu',
            duration: '05:30'
        },
        { 
            id: 5, 
            link: '#link5',
            tag: 'LIputan6 Update',
            image: "/image/news-1.png",
            title: 'VIDEO : Inovasi “Gila” Dari GITEX 2025',
            published: '1 jam yang lalu',
            duration: '05:30'
        },
        { 
            id: 6, 
            link: '#link1',
            tag: 'Zeneration',
            image: "/image/news-2.png",
            title: 'VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat',
            published: '1 jam yang lalu',
            duration: '05:30'
        },
        { 
            id: 7, 
            link: '#link2',
            tag: 'LIputan6 Update',
            image: "/image/news-3.png",
            title: 'VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia',
            published: '1 jam yang lalu',
            duration: '05:30'
        },
        { 
            id: 8, 
            link: '#link3',
            tag: 'LIputan6 Update',
            image: "/image/news-4.png",
            title: 'VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?',
            published: '1 jam yang lalu',
            duration: '05:30'
        },
    ];
  return (
    <div className="section section--recomendation">
        <div className="container">
            <div className="section--recomendation__wrapper bg-[#FFF1ED]">
                <div className="section__title">
                    <span className="section__title__text">
                        REKOMENDASI
                    </span>
                </div>
                <ul className="news-list *:*:shadow-[0_0_0_0_rgba(0,0,0,0.25)] *:*:hover:shadow-[0_0_16px_0_rgba(0,0,0,0.25)] *:*:transition-shadow">
                    {items.map(item => (
                        <li className="news-list__item" key={item.id}>
                            <a href={item.link} className="item group">
                                <figure className="item__figure">
                                    <Image
                                        className="item__figure__img"
                                        src={item.image}
                                        alt="news"
                                        width={236}
                                        height={133}
                                        style={{ height: 'auto' }}
                                    />
                                    <iframe className="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameBorder="0" allowFullScreen allow="encrypted-media *;"></iframe>
                                    <span className="item__time bg-black/70 text-white">
                                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                        <span>{item.duration}</span>
                                    </span>
                                </figure>
                                <span className="item__title">{item.title}</span>
                                <div className="item__detail text-neutral-500">
                                    <span className="item__tag">{item.tag}</span>
                                    <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                    <span className="item__published">{item.published}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
}
