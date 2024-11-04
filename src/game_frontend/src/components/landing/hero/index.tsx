import React, { useEffect } from 'react'
import Button from '../../ui/Button'
import BgOverlay from '../../ui/BgOverlay'
import { motion } from 'framer-motion'
import './index.css'

const Hero = () => {
  return (
    <div className='hero-sec' style={{backgroundImage:'url("hero_bg.webp")',backgroundSize:'cover'}}>
        {/* To Optimize Background Image Load */}
        <img src="hero_bg.webp" alt="hero" style={{display:'none'}} fetchPriority='high'/>
        <BgOverlay/>
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
            <Button className='play-button'>CONNECT WALLET</Button>
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
    </div>
  )
}

export default Hero