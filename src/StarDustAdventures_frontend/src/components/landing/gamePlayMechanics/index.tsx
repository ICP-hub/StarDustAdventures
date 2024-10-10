import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Card, { CardProps } from './Cards';
import './index.css';

// Card Static Data
const CARDS = [
    {
        title: "Core Gameplay Loop",
        description: 'Players tap to mine StarDust, with oxygen consumption renewed every 8 hours.',
        image: '/assets/images/mars.svg'
    },
    {
        title: "Progression Opportunities",
        description: "Upgrade astronaut's oxygen tank, mining tool, & storage to unlock richer resources.",
        image: '/assets/images/moon.svg'
    },
    {
        title: "Play-to-Earn System",
        description: "Accumulate StarDust, converting it to a future token tradable on exchanges for financial rewards.",
        image: '/assets/images/earth.svg'
    }
] as CardProps[];

/*
    * GamePlayMechanics Component
    * - Component that renders the Gameplay Mechanics section
    * - Uses framer-motion to animate the section in and out of view
    * - Uses useScroll to track the scroll progress
    * - Returns a section with the title, caption, and cards
    * - Used in Landing Page
*/

const GamePlayMechanics = () => {
    const ref = useRef(null);

    // Track scroll progress
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"] // Ensures it starts when div enters and ends when it leaves
    });

    return (
        <section className="gameplay-mechanics">
            <div>
                <h3 className="section-title">Gameplay Mechanics</h3>
                <p className="section-caption">Explore the engaging system of Star Dust Adventures</p>
            </div>
            <motion.div ref={ref} className='gameplay-mechanics-cards' style={{ position: 'relative' }}>
                {
                    CARDS.map((card, index) => (
                        <PinnedCard
                            key={index}
                            card={card}
                            index={index}
                            scrollYProgress={scrollYProgress}
                        />
                    ))
                }
            </motion.div>
        </section>
    );
};

/*
    * PinnedCard Component
    * - Component that pins the card to the screen as the user scrolls
    * - Uses framer-motion to animate the card in and out of view
    * - Uses useTransform to change the opacity of the card based on scroll progress
    * - Uses useScroll to track the scroll progress
    * - Accepts card, index, and scrollYProgress as props
    * - Returns a motion.div with the card component
    * - The opacity of the card is animated based on the scroll progress
    * - The transition duration and delay are set for smooth animation
*/
const PinnedCard = ({ card, index, scrollYProgress }: { card: CardProps, index: number, scrollYProgress: any }) => {
    
    const opacity = useTransform(scrollYProgress, [index * 0.2, (index + 1) * 0.2], [0, 1]);

    return (
        <motion.div
            className="gameplay-card"
            style={{ opacity }}
            transition={{ duration: 2.5, delay: 0.5 }}
        >
            <Card {...card} />
        </motion.div>
    );
};

export default GamePlayMechanics;
