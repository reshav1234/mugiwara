import React from 'react'
import './Luffy.css'


import badal from '../../Images/cloud_01.png'
import luffy from '../../Images/lufffy.png'
import wheel from '../../Images/wheel.png'
import wood from '../../Images/wood.png'
import member from '../../Images/member.png'

const Luffy = () => {
  return (
    <>
        <section className="luffy">
            <div className = "member">
                <img className='image' src={luffy} />
                <h2 className='description'>MONKEY D LUFFY</h2>
            </div>
            <img className="wood" src = {wood} alt = "wood" />
        </section>
        <section className='zoro'>
            <h1>HELLOS</h1>
        </section>
    </>
  )
}

export default Luffy