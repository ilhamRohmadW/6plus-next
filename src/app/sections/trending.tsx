'use client';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css';
import Item from '../components/item';
import Image from "next/image";
import '@/app/assets/sass/components/trending.sass';
type Props = {
    image: string;
};
export default function Trending({image}: Props) {
    const swiperRef = useRef<SwiperType | null>(null);
    const handlePrev = () => {
        swiperRef.current?.slidePrev();
    };
    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    const handleProgress = (swiper: SwiperType) => {
        const swiperEl = swiper.el; // Swiper's root DOM element
        const customRowTitle = swiperEl.closest('.section--trending');

        if (customRowTitle) {
            if (swiper.progress === 0) {
                customRowTitle.classList.remove('bla');
            } else {
                customRowTitle.classList.add('bla');
            }
        }
    };
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
        { 
            id: 9, 
            link: '#link4',
            tag: 'LIputan6 Update',
            image: "/image/news-1.png",
            title: 'VIDEO : Inovasi “Gila” Dari GITEX 2025',
            published: '1 jam yang lalu',
            duration: '05:30'
        },
        { 
            id: 10, 
            link: '#link5',
            tag: 'Zeneration',
            image: "/image/news-2.png",
            title: 'VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat',
            published: '1 jam yang lalu',
            duration: '05:30'
        },
        { 
            id: 11, 
            link: '#link5',
            tag: 'LIputan6 Update',
            image: "/image/news-3.png",
            title: 'VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia',
            published: '1 jam yang lalu',
            duration: '05:30'
        },
        { 
            id: 12, 
            link: '#link5',
            tag: 'LIputan6 Update',
            image: "/image/news-4.png",
            title: 'VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?',
            published: '1 jam yang lalu',
            duration: '05:30'
        },
    ];
  return (
    <div className="section section--trending">
        <div className="container">
            <div className="section--trending__box bg-gradient-to-b from-[#FFDDC5] to-transparent">
                <div className="section--trending__box__row">
                    <div className="section--trending__box__row__title">
                        <figure className="section--trending__box__row__title__kly">
                            <Image
                                className="section--trending__box__row__title__kly-logo"
                                src="/image/kly-color.png"
                                alt="image"
                                width={50}
                                height={30}
                                style={{ width: 'auto', height: 'auto' }}
                            />
                        </figure>
                        <a href="#">
                            <figure className="section--trending__box__row__title__program">
                                <Image
                                    src={image}
                                    alt="image"
                                    width={220}
                                    height={50}
                                    style={{ height: 'auto' }}
                                />
                            </figure>
                        </a>
                        <a href="#" className="section--trending__box__row__title__more text-primary">
                            <span>Selengkapnya</span>
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0985 6.00013L1.7333 10.2661C1.41411 10.578 0.896478 10.578 0.577285 10.2661C0.258092 9.95412 0.258092 9.44826 0.577285 9.13533L4.39618 5.43528L0.642758 1.73523C0.437132 1.42532 0.474986 1.01941 0.733808 0.750472C0.99263 0.482534 1.40592 0.422569 1.73329 0.604511L6.09849 4.87043C6.41768 5.18236 6.41769 5.6882 6.0985 6.00013Z" fill="currentColor"></path><path d="M0.822266 0.835938C1.03896 0.611607 1.3837 0.558854 1.66113 0.706055L6.0127 4.95801C6.2827 5.22187 6.28262 5.64821 6.0127 5.91211L1.64746 10.1787C1.37591 10.4438 0.93463 10.4438 0.663086 10.1787C0.393426 9.91518 0.392701 9.48869 0.662109 9.22363L4.48145 5.52344L4.57129 5.43652L4.48242 5.34766L0.741211 1.66016C0.572633 1.39941 0.604967 1.06188 0.822266 0.835938Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.244917"></path></svg>
                        </a>
                    </div>

                    <div className="section--trending__box__row__swiper">
                        <Swiper className="text-black dark:text-white mask-x-from-95% mask-x-to-100%"
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            slidesPerView={'auto'}
                            mousewheel={true}
                            freeMode={true}
                            modules={[FreeMode,Mousewheel]}
                            onProgress={handleProgress}
                        >
                            {items.map(item => (
                                <SwiperSlide key={item.id}>
                                    <Item 
                                        link={item.link}
                                        image={item.image}
                                        imageWidth={236}
                                        imageHeight={133}
                                        duration={item.duration}
                                        title={item.title}
                                        tag={item.tag}
                                        published={item.published}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className="swiper-button swiper-button-prev"
                            onClick={handlePrev}>
                            <span className="swiper-button-icon text-primary bg-white">
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.846149 8.91354L9.05194 0.707752C9.65196 0.107729 10.625 0.107729 11.225 0.707752C11.8251 1.30778 11.8251 2.28082 11.225 2.88277L4.0462 10.0001L11.102 17.1174C11.4885 17.7135 11.4173 18.4943 10.9308 19.0116C10.4443 19.527 9.66734 19.6424 9.05195 19.2924L0.84617 11.0866C0.246146 10.4866 0.246125 9.51356 0.846149 8.91354Z" fill="currentColor"/>
                                </svg>
                            </span>
                        </button>
                        <button className="swiper-button swiper-button-next"
                            onClick={handleNext}>
                            <span className="swiper-button-icon text-primary bg-white">
                                <svg  width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1537 11.0865L2.94794 19.2922C2.34792 19.8923 1.37487 19.8923 0.774848 19.2922C0.174823 18.6922 0.174823 17.7192 0.774848 17.1172L7.95368 9.99994L0.897925 2.88264C0.511385 2.28651 0.582543 1.50571 1.06908 0.988392C1.55562 0.472995 2.33254 0.357649 2.94792 0.707625L11.1537 8.91341C11.7537 9.51344 11.7538 10.4864 11.1537 11.0865Z" fill="currentColor"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
