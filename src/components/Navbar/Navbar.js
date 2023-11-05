import React from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../../config'
import "./navbar_style.css"

export default function Navbar() {
  let Authenticated = localStorage.getItem("Authenticated")

  
  const signUserOut = () =>{
    signOut(auth).then(()=>{
    localStorage.clear()
    Authenticated = false
    window.location.reload()
    window.location.pathname = ""

})}
  return (
    <div><div class="navbar">
    <div class="logo"></div>
    <div class="links">
        <a href="/" class="link">Home</a>
        {Authenticated?<a href="/machine-status" class="link">Machine Status</a> :         <a href="/authenticate" class="link">Machine Status</a>
}       
{Authenticated?         <button className='danger_btn' onClick={signUserOut}>Log Out</button> :         <a href="/authenticate" class="link" id="login">SignIn</a>

}
        
    </div>
</div></div>
  )
}
