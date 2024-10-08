import Card, { CardProps } from './Cards';
import './index.css';

const CARDS = [
    {
        title : "Core Gameplay Loop", 
        description : 'Players tap to mine StarDust, with oxygen consumption renewed every 8 hours.',
        image : '/assets/images/mars.svg'
    }
] as CardProps[]

const GamePlayMechanics = () => {
    return(
        <section className='gameplay-mechanics'>
            <div>
                <h3 className="section-title">Gameplay Mechanics</h3>
                <p className="section-caption">Explore the engaging system of Star Dust Adventures</p>
            </div>
            <div className='gameplay-'>
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