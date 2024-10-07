import React from 'react'
import '../components/landing/landing.css'
import Hero from '../components/landing/hero/Hero'
import GameConcept from '../components/landing/gameConcept/GameConcept'

const Landing = () => {
  return (
    <div className='page'>
        <Hero/>
        <GameConcept/>
    </div>
  )
}

export default Landing