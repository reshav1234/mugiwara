import './Crew.css'
import luffy from "./Images/luffy.png"
import brook from "./Images/brook.png"
import chopper from "./Images/chopper.png"
import zoro from "./Images/zoro.png"
import sanji from "./Images/sanji.png"
import robin from "./Images/robin.png"
import franky from "./Images/franky.png"
import usopp from "./Images/usopp.png"
import nami from "./Images/nami.png"


import React from 'react'

function Crew() {
  return (
    <div className='crew'>
        <div className='members'>
            <img className="luffy--img" src={luffy}/>
            <img className="brook--img" src={brook}/>
            <img className="chopper--img" src={chopper}/>
            <img className="zoro--img" src={zoro}/>
            <img className="nami--img" src={nami}/>
            <img className="franky--img" src={franky}/>
            <img className="usopp--img" src={usopp}/>
            <img className="nami--img" src={nami}/>
            <img className="robin--img" src={robin}/>
            <img className="sanji--img" src={sanji}/>
        </div>
    </div>
  )
}

export default Crew
