import React from 'react'
import Button from '../../re-usables/Button'
import './hero.css'
import BgOverlay from '../../re-usables/BgOverlay'

const Hero = () => {
  return (
    <div className='hero-sec' style={{backgroundImage:'url("hero_bg.png")',backgroundSize:'cover'}}>
        <BgOverlay/>
        <div className="hs-top-nav">
            <h1 className="hstp-text">
                Star Dust Adventures
            </h1>
            <div className='hstp-btn'>
            <Button size='sm'>PLAY NOW</Button>
            </div>
        </div>
        <div className="hs-text-cont">
            <h1 className="hstc-title1">
                Star Dust 
            </h1>
            <h1 className="hstc-title">
            Adventures
            </h1>
            <p className='hstc-text'>
                A Space Exploration Tap-to-Earn Game Powered By Crypto
            </p>
            <Button>PLAY NOW</Button>
        </div>
        <img src="astronaut.png" alt="falling astronaut" className="hs-falling-astro" />
        <div className="hs-text-cont2">
            <h3 className="hstc2-title">
            Overview of Star Dust Adventures
            </h3>
            <p className="hstc2-text">
            A Tap-to-Earn Game Combining Exploration and Blockchain
            </p>
        </div>
    </div>
  )
}

export default Hero