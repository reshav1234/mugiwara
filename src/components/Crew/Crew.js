import './Crew.css'
import luffy from "../../Images/luffy.png"
import brook from "../../Images/brook.png"
import chopper from "../../Images/chopper.png"
import zoro from "../../Images/zoro.png"
import sanji from "../../Images/sanji.png"
import robin from "../../Images/robin.png"
import franky from "../../Images/franky.png"
import usopp from "../../Images/usopp.png"
import nami from "../../Images/nami.png"


import React from 'react'

function Crew() {
  return (
    <section className='crew'>

        <div className='text'>
            <div className='text-1'>
                <h1>MEET THE</h1>
            </div>
            <div className='text-2'>
                <h1>MUGIWARA</h1>
            </div>
            <div className='text-3'>
                <h1>NO ICHIMI</h1>
            </div>
        </div>
        <div className='members'>
            <img className="brook--img" src={brook} alt = "brook"/>
            <img className="chopper--img" src={chopper} alt = "brook"/>
            <img className="nami--img" src={nami} alt = "brook"/>
            <img className="franky--img" src={franky} alt = "brook"/>
            <img className="zoro--img" src={zoro} alt = "brook"/ >
            <img className="luffy--img" src={luffy} alt = "brook"/>
            <img className="sanji--img" src={sanji} alt = "brook"/>
            <img className="usopp--img" src={usopp} alt = "brook"/>
            <img className="nami--img" src={nami} alt = "brook"/>
            <img className="robin--img" src={robin} alt = "brook"/>
        </div>
    </section>
  )
}

export default Crew
