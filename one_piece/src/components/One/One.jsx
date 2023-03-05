import React from 'react'
import './One.css'
import background from "../../Images/background.png"
import logo from "../../Images/logo.png"
import sunny from "../../Images/sunny.png"

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
          <div className='sunny'>
            <img src = {sunny}/>
          </div>
        </section>
    </>
  )
}

export default One