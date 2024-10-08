import React from 'react'
import '../components/landing/landing.css'
import Hero from '../components/landing/hero/Hero'
import Footer from '../components/landing/footer'
import GameConcept from '../components/landing/gameConcept/GameConcept'

const Landing = () => {
  return (
    <div className='page'>
        <Hero/>
        <GameConcept/>
        <Footer/>
    </div>
  )
}

export default Landing