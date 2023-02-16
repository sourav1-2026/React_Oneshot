import { useContext, useState,memo } from 'react';
import ThemeContext from '../context/Themecontext';
import './PlayButton.css';


const PlayButton=memo(function PlayButton({children,onPlay,onPause}){
    // let playingStatus=false

    console.log("playButton counter")
    const theme=useContext(ThemeContext)
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
        <button className={theme} onClick={handleClick}>{children} {playingStatus?'||' : '>'}</button>

        // react does not want that any variable change the DOM directly
        // that's why concept of state comes into picture
    )
})

export default PlayButton