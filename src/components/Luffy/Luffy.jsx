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
                <h1 className='image'>IMAGE GOES HERE!!</h1>
                <h2 className='description'>DESCRIPTION GOES HERE!!</h2>
            </div>
            <img className="wood" src = {wood} alt = "wood" />
        </section>
    </>
  )
}

export default Luffy