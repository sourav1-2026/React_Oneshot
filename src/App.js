import "./App.css";
import videoDB from "./data/data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
function App() {

  const [editablevideo,setEditablevideo]=useState(null)
  function addVideos(video){
    console.log("app wala addvideo")
    setVideos([
          ...videos,
          {...video, id:videos.length+1}
        ]);
  }

  function deleteVideo(id){
    // console.log(id)
    setVideos(videos.filter(video=>video.id!==id))
    
  }


  // console.log("app counter")
  const [videos,setVideos]=useState(videoDB)

  function updateVideo(id){
    console.log(id)
    console.log("updated")
    setEditablevideo(videos.find(video=>video.id===id))
    console.log(editablevideo)

  }

  function editVideo(video){
    console.log(video)
    const index=videos.findIndex(v=>v.id===video.id)
    const newVideos=[...videos]
    newVideos.splice(index,1,video)
    setVideos(newVideos)
  }

  return (
    <div className="App" onClick={()=>console.log("app")}>
      <AddVideo addVideos={addVideos} editablevideo={editablevideo} editVideo={editVideo} ></AddVideo>
      <br></br>
      <VideoList deleteVideo={deleteVideo} updateVideo={updateVideo} videos={videos}></VideoList>
      
     
    </div>
  );
}

export default App;
