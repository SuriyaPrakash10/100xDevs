import { createContext, useState, useContext } from 'react'

// Rolling up
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <LightBulb />
//     </>
//   )
// }

// function LightBulb() {

//   const [bulbOn, setBulbOn] = useState(false);
//   return <>
//   <BulbState bulbOn={bulbOn}/>
//   <ToggleBulb bulbOn={bulbOn} setBulbOn={setBulbOn}/>
//   </>
// }

// function BulbState({bulbOn}) {
//   return <>
//   {bulbOn ? "Bulb On" : "Bulb Off"}
//   </>
// }

// function ToggleBulb({bulbOn, setBulbOn}) {

//   function toggle() {
//     setBulbOn(!bulbOn) 
//   }
//   return <>
//   <br /> <br />
//   <button onClick={toggle}>Toggle Bulb</button>
//   </>
// }

// Context API
const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(false)

  return (
    <>
    <BulbContext.Provider value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn
    }}>
      <Light />
    </BulbContext.Provider>
    </>
  )
}

function Light() {
  return <>
  <LightBulb />
  <LightSwitch />  
  </>
}

function LightBulb() {

  const {bulbOn} = useContext(BulbContext)
  return <>
    {bulbOn ? "BulbOn" : "Bulb Off"}
  </>
}

function LightSwitch() {
  const {bulbOn, setBulbOn} = useContext(BulbContext)
  function toggle() {
    setBulbOn(!bulbOn) 
  }
  return <>
  <br /> <br />
  <button onClick={toggle}>Toggle Bulb</button>
  </>
}


export default App
