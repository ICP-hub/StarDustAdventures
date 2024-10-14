import React from 'react'
import Button from '../../re-usables/Button'
import './hero.css'
import BgOverlay from '../../re-usables/BgOverlay'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero-sec' style={{backgroundImage:'url("hero_bg.webp")',backgroundSize:'cover'}}>
        {/* To Optimize Background Image Load */}
        <img src="hero_bg.webp" alt="hero" style={{display:'none'}} fetchPriority='high'/>
        <BgOverlay/>
        {/* <div className="hs-top-nav">
            <h1 className="hstp-text">
                Star Dust Adventures
            </h1>
            <div className='hstp-btn'>
            <Button size='sm'>PLAY</Button>
            </div>
        </div> */}
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:3,duration:2,type:'tween'}}
            className="hs-text-cont"
        >
            <h1 className="hstc-title1">
                Star Dust 
            </h1>
            <h1 className="hstc-title">
            Adventures
            </h1>
            <p className='hstc-text'>
                A Space Exploration Tap-to-Earn Game Powered By Crypto
            </p>
            <Button>PLAY</Button>
        </motion.div>
        <motion.img
            initial={{y:-1000}}
            animate={{y:0}}
            transition={{duration:3,type:'tween'}}
            src="/assets/images/astronaut.webp" 
            alt="falling astronaut" 
            className="hs-falling-astro" 
            fetchPriority='high'
        />
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