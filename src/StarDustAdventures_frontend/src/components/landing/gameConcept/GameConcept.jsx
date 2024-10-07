import React from 'react'
import './gameConcept.css'
import { gameConceptText } from '../../../constants/text'

const GameConcept = () => {
  return (
    <div className='game-concept-sec'>
        <div className="gcs-sub-left">
            {
                gameConceptText.left.map((item,index)=>(
                    <div className="gcs-sl-item" key={index}>
                        <h4 className="gcs-sl-title">
                            {item?.title}
                        </h4>
                        <p className="gcs-sl-text">
                            {item?.text}
                        </p>
                    </div>
                ))
            }

        </div>
        <div className="gcs-sub-center">
            <img src="red_planet.png" alt="red planet" className="gcs-sc-img" />
            <h4 className="gcs-sc-title">{gameConceptText.center.title}</h4>
            <p className="gcs-sc-text">{gameConceptText.center.text}</p>
        </div>
        <div className="gcs-sub-right">
           {
                gameConceptText.right.map((item,index)=>(
                    <div className="gcs-sr-item">
                        <h4 className="gcs-sr-title">
                            {item?.title}
                        </h4>
                        <p className="gcs-sr-text">
                            {item?.text}
                        </p>
                    </div>
                ))
           }
        </div>
    </div>
  )
}

export default GameConcept