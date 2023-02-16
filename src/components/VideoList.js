import Video from "./Video";
import PlayButton from "./PlayButton";
// import { useContext } from "react";
import useVideos from "../hooks/Video";
// import VideosContext from "../context/VideosContext";


function VideoList({updateVideo}) {

  // const videos=useContext(VideosContext)
  const videos=useVideos()
  return (
    <div className="video">
      {videos.map((video) => (
        <Video
          key={video.id}
          verified={video.verified}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          id={video.id}
          updateVideo={updateVideo}
        >
          <PlayButton
            onPlay={() => console.log("playing", video.title)}
            onPause={() => console.log("paused..", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
}

export default VideoList;
