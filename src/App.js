import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data";
// import {Video,thum } "./components/Video"
function App() {
  // let obj={
  //   title:"React-js tutorial" ,
  //   views:"10K",
  //   time:"1 month ago",
  //   channel:"react sikho",
  //   verified:true
  // }

  return (
    <div className="App" onClick={()=>console.log("app")}>
      hello
      <br></br>
      {/* <Video {...obj}> <p>This is some content passed as children to Video.js</p></Video> */}
      {/* prop destructue */}
      {/* <Video verified={false} title="Node -js tutorial" views="100K" time="1 year ago" channel="react sikho"></Video>
    <Video verified={true}  title="MongoDb tutorial" views="1M" time="2 month ago" channel="Mongo sikho"></Video> */}
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
          >
            <PlayButton
              onPlay={() => console.log("playing",video.title)}
              onPause={() => console.log("paused..",video.title)}
            >
              {video.title}
            </PlayButton>
          </Video>
        ))}
      </div>
      {/* here i used higher order function such as map and arrow function
      2) arrow function return jsx  */}
      {/* <div className="PlayButton"> */}
        {/* <PlayButton name="play" message="hii"></PlayButton>
        <PlayButton name="pause" message="hello"></PlayButton> */}

        {/* <PlayButton
          message="hii"
          onPlay={() => console.log("playing")}
          onPause={() => console.log("pause")}
        >
          Play
        </PlayButton> */}
        {/* <PlayButton  message="hello" onClick={()=>alert("pause")}>pause</PlayButton> */}

        {/* when you are passing functions in props make sure on that place you only declare that function
      </div> */}
    </div>
  );
}

export default App;
