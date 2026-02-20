//import Series from "./Components/Series";
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'


export const App=() =>{

  const [counter,setcounter]=useState(5);

  /* InterView Quations */
  const addvalue=()=>{

    /* Acording This Code You Can Not add Multilpe time counter value... That Add only one 
    setcounter(counter+1);
    setcounter(counter+1);
    setcounter(counter+1);
    setcounter(counter+1);
    
    instaed Of That The Following condition is Prove.. */

    setcounter(prevcounter=>prevcounter+1);
    setcounter(prevcounter=>prevcounter+1);
    setcounter(prevcounter=>prevcounter+1);
    setcounter(prevcounter=>prevcounter+1);

  }

  
  const removevalue=()=>{
    setcounter(counter-1);
  }

    return(
      <>

      <h1> Chai Aur Code </h1>
      
      <h2>Counter Value : {counter}</h2>

        <button onClick={addvalue}> Add Value : {counter} </button> <br />
        <button onClick={removevalue}> remove Value : {counter} </button>

     {/*  <Series /> */}
        
    </>
    ); 
}
   










/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

*/