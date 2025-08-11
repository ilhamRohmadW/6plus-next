import BigVideo from '../components/bigVideo';
import NewsList from '../components/newsList';
import Story from '../components/story';

export default function Headline() {
    return (
        <div className="section section--headline bg-neutral-950 text-white"
        style={{'background-image': 'url("../image/bg-headline.png")'} as React.CSSProperties}>
            <div className="container">
                <BigVideo live={true}/>
                <Story/>
                <BigVideo/>
                <NewsList/>
            </div>
        </div>
    );
}
