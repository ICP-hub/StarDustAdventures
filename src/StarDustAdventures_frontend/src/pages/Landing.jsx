import React, { lazy, useEffect, useState } from 'react'
import '../components/landing/landing.css'
import Hero from '../components/landing/hero/Hero'
import Footer from '../components/landing/footer'
import GameConcept from '../components/landing/gameConcept/GameConcept'
import Lore from '../components/landing/loreStoryline/Lore'
import GradientCover from '../components/landing/GradientCover'
import GameConceptM from '../components/landing-mobile/gameConcept/GameConceptM'

const GamePlayMechanics = lazy(()=>import('../components/landing/gamePlayMechanics'))
const MobileGameplayView = lazy(()=>import('../components/landing-mobile/gameplayMechanics'))

const PatternCover = () => {
  const [width,setWidth]=useState(window.innerWidth)

  useEffect(()=>{
    window.addEventListener("resize", ()=>setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", ()=>setWidth(window.innerWidth));
  },[])


  return(
    <GradientCover>
      {width > 768 ? <GamePlayMechanics/> : <MobileGameplayView/>}
      <Lore/>
    </GradientCover>
  )
}

const Landing = () => {
  const [width,setWidth]=useState(window.innerWidth)

  useEffect(()=>{
    window.addEventListener("resize", ()=>setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", ()=>setWidth(window.innerWidth));
  },[])

  return (
    <div className='page'>
        <Hero/>
        {width>1024?<GameConcept/>:<GameConceptM/>}
        <PatternCover/>
        <Footer/>
    </div>
  )
}

export default Landing