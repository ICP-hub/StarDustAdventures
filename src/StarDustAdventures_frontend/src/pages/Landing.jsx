import React from 'react'
import '../components/landing/landing.css'
import Hero from '../components/landing/hero/Hero'
import Footer from '../components/landing/footer'

const Landing = () => {
  return (
    <div className='page'>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Landing