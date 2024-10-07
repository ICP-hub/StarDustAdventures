import React from 'react'
import Button from '../../re-usables/Button'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero-sec'>
        <div className="hs-top-nav">
            <h1 className="hstp-text">
                Star Dust Adventures
            </h1>
            <div className='hstp-btn'>
            <Button size='sm'>PLAY NOW</Button>
            </div>
        </div>
        <div className="hs-text-cont">
            <h1 className="hstc-title">
                Star Dust Adventures
            </h1>
            <p className='hstc-text'>
                A Space Exploration Tap-to-Earn Game Powered By Crypto
            </p>
            <Button>PLAY NOW</Button>
        </div>
    </div>
  )
}

export default Hero