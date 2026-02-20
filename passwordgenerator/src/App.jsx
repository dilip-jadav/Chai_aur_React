import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numbersallow,setNumbersallow]= useState(false)
  const [Charactersallow,setCharactersallow]= useState(false)
  const [password,setPassword]= useState("")

  // Useref Hook

  const passref=useRef(null)

  // const passwordGenerator= useCallback (()=>{
  //   let pass=""
  //   let str="abcdefghijklmnopqrstuwwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  //   if(numbersallow) str+="0123456789"
  //   if(Charactersallow) str+="!@#$%^&*?`~(){}[]"

  //   for(let i=1; i<=length; i++){
  //       let char=Math.floor(Math.random()*str.length +1);
  //       pass+=str.charAt(char);

  //   }
  //  setPassword(pass);

  // }, [length,numbersallow,Charactersallow,setPassword])

  //Function for the Copy The Genreted Password

  const copypassformclip= useCallback(()=>{
        passref.current?.select()
        passref.current?.setSelectionRange(0,24) 
        window.navigator.clipboard.writeText(password)
  },[password])

  //useEffect(()=>{ passwordGenerator()},[length,Charactersallow,numbersallow,passwordGenerator])

  useEffect(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuwwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numbersallow) str+="0123456789"
    if(Charactersallow) str+="!@#$%^&*?`~(){}[]"

    for(let i=1; i<=length; i++){
        let char=Math.floor(Math.random()*str.length +1);
        pass+=str.charAt(char);

    }
   setPassword(pass);

  },[length,Charactersallow,numbersallow])

      

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-10 my-10 text-orange-500 bg-gray-800 '>

          <h1 className='text-white text-2xl pt-4  text-center'> Password Genrator </h1>

          <div className='flex shadow  rounded-lg overflow-hidden mb-4 '>
              <input type="text"
                    value={password}
                    placeholder='password'
                    className='outline-none rounded-l-lg bg-white text-gray-700 w-full py-1 px-3'
                    readOnly
                    ref={passref}
              />
              <button className='outline-none rounded-r-lg  bg-blue-700 text-white px-3 py-0.5 shrink-0'
                onClick={copypassformclip}
              >
                Copy</button>
          </div> 

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center pb-2 gap-x-1'>
                <input type="range" 
                        min={6}
                        max={100}
                        value={length}
                        className='cursor-pointer '
                        onChange={(e)=>{setLength(e.target.value)}}
                />
                <label> Length :{length} </label>

            </div>

            <div className='flex items-center pb-2 gap-x-1'>
              <input type="checkbox"
                      defaultChecked={numbersallow}
                      id="numberInput"
                      onChange={()=>{
                        if(numbersallow)
                          setNumbersallow(false);
                        else
                          setNumbersallow(true);
                        //setNumbersallow((prev)=> !prev)
                      }}
              />
              <label htmlFor="Number"> Number </label>
            </div>
            
                        <div className='flex items-center pb-2 gap-x-1'>
              <input type="checkbox"
                      defaultChecked={Charactersallow}
                      id="numberInput"
                      onChange={()=>{
                        setCharactersallow((prev)=> !prev)
                      }}
              />
              <label htmlFor="number"> Character </label>
            </div>

              

          </div>
             

     </div> 

        

 


    </>
  )
}

export default App
