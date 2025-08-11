import '@/app/assets/sass/components/newsList.sass';
import Item from './item';
export default function NewsList() {
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
  ];
  return (
    <ul className="news-list *:*:hover:bg-white/10 *:*:transition-colors">
      {items.map(item => (
        <li className="news-list__item" key={item.id}>
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
        </li>
      ))}
    </ul>
  );
}
