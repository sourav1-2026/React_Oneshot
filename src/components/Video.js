import { useContext, useEffect } from "react";
import ThemeContext from "../context/Themecontext";
import "./Video.css"
import useVideoDispatch from "../hooks/VideoDispatch"
// import VideoDispatchContext from "../context/VideoDispatchContext";

// 6.12.59

function Video({ title, channel, views, time,children,verified,id,updateVideo }) {

  const theme=useContext(ThemeContext)
  // const dispatch=useContext(VideoDispatchContext)
  const dispatch=useVideoDispatch()

  // console.log(`video ka ${theme}`)


  useEffect(()=>{
    const idx=setInterval(()=>{
      console.log("video playing",id)
    },3000)

    return ()=>{
      clearInterval(idx)
    }
  },[id])

  return (
    <>
      <div className={`container ${theme}`}>
        <button className="close" onClick={()=>{dispatch({type:'DELETE',payload:id})}}>X</button>
        <button className="edit" onClick={()=>{updateVideo(id)}}>Update</button>
        <div>
        <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        
        <div className="channel">{channel} {verified && '✅'}</div>

        <div className="children">{children}</div>
        <div className="views">
          {views}
          views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;

// export {Video, Thumb} ;
