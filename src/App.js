import "./App.css"
import Video from "./components/Video"
// import {Video,thum } "./components/Video"
function App(){

 return  (
  <div className="App">
    Hello
    <br></br>
    <Video title="React-js tutorial" views="10K" time="1 month ago" channel="react sikho"> <p>This is some content passed as children to Video.js</p></Video>
    <Video title="Node -js tutorial" views="100K" time="1 year ago" channel="react sikho"></Video>
  </div>
 )
}

export default App
