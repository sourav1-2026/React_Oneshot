import "./App.css";
import videoDB from "./data/data";
// import { useContext, useReducer, useState } from "react";
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/Themecontext";


function App() {
  const [editablevideo,setEditablevideo]=useState(null)

  // use uf useReducer 
  const[videos,dispatch]=useReducer(videoReducer,videoDB)

  // use of context
  const [mode,setMode]=useState('darkMode')


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

//  const themeContext=useContext(ThemeContext)
//  console.log(themeContext)


  function updateVideo(id){       
    setEditablevideo(videos.find(video=>video.id===id))
  }
 
  return (
    <ThemeContext.Provider value={mode}>
    {/* <div className={`App ${themeContext}`} onClick={()=>console.log("app")}> */}
    <div className={`App ${mode}`} onClick={()=>console.log("app")}>
      <button onClick={()=>setMode(mode==='darkMode'? 'lightMode':'darkMode')}>Mode</button>
      <AddVideo dispatch={dispatch} editablevideo={editablevideo} ></AddVideo>
      <br></br>
      <VideoList dispatch={dispatch} updateVideo={updateVideo} videos={videos}></VideoList>
      
     
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
