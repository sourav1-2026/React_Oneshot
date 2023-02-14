import "./App.css";
import videoDB from "./data/data";
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";


function App() {
  const [editablevideo,setEditablevideo]=useState(null)
  function videoReducer(videos,action){
    switch(action.type){
      case 'ADD':
        return [
                ...videos,
                {...action.payload, id:videos.length+1}
              ]
      case 'DELETE':
        return videos.filter(video=>video.id!==action.payload)
      case 'UPDATE':
        const index=videos.findIndex(v=>v.id===action.payload.id)
        const newVideos=[...videos]
        newVideos.splice(index,1,action.payload)
        setEditablevideo(null);
        return newVideos

      default: 
        return videos
    }
  }

  const[videos,dispatch]=useReducer(videoReducer,videoDB)
  function updateVideo(id){   
    setEditablevideo(videos.find(video=>video.id===id))
  }
 
  return (
    <div className="App" onClick={()=>console.log("app")}>
      <AddVideo dispatch={dispatch} editablevideo={editablevideo} ></AddVideo>
      <br></br>
      <VideoList dispatch={dispatch} updateVideo={updateVideo} videos={videos}></VideoList>
      
     
    </div>
  );
}

export default App;
