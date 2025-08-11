'use client';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import Item from '../components/item';
import '@/app/assets/sass/components/videoList.sass';
type Props = {
  title: string;
  titleIcon?: boolean;
};
export default function VideoList({title, titleIcon}: Props) {
    const swiperRef = useRef<SwiperType | null>(null);
  
    const handlePrev = () => {
      swiperRef.current?.slidePrev();
    };
  
    const handleNext = () => {
      swiperRef.current?.slideNext();
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
    <div className="section section--video dark:text-white">
        <div className="container">
            <div className="section__title">
                <span className="section__title__text">
                    {titleIcon && (
                        <div>
                            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.97146 0C8.97146 0 8.22728 3.23322 10.0877 6.12293C11.9475 9.01263 18.299 14.707 9.31498 20C9.31498 20 11.2176 17.296 10.2592 15.4505C9.30069 13.605 7.24088 12.2316 7.58375 9.34186C7.58375 9.34186 4.86613 10.4724 6.06747 15.5934C6.06747 15.5934 4.5369 15.0356 3.89272 13.5264C3.89272 13.5264 2.94139 16.4875 4.6869 19.95C4.6869 19.95 -4.54002 15.5499 2.89853 7.00283C2.89853 7.00283 3.05568 9.79253 4.15767 10.5653C4.15767 10.5653 2.34072 3.01179 8.97146 0Z" fill="#FF3300"/></svg>
                        </div>
                    )}
                    {title}
                </span>
                <a href="#" className="section__title__more text-primary">
                    <span>Selengkapnya</span>
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0985 6.00013L1.7333 10.2661C1.41411 10.578 0.896478 10.578 0.577285 10.2661C0.258092 9.95412 0.258092 9.44826 0.577285 9.13533L4.39618 5.43528L0.642758 1.73523C0.437132 1.42532 0.474986 1.01941 0.733808 0.750472C0.99263 0.482534 1.40592 0.422569 1.73329 0.604511L6.09849 4.87043C6.41768 5.18236 6.41769 5.6882 6.0985 6.00013Z" fill="currentColor"></path><path d="M0.822266 0.835938C1.03896 0.611607 1.3837 0.558854 1.66113 0.706055L6.0127 4.95801C6.2827 5.22187 6.28262 5.64821 6.0127 5.91211L1.64746 10.1787C1.37591 10.4438 0.93463 10.4438 0.663086 10.1787C0.393426 9.91518 0.392701 9.48869 0.662109 9.22363L4.48145 5.52344L4.57129 5.43652L4.48242 5.34766L0.741211 1.66016C0.572633 1.39941 0.604967 1.06188 0.822266 0.835938Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.244917"></path></svg>
                </a>
            </div>
            <Swiper className="section--video__swiper swiper *:*:*:dark:hover:shadow-white/20"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                slidesPerView={'auto'}
                mousewheel={true}
                modules={[Mousewheel]}
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
                            detailClass={'text-neutral-500 dark:text-white'}
                            tag={item.tag}
                            published={item.published}
                        />
                    </SwiperSlide>
                ))}
                <button className="swiper-button swiper-button-prev"
                    onClick={handlePrev}>
                    <span className="swiper-button-icon bg-white text-primary">
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.846149 8.91354L9.05194 0.707752C9.65196 0.107729 10.625 0.107729 11.225 0.707752C11.8251 1.30778 11.8251 2.28082 11.225 2.88277L4.0462 10.0001L11.102 17.1174C11.4885 17.7135 11.4173 18.4943 10.9308 19.0116C10.4443 19.527 9.66734 19.6424 9.05195 19.2924L0.84617 11.0866C0.246146 10.4866 0.246125 9.51356 0.846149 8.91354Z" fill="currentColor"/>
                        </svg>
                    </span>
                </button>
                <button className="swiper-button swiper-button-next bg-gradient-to-r from-transparent to-50% to-white dark:to-zinc-900"
                    onClick={handleNext}>
                    <span className="swiper-button-icon bg-white text-primary">
                        <svg  width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1537 11.0865L2.94794 19.2922C2.34792 19.8923 1.37487 19.8923 0.774848 19.2922C0.174823 18.6922 0.174823 17.7192 0.774848 17.1172L7.95368 9.99994L0.897925 2.88264C0.511385 2.28651 0.582543 1.50571 1.06908 0.988392C1.55562 0.472995 2.33254 0.357649 2.94792 0.707625L11.1537 8.91341C11.7537 9.51344 11.7538 10.4864 11.1537 11.0865Z" fill="currentColor"/>
                        </svg>
                    </span>
                </button>
            </Swiper>
        </div>
    </div>
  );
}
