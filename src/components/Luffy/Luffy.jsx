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

            <div className = "wood">
                <img src = {wood} alt = "wood" />
            </div>
            <div className = "member">
                <img src = {member} alt = "member" />
            </div>
            <div className = "mugi">
                <img src = {luffy} alt = "mugiwara" />
            </div>
            <div className = "description">
                <h1>Monkey D Luffy</h1>
            </div>
        </section>
    </>
  )
}

export default Luffy