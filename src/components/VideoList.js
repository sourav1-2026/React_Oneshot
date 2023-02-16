import Video from "./Video";
import PlayButton from "./PlayButton";
// import { useContext } from "react";
import useVideos from "../hooks/Video";
import { useEffect } from "react";
import axios from "axios";
import useVideoDispatch from "../hooks/VideoDispatch";
// import VideosContext from "../context/VideosContext";


function VideoList({updateVideo}) {

  // const videos=useContext(VideosContext)
  const videos=useVideos()

  
  const url="https://my.api.mockaroo.com/react_oneshot.json?key=de753e40"

  // const [videos, setVideos]=useState([])
  
  const dispatch=useVideoDispatch()
  // async function handleClick(){

  //   const res=await axios.get(url)
  //   console.log('getVideos',res.data)
  //   dispatch({type:"LOAD",payload:res.data})
  // }

  useEffect(()=>{
    async function handleClick(){

      const res=await axios.get(url)
      console.log('getVideos',res.data)
      dispatch({type:"LOAD",payload:res.data})
    }
    handleClick();
  },[])


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
