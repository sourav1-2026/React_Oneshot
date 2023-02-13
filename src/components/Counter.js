import './Counter.css';
import { useState } from 'react';

function Counter(){
    console.log("react counter")
    // let number=0;
    const [number,setNumber]=useState(0);
    function handleClick(e){
        e.stopPropagation();
        // setNumber(number+1);
        // setNumber(number+1);
        // setNumber(number+1);
        // setNumber(number+1);
        // console.log(number);

        setTimeout(()=>{
            // setNumber(number+1);
            setNumber(number=>number+1)  // happen in asynchronus manner   // updater function style
            setNumber(number=>number+1)  // happen in asynchronus manner
            setNumber(number=>number+1)  // happen in asynchronus manner

            //the above two line are completely different.
        },2000)
        console.log(number)
        // 3.16.27
    }

    return(
        <>
        
        <h3 style={{color:'white'}}>Number of time click {number} </h3>
        <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter