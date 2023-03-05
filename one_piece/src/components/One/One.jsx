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
          <div className = "one">
            <h1>ONE</h1>
          </div>
          <div className = "piece">
            <h1>PIECE</h1>
          </div>
        </section>
    </>
  )
}

export default One