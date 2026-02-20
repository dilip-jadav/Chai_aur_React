import { useCallback, useEffect, useState,useRef } from 'react'

function App() {
  
  const [password,setPassword] = useState("")
  const [length,setlength] = useState(8)
  const [number,setNumber] = useState(false)
  const [character,setCharacter] = useState(false) 

  const passref=useRef(null)

  const passwordgenerator = useCallback( ()=>{
          let pass="";
          let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

          if(number){
               str+="0123456789";
          }
          if(character) str+="!@#$%^&*()_+:?<|{>"

          
          for(let i=1; i<=length; i++){
              let char=Math.floor(Math.random()*str.length );
              pass+=str.charAt(char);

          }
          setPassword(pass);
    

  },[number,character,length,setPassword]) 

  useEffect( ()=>{passwordgenerator()},[number,length,character,setPassword])

  const coppypassword=useCallback(  ()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,24) 
    window.navigator.clipboard.writeText(password)

  },[password])


    return (
    <>

          <div className=' flex flex-col text-2xl h-60 w-110 ml-90 mt-10 p-5 text-white dark:bg-gray-800 rounded-lg'>
              
                <h1 className='text-4xl p-1 pt-0 pb-3 pl-12 text-lime-200'>Password Genrator</h1>
              

                <div className='pl-6 '> 
                  <input
                          className='border-2  border-solid border-amber-50'
                            type="text"
                            value={password}
                            placeholder='Password'
                            required
                            readOnly
                            ref={passref}
                        />

                     <button onClick={coppypassword} className='bg-sky-500 border-2 border-sky-500 hover:bg-sky-700'>
                      Copy
                     </button>

                </div>

              <div className='text-amber-600 text-1xl pl-15 pt-2'>
                  
                    <input type="range"
                        className='cursor-pointer '
                         min={5}
                         max={100}
                        value={length}
                        onChange={(e)=>{setlength(e.target.value)}}                                          
                    />
                    <label className='pl-2 text-amber-600' htmlFor="length">Length:{length}</label>

              </div>


              <div className=' pl-30 pt-2 '>
                      <input
                            type="checkbox"
                            id='numberInput'
                            defaultChecked={number}
                            onChange={()=>{
                                setNumber((prev) => !prev)
                             }}
                          />
                        <label className='pl-2 text-amber-600' htmlFor="number">Number</label>
              </div>

                   <div className=' pl-30 pt-2'>
                      <input 
                            type="checkbox"
                            id='numberInput'
                            defaultChecked={character}
                            onChange={()=>{
                                setCharacter((prev) => !prev)
                             }}
                          />
                        <label htmlFor="character" className='pl-2 text-amber-600'>Character</label>
              </div>



            </div>

            
 
        
      
 
           
    
    
    </>
  )
}

export default App
