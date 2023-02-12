import "./App.css"
import Video from "./components/Video"
import videos from "./data/data"
// import {Video,thum } "./components/Video"
function App(){
  // let obj={
  //   title:"React-js tutorial" ,
  //   views:"10K",
  //   time:"1 month ago", 
  //   channel:"react sikho",
  //   verified:true
  // }


 return  (
  <div className="App">
    <br></br>
    {/* <Video {...obj}> <p>This is some content passed as children to Video.js</p></Video> */}
    {/* prop destructue */}
    {/* <Video verified={false} title="Node -js tutorial" views="100K" time="1 year ago" channel="react sikho"></Video>
    <Video verified={true}  title="MongoDb tutorial" views="1M" time="2 month ago" channel="Mongo sikho"></Video> */}

    {videos.map(video=><Video key={video.id} verified={video.verified}  title={video.title} views={video.views} time={video.time} channel={video.channel} id={video.id}></Video>)}
    {/* here i used higher order function such as map and arrow function
      2) arrow function return jsx  */}
  </div>
 )
}

export default App
