import '@/app/assets/sass/components/segment.sass';

export default function Segment() {
  const items = [
      { 
          id: 1, 
          link: '#link1',
          title: 'Liputan6 Update',
      },
      { 
          id: 2, 
          link: '#link2',
          title: 'Obrolan Balkon',
      },
      { 
          id: 3, 
          link: '#link3',
          title: 'Zeneration',
      },
      { 
          id: 4, 
          link: '#link4',
          title: 'Bincang Liputan6',
      },
      { 
          id: 5, 
          link: '#link4',
          title: 'Sisi Terang',
      },
  ];
  return (
    <div className="segment">
      <div className="container">
        <div className="segment--inner">
          <div className="segment--inner__box lg:bg-[#FFFBF7] dark:text-white lg:dark:bg-orange-950">
            <div className="segment--tag">
              <div className="segment--tag__box before:from-[#FFFBF7] after:from-[#FFFBF7] dark:before:from-orange-950 dark:after:from-orange-950 bg-[#FFFBF7] dark:bg-orange-950">
                <ul className="segment--list">
                  {items.map(item => (
                    <li className="segment--list__item" key={item.id}>
                      <a href={item.link} className="segment__link bg-[#FFF0E6] dark:bg-orange-800">
                        <span className="segment__link__title">{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a href="#" className="segment--soon border-primary/20 bg-primary/10">
              <span className="segment--soon__title">99 Jemaah Haji Indonesia Dirawat karena Pneumonia, Dilaporkan 1 Meninggal</span>
              <span className="segment--soon__button text-white bg-secondary">
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 17.5C3.81307 17.5 0 13.6869 0 9C0 4.31307 3.81307 0.5 8.5 0.5C13.1869 0.5 17 4.31307 17 9C17 13.6869 13.1869 17.5 8.5 17.5ZM8.5 1.68677C4.4668 1.68603 1.18601 4.9668 1.18601 9C1.18601 13.0332 4.4668 16.314 8.5 16.314C12.5332 16.314 15.814 13.0332 15.814 9C15.814 4.9668 12.5332 1.68601 8.5 1.68601V1.68677ZM6.54754 11.7916L8.91956 9.41956C9.03075 9.30837 9.09302 9.1579 9.09302 9.00002V4.25597C9.09302 3.92833 8.82765 3.66297 8.50001 3.66297C8.17237 3.66297 7.90701 3.92833 7.90701 4.25597V8.75466L5.70843 10.9532C5.4764 11.1853 5.4764 11.5603 5.70843 11.7916C5.82406 11.9072 5.97527 11.9651 6.12797 11.9651C6.27993 11.9651 6.43118 11.9072 6.54754 11.7916Z" fill="currentColor"/></svg>
                <span>Tonton Nanti</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
