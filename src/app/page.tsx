import Segment from "./sections/segment";
import Headline from "./sections/headline";
import Recommend from "./sections/recommended";
import VideoList from "./sections/videoList";
import Topic from "./sections/topic";
import Trending from "./sections/trending";
export default function Home() {
  return (
    <>
      <Segment/>
      <Headline/>
      <Recommend/>
      <VideoList title="VIDEO TERKINI" titleIcon={true}/>
      <Topic/>
      <Trending image="/image/lip6up-color.png"/>
      <VideoList title="TIMNAS INDONESIA"/>
      <Trending image="/image/bincang-color.png"/>
      <VideoList title="CEK FAKTA"/>
      <Trending image="/image/terang-color.png"/>
      <VideoList title="BISNIS"/>
      <VideoList title="SHOWBIZ"/>
      <VideoList title="VIDEO POPULER"/>
      <VideoList title="SEPAK BOLA"/>
    </>
  );
}
