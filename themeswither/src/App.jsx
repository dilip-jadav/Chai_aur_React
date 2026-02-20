
import { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './Contexts/theme'
import Themebtn from './Components/Themebtn'
import Card from './Components/Card'

function App() {

          const [thememode,setthememode]=useState("light")

          const lighttheme=()=>{
            setthememode("light")
          }

          const darktheme=()=>{
            setthememode("dark")
          }

          // Actual Change in Theme 

          useEffect(()=>{
              document.querySelector('html').classList.remove("light","dark")
              document.querySelector('html').classList.add(thememode)
          },[thememode])

  return (
    
       <Themeprovider value={{thememode, darktheme, lighttheme }}> 
         <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          <Themebtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div> 
         
       </Themeprovider>  

  )
}

export default App
