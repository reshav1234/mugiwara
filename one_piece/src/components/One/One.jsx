import React from 'react'
import './One.css'
import background from "../../Images/background.png"
import logo from "../../Images/logo.png"
import sunny from "../../Images/sunny.png"
import cloud from '../../Images/cloud.png'
import skypie from "../../Images/skypie.png"
import island from "../../Images/island.png"
import hill from '../../Images/hill.png'


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
          <div className = "cloud">
            <img src = {cloud}/>
          </div>
          <div className = "skypie">
            <img src = {skypie}/>
          </div>
          <div className= 'hill'>
            <img src = {hill}/>
          </div>
          <div className = "island">
            <img src = {island}/>
          </div>

        </section>
    </>
  )
}

export default One