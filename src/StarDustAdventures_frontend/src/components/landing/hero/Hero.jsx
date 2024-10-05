import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero-sec'>
        <div className="hs-top-nav">
            <h1 className="hstp-text">
                Star Dust Adventures
            </h1>
            <button className='hstp-btn'>PLAY</button>
        </div>
        <div className="hs-text-cont">
            <h1 className="hstc-title">
                Star Dust Adventures
            </h1>
            <p className='hstc-text'>
                A Space Exploration Tap-to-Earn Game Powered By Crypto
            </p>
            <button className="hstc-btn">
                PLAY
            </button>
        </div>
    </div>
  )
}

export default Hero