import "./Video.css"
// function Video(props) {
//     console.log(props)
//   return (
//     <>
//       <img src="https://picsum.photos/240/120" alt="Katherine Johnson" />
//       <div style={{ backgroundColor:'grey'}}>{props.title}</div>
//     </>
//   );
// }

// The below code is also work as same here the only difference is that here we use Destructuring concept used in modern day.

function Video({ title, channel, views, time,children,verified,id }) {

  console.log("video counter")
  // let verified=true;
  // let channelJsx;
  // if (verified){
  //   channelJsx=<div className="channel">{channel} ✅</div>
  // }
  // else{
  //   channelJsx=<div className="channel">{channel} </div>
  // }
  // in react jsx can be store in a js varable and we can access it inside the function with {}.

  // by applying if and else statement we are breaking the rule of making only one jsx objects.
  // so to correct it we use ternary operaror
  return (
    <>
      <div className="container">
        <div>
        <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        {/* <div className="channel">{channel} ✅</div> */}
        {/* {channelJsx} */}

        {/* {verified ?<div className="channel">{channel} ✅</div> :<div className="channel">{channel} </div>} */}

        {/* <div className="channel">{channel} {verified ? '✅' :null}</div> */}
        {/* here we are appliying terney operator only on the green tick because in previous case code get copy more */}

        <div className="channel">{channel} {verified && '✅'}</div>
        {/* this concept is know as a short circuit */}

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
