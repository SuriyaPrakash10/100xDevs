import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import './App.css'

// function App() {

  //ROUTING

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Layout/>}>
//           <Route path="/neet/online/class11" element={<Class11program />}></Route>
//           <Route path="/neet/online/class12" element={<Class12program />}></Route>
//           <Route path="/" element={<Landing />}></Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// function Layout() {
//   return <>
//   <Link to="/">Coaching</Link>
//   <Link to="/neet/online/class11">Class 11</Link>
//   <Link to="/neet/online/class12">Class 12</Link>

//   <div>
//     <Outlet/>
//   </div>

//   footer
//   </>
// }

// function Class11program() {
//   return <>
//   <br /> <br />
//   Neet Coaching 11
//   </>
// }

// function Class12program() {
// const navigate = useNavigate();

//   function redirect() {
//     navigate('/')   //"" or ''
//   }

//   return <>
//   <br /> <br />
//   Neet Coaching 12
//   <button onClick={redirect}>Go Back</button>
//   </>
// }

// function Landing() {
//   return <>
//   <br /><br />
//   Landing
//   </>
// }





  // USE REF
  function App() {
    const inputRef = useRef();

    function focusOnInput() {
      inputRef.current.focus();
    }

    return <>
    SignUp
      <input ref={inputRef} type="text" />
      <input type="text" />
      <button onClick={focusOnInput}>Submit</button>
    </>
  }
export default App
