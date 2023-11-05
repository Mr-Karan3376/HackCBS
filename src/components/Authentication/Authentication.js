import React from 'react'
import "./Authentication.css"
import {auth, provider} from '../../config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let Authenticated = false
    const navigate = useNavigate()
    const signInWithGoogle = ()=>{
        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("Authenticated",true)
            Authenticated = true
            window.location.reload()
            const email = result._tokenResponse.email
            localStorage.setItem("email",email)
            const name = result._tokenResponse.displayName
            localStorage.setItem("name",name)
            window.location.pathname = ""

        })
    }
  return (
    <div className='login'>
        <div className="image"></div>
        <div className="logincontent">
            <h1 className='top_line'>Create A Profile </h1>
            <button onClick={signInWithGoogle} className="btn">Sign In With Google</button>

        </div>
    </div>
  )
}