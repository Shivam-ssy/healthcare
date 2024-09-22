import React from 'react'
import './Hero.css'
function Hero() {
  return (
    <div className=' hero d-flex flex-md-row flex-column justify-content-around align-items-center'>
      <div>
        <div>Healthcare Services </div>
        <h1 className='larger-heading'>Empowering <br />Healthcare <br />Management </h1>
        <div style={{width:`fit-content`}}>Transforming how healthcare <br /> services streamline and connect <br /> with patients effectively. </div>
      </div>
      <div>
        <img className='mt-5 image' src="./heroimg.svg" alt="" />
      </div>
    </div>
  )
}

export default Hero
