import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({videos,deleteVideo,updateVideo}) {
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
          deleteVideo={deleteVideo}
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
