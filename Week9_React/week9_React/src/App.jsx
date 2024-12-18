// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   // conditional rendering
//   let counterVisible = true
//     return <div>
//       <b>
//       hi there
//       </b>
//       {counterVisible ? <Counter></Counter>:null}
//     </div>
// }

// function Counter() {
//   const [count,setCount] = useState(0);

  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // function increaseCount() {
//   //   setCount(count+1);
//   // }

//   // function decreaseCount() {
//   //   if(count>0)
//   //   setCount(count-1);
//   // }

//   // function resetCount() {
//   //   setCount(0);
//   // }

//  return <div>
//   <h1>{count}</h1>
//   {/* <button onClick={increaseCount}> Increase Count </button>
//   <button onClick={decreaseCount}> Decrease Count </button>
//   <button onClick={resetCount}> Reset Count </button> */}
//  </div>
// }

// export default App


import { useState, useEffect } from "react"; // useEffect, dependency array, cleanups 
export default function App() { 
  const [count, setCount] = useState(0); 
  const [count2, setCount2] = useState(0); 

  function increase() {
    setCount(c=>c+1) 
  }

  function decrease() {
    setCount2(c=>c-1) 
  }

   return <div> <Counter count={count} count2={count2}/> 
   <button onClick={increase}>Increase</button>
   <button onClick={decrease}>Decrease</button>

   </div> 
  }  
  
  // mounting, re-rendering, unmounting 
  function Counter(props) { 
     useEffect (function() { 
      console.log("mount"); 
       return function() { 
        console.log("unmount"); 
        } 
    }, []);  

    useEffect(function() {
      console.log("Changed")
    },[props.count, props.count2]) 

     return <div>
       Counter1 {props.count} <br />
       Counter2 {props.count2} <br />
       </div>
  }