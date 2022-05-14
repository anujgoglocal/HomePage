import React from 'react'
import { Link } from 'react-router-dom'
import "./component.css"

export default function Navbar() {
  return (
      <div className="navbar">
          <div className="logo">

          </div>
          <div className="nav-buttons">
                <Link className="button btn-home" to="/">Home</Link>
                <Link className="button btn-career" to="/">Careers</Link>
                <Link className="button  btn-about" to="/">About Us</Link>
                <Link className="button btn-faq " to="/">FAQ</Link>
                
          </div>
          <div className="login">
            <Link className="btn-sign-in" to="/">Sign in</Link>
            <Link className="btn-sign-up" to="/">Sign Up</Link>
          </div>
      </div>
  )
}
