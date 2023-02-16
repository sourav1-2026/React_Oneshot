import { useContext, useEffect, useState } from "react";

import useVideoDispatch from "../hooks/VideoDispatch";

const initialstate={
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
    title:'',
    view:''
}

function AddVideo({editablevideo}) {

    const [video,setVideo]=useState(initialstate)
   
    const dispatch=useVideoDispatch ()

    function handleSubmit(e){
        e.preventDefault();  // when we submt the form the page get reload to restrict this thing we use it.
        if  (editablevideo){
          dispatch({type:'UPDATE',payload:video})
        }
        else{        
          dispatch({type:'ADD',payload:video})
        }
       
        setVideo(initialstate)
        
        console.log("handlesubmit se")
        console.log(video)

    }

    function handleChange(e){
        setVideo({ ...video, [e.target.name]: e.target.value });
    }

    useEffect(()=>{
      console.log('effect')
      if (editablevideo){
        setVideo(editablevideo)
      }     
    },[editablevideo])

  return (
    <form>
      <input type="text" name="title" onChange={handleChange} placeholder="title" value={video.title} />
      <br></br>
      <input type="text" name="view" onChange={handleChange} placeholder="views" value={video.view} />
      <br></br>
      <button onClick={handleSubmit}> 
        {editablevideo?'Edit':'Add'}video
      </button>
    </form>
  );
}

export default AddVideo;
