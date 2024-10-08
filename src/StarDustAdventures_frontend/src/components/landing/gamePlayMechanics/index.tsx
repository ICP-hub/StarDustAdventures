import Card, { CardProps } from './Cards';
import './index.css';

const CARDS = [
    {
        title : "Core Gameplay Loop", 
        description : 'Players tap to mine StarDust, with oxygen consumption renewed every 8 hours.',
        image : '/assets/images/mars.svg'
    },
    {
        title : "Progression Opportunities", 
        description : "Upgrade astronaut's oxygen tank, mining tool, & storage to unlock richer resources.",
        image : '/assets/images/moon.svg'
    },
    {
        title : "Play-to-Earn System", 
        description : "Accumulate StarDust, converting it to a future token tradable on exchanges for financial rewards.",
        image : '/assets/images/earth.svg'
    }
] as CardProps[]

const GamePlayMechanics = () => {
    return(
        <section className='gameplay-mechanics'>
            <div>
                <h3 className="section-title">Gameplay Mechanics</h3>
                <p className="section-caption">Explore the engaging system of Star Dust Adventures</p>
            </div>
            <div className='gameplay-mechanics-cards'>
                {
                    CARDS.map((card, index) => {
                        return <Card key={index} {...card}/>
                    })
                }
            </div>
        </section>
    )
}

export default GamePlayMechanics;