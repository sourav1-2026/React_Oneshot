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

function Video({ title, channel, views, time,children }) {
  return (
    <>
      <div className="container">
        <div>
          <img src="https://picsum.photos/240/120" alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
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
