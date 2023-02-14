import "./Video.css"


function Video({ title, channel, views, time,children,verified,id,dispatch,updateVideo }) {



  return (
    <>
      <div className="container">
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
