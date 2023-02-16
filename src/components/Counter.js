import './Counter.css';
import { useCallback, useMemo, useRef, useState } from 'react';


// 2
// function fib(n){
//     if (n===1 || n===2){
//         return 1
//     }
//     return fib(n-1)+fib(n-2)
// }

function Counter(){
    console.log("react counter")
    // let number=0;
    const [number,setNumber]=useState(5);

    let num=useRef(0);  // we are using this because we don't want to 

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
            num.current++;

            console.log(num.current)

            //the above two line are completely different.
        },2000)
        console.log(number)
        // 3.16.27
    }


    const fibFX=useCallback(function fib(n){
        if (n===1 || n===2){
            return 1
        }
        return fib(n-1)+fib(n-2)
    },[])

      const fibMemozied=useMemo(()=>fibFX(number),[number,fibFX])


    return(
        <>
        
        <h3 style={{color:'white'}}>Number of time click {number} | {fibMemozied}</h3>
        <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter