import './App.css'
import UserContextProvider from './contaxt/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'

function App() {
  
  return (
    <UserContextProvider>

        <h1> Manage State ... Context API </h1>
        <Login />
        <Profile />
        
    </UserContextProvider>
  )
}

export default App
