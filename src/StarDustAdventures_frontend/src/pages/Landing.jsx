import React from 'react'
import '../components/landing/landing.css'
import Hero from '../components/landing/hero/Hero'
import Footer from '../components/landing/footer'
import GamePlayMechanics from '../components/landing/gamePlayMechanics'

const Landing = () => {
  return (
    <div className='page'>
        <Hero/>
        <GamePlayMechanics/>
        <Footer/>
    </div>
  )
}

export default Landing