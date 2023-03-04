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
            <img src={logo}/>
          </div>
        </section>
    </>
  )
}

export default One