import { useEffect, useState } from 'react'
import { useFetch, usePostTitle } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev'
import { useDebounce } from './hooks/useDebounce'


//custom hooks 

// function useCounter() {
//   const {count, setCount} = useState(0)

//   function increaseCount() {
//     setCount(count+1)
//   }

//   return {
//     count: count,
//     increaseCount: increaseCount
//   }
// }

// function App() {
//   const [count, increaseCount] = useCounter();

//   return (
//     <>
//     <button onClick={increaseCount}>Increase {count}</button>
//     </>
//   )
// }

//  


function App() {
//  const postTitle = usePostTitle()

//   return (
//     <>
//     {postTitle}
//     </>
//   )

// }


// useFetch

// const {loading, finalData} = useFetch("https://jsonplaceholder.typicode.com/posts/1")

// if(loading) {
//   return <>
//   Loading....
//   </>
// }
// return (
//   <>
//   {JSON.stringify(finalData)}
//   </>
// )
// }

// use - Prev

// const [state, setState] = useState(0)
// const prev = usePrev(state)

// return (
//   <>
//   <p> State </p>
//   <button onClick={()=> {
//     setState((e)=>e+1)
//   }}> click me {state}
//   </button>
//   <p>The previous value is {prev}</p>
//   </> 
// )
// }

    function sendToBackend() {
      fetch("https://jsonplaceholder.typicode.com/posts/")
    }

    const debounce = useDebounce(sendToBackend)

    return (
      <>
      <input type="text" onChange={debounce} />
      </>
    )
}
export default App
