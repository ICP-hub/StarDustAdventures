import { useRef, useEffect, useState } from 'react';
import GameplayMechanic, { CardProps } from './Cards';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

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

const Header = ({titleRef}:{titleRef : React.RefObject<HTMLDivElement>}) => {
    return (
        <div className="gameplay-mechanics-header" ref={titleRef}>
            <h3 className="section-title">Gameplay Mechanics</h3>
            <p className="section-caption">Explore the engaging system of Star Dust Adventures</p>
        </div>
    )
}

type GamePlayCardListProps = {
    containerRef : React.RefObject<HTMLDivElement>,
    linesRef : React.RefObject<HTMLDivElement[]>
}

const GamePlayCardList = ({ containerRef, linesRef } : GamePlayCardListProps) => {
    return (
        <div ref={containerRef} className="gameplay-mechanics-cards">
            {CARDS.map((card, index) => (
                <React.Fragment key={index}>
                    <GameplayMechanic {...card} />
                    {(index < CARDS.length - 1) && ( // Validate `linesRef.current` is not null
                        <div
                        className="w-1/4 h-0.5 bg-white bg-opacity-50 transform origin-left"
                        ref={el => el && linesRef.current && (linesRef.current[index] = el)}></div>    // Assign ref after validating that linesRef.current is not null
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

const GamePlayMechanics = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const linesRef = useRef<Array<HTMLDivElement>>([]);
    const titleRef = useRef<HTMLDivElement>(null);

    const [isMobile,setIsMobile] = useState<Boolean>(window.innerWidth < 768);

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setIsMobile(window.innerWidth < 768);
        });
        return () => {
            window.removeEventListener('resize',()=>{});
        }
    },[]);

    useEffect(() => {
        if (!containerRef.current || !sectionRef.current || !titleRef.current) return;
        const cards = containerRef.current.querySelectorAll('.gameplay-card');
        const lines = linesRef.current;
        console.log(cards)

        
        
        // Screen based Animation
        if(!isMobile){
            gsap.set(cards, { opacity: 0, scale: 0.8 });
            gsap.set(lines, { scaleX: 0 });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                },
            });
            // Desktop Animation
            tl.to(cards, { opacity: 1, scale: 1, stagger: 0.2, duration: 0.5 })
            .to(lines, { scaleX: 1, duration: 0.5, stagger: 0.2 }, '<');
        } else{
            // Cards Scroll based Animation

            gsap.to(cards,{
                xPercent: - 100 * (cards.length -1),
                scale:1.2,
                ease : "none",
                scrollTrigger:{
                    trigger:sectionRef.current,
                    pin:true,
                    scrub : 1,
                    // snap : 1 / (cards.length - 1),
                    end : () => sectionRef.current ? "+=" + sectionRef.current.offsetWidth / 3 : "+=0",
                    markers:true
                }
            })
            
        }
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [isMobile]);

    return (
        <section className="gameplay-mechanics" ref={sectionRef}>
            <Header titleRef={titleRef} />
            <GamePlayCardList linesRef={linesRef} containerRef={containerRef}/>
        </section>
    );
};

export default GamePlayMechanics;