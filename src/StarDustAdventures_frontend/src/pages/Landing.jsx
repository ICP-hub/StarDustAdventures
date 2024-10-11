import React from 'react'
import '../components/landing/landing.css'
import Hero from '../components/landing/hero/Hero'
import Footer from '../components/landing/footer'
import GamePlayMechanics from '../components/landing/gamePlayMechanics'
import GameConcept from '../components/landing/gameConcept/GameConcept'
import Lore from '../components/landing/loreStoryline/Lore'
import GradientCover from '../components/landing/GradientCover'

const PatternCover = () => {
  return(
    <GradientCover>
      <GamePlayMechanics/>
      <Lore/>
    </GradientCover>
  )
}

const Landing = () => {
  return (
    <div className='page'>
        <Hero/>
        <GameConcept/>
        <PatternCover/>
        <Footer/>
    </div>
  )
}

export default Landing