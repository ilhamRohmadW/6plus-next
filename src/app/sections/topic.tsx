import '@/app/assets/sass/components/topic.sass';

export default function Topic() {
    const items = [
        { 
            id: 1, 
            link: '#link1',
            title: 'Vaksin'
        },
        { 
            id: 2, 
            link: '#link2',
            title: 'Gaza'
        },
        { 
            id: 3, 
            link: '#link3',
            title: 'Prabowo'
        },
        { 
            id: 4, 
            link: '#link4',
            title: 'Ormas'
        },
        { 
            id: 5, 
            link: '#link5',
            title: 'Ganjar Pranowo'
        },
        { 
            id: 6, 
            link: '#link1',
            title: 'Bebaskan Gaza'
        },
        { 
            id: 7, 
            link: '#link2',
            title: 'Prancis'
        },
        { 
            id: 8, 
            link: '#link3',
            title: 'Apel'
        },
        { 
            id: 9, 
            link: '#link4',
            title: 'Jakarta'
        },
        { 
            id: 10, 
            link: '#link5',
            title: 'Videotron'
        },
        { 
            id: 11, 
            link: '#link5',
            title: 'Megalodon'
        },
        { 
            id: 12, 
            link: '#link5',
            title: 'Pameran'
        },
    ];
  return (
    <div className="section section--topik dark:text-white">
        <div className="container">
            <div className="section__title">
                <span className="section__title__text">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3384 6.59313L11.673 12.4867L7.3384 9.55891L2.39544 15.2243L0 13.1331L6.76806 5.3764L11.2548 8.34218L14.5627 4.8821L12.0532 3.28514L19.5057 0.775635L20 8.30415L17.3384 6.59313Z" fill="#FF6600"/></svg> 
                    TOPIK POPULER
                </span>
                <a href="#" className="section__title__more text-primary">
                    <span>Selengkapnya</span>
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0985 6.00013L1.7333 10.2661C1.41411 10.578 0.896478 10.578 0.577285 10.2661C0.258092 9.95412 0.258092 9.44826 0.577285 9.13533L4.39618 5.43528L0.642758 1.73523C0.437132 1.42532 0.474986 1.01941 0.733808 0.750472C0.99263 0.482534 1.40592 0.422569 1.73329 0.604511L6.09849 4.87043C6.41768 5.18236 6.41769 5.6882 6.0985 6.00013Z" fill="currentColor"></path><path d="M0.822266 0.835938C1.03896 0.611607 1.3837 0.558854 1.66113 0.706055L6.0127 4.95801C6.2827 5.22187 6.28262 5.64821 6.0127 5.91211L1.64746 10.1787C1.37591 10.4438 0.93463 10.4438 0.663086 10.1787C0.393426 9.91518 0.392701 9.48869 0.662109 9.22363L4.48145 5.52344L4.57129 5.43652L4.48242 5.34766L0.741211 1.66016C0.572633 1.39941 0.604967 1.06188 0.822266 0.835938Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.244917"></path></svg>
                </a>
            </div>
            <ul className="topik-list text-black">
                {items.map(item => (
                    <li className="topik-list__item" key={item.id}>
                        <a className="topik-list__link bg-gray-200 hover:bg-primary hover:text-white" href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}
