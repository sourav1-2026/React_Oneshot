import { useState } from 'react';
import './PlayButton.css';
function PlayButton({children,onPlay,onPause}){
    // let playingStatus=false

    console.log("playButton counter")
    const [playingStatus,setplayingStatus]=useState(false)
    function handleClick(e){
        console.log(e)
        e.stopPropagation()
        // e is defined as a SyntheticBaseEvent
        if (playingStatus) onPause();
        else onPlay();
        // playingStatus=!playingStatus
        setplayingStatus(!playingStatus);
    }
    return (
        // <button onClick={()=>console.log('play')}>Play</button>
        <button onClick={handleClick}>{children} {playingStatus?'||' : '>'}</button>

        // react does not want that any variable change the DOM directly
        // that's why concept of state comes into picture
    )
}

export default PlayButton