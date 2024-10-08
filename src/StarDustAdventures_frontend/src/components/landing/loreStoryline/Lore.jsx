import React from 'react'
import './lore.css'

const Lore = () => {
  return (
    <div className='lore-sec'>
        <h1 className="ls-title">
        Lore and Storyline
        </h1>
        <p className="ls-text">
        Explore the Epic Quest for Star Dust in a Distant Future
        </p>
        <div className="ls-rotating-astro"></div>
        <div className="ls-main">
            <div className="lsm-first">
                <div className="lsm-text-item">
                    <h3 className="lsm-ti-title"></h3>
                    <div className="lsm-ti-text"></div>
                </div>
            </div>
            <div className="lsm-second">
                <div className="lsm-text-item">
                    <h3 className="lsm-ti-title"></h3>
                    <div className="lsm-ti-text"></div>
                </div>
                <div className="lsm-text-item">
                    <h3 className="lsm-ti-title"></h3>
                    <div className="lsm-ti-text"></div>
                </div>  
            </div>
            <div className="lsm-third">
                <div className="lsm-text-item">
                    <h3 className="lsm-ti-title"></h3>
                    <div className="lsm-ti-text"></div>
                </div>
                <div className="lsm-text-item">
                    <h3 className="lsm-ti-title"></h3>
                    <div className="lsm-ti-text"></div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Lore