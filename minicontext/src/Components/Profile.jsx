import React,{useContext} from 'react'
import UserContext from '../contaxt/UserContext'

export default function Profile() {

    const {user}=useContext(UserContext)

    if(!user) return  <div> Please Login </div>

    if(!user.username) return  <div> Please Enter Username or Password </div> 

    return <div> Welcome {user.username} your Password is {user.password} </div>
  
}
