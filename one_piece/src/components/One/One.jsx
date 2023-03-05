import React from 'react'
import './One.css'
import background from "../../Images/background.png"
import logo from "../../Images/logo.png"

const One = () => {
  return (
    <>
        <section className = "background">

          <img src={background}/>
          
          <div className = 'logo'>
            <h1>ONE</h1>
            <img src={logo}/>
            <h2>PIECE</h2>
          </div>
        </section>
    </>
  )
}

export default One