import React from 'react'
import '../components/landing/landing.css'
import Hero from '../components/landing/hero/Hero'
import Footer from '../components/landing/footer'
import GamePlayMechanics from '../components/landing/gamePlayMechanics'
import GameConcept from '../components/landing/gameConcept/GameConcept'

const Landing = () => {
  return (
    <div className='page'>
        <Hero/>
        <GameConcept/>
        <GamePlayMechanics/>
        <Footer/>
    </div>
  )
}

export default Landing