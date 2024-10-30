import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import orange from './assets/orange.png';
import bg from "./assets/backgorund.png";
import './starDustStyles.css';


gsap.registerPlugin(ScrollTrigger);

const StarDustMobile = () => {
  const isMobile = () => window.innerWidth <= 768;
  const [showMobile, setShowMobile] = React.useState(isMobile());
  
  // Refs for elements we'll animate
  const containerRef = useRef(null);
  const orangePlanetRef = useRef(null);
  const overviewRef = useRef(null);
  // const topToEarn = useRef(null)

  const tapToMineRef = useRef(null);
  const uspRef = useRef(null);
  const starDustRef = useRef(null);
  const upgradesRef = useRef(null);
  const gameConceptRef = useRef(null);
  

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([
        overviewRef.current,
        tapToMineRef.current,
        uspRef.current,
        starDustRef.current,
        upgradesRef.current,
        gameConceptRef.current
      ], { y: '100%', opacity: 0 });

      // Center orange planet initially
      gsap.set(orangePlanetRef.current, {
        x: '50%',
        y: '50%',
        scale: 1.2,
        xPercent: 20,
        yPercent: -15
      });

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=4000', // Adjust based on your needs
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / 6, // Dividing into 6 equal sections
            duration: { min: 0.2, max: 0.3 },
            inertia: false
          }
        }
      });

      // Animation sequence
      tl
        // Initial state to second state
        .to(orangePlanetRef.current, {
          y: '40%',
          scale: 0.9,
          duration: 1
        })
        .to(overviewRef.current, {
          opacity: 1,
          y: '30%',
          duration: 1
        }, '<')

        // Move overview to original position
        .to([orangePlanetRef.current, overviewRef.current], {
          y: '0',
          x: '-2%', // Original orange planet position
          opacity: 1,
          duration: 1
        })
        

        // Tap-to-mine sequence
        .to(tapToMineRef.current, {
          opacity: 1,
          y: '0',
          duration: 1
        })

        // USP sequence
        .to(uspRef.current, {
          opacity: 1,
          y: '0',
          duration: 1
        })

        // Star Dust Resources sequence
        .to(starDustRef.current, {
          opacity: 1,
          y: '0',
          duration: 1
        })

        // Upgrades sequence
        .to(upgradesRef.current, {
          opacity: 1,
          y: '0',
          duration: 1
        })

        // Game Concept sequence
        .to(gameConceptRef.current, {
          opacity: 1,
          y: '0',
          duration: 1
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowMobile(isMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!showMobile) {
    return null;
  }

  return (
    // <div ref={containerRef} className="min-h-screen w-full bg-[#040B2C] relative font-['Press_Start_2P'] text-white overflow-hidden">
    //   {/* Background with stars and gradient */}
    //   <div className="absolute inset-0 z-0">
    //     <img 
    //       src={bg} 
    //       alt="Space background"
    //       className="w-full h-full object-cover opacity-30"
    //     />
    //   </div>

    //   {/* Animated stars overlay
    //   {[...Array(20)].map((_, i) => (
    //     <div
    //       key={i}
    //       className="absolute w-1 h-1 bg-[#4A90E2] rounded-sm animate-twinkle"
    //       style={{
    //         top: `${Math.random() * 100}%`,
    //         left: `${Math.random() * 100}%`,
    //         animationDelay: `${Math.random() * 3}s`,
    //         opacity: Math.random() * 0.7 + 0.3,
    //       }}
    //     />
    //   ))} */}

    //   {/* Main content container */}
    //   <div className="relative z-10 max-w-md mx-auto pt-8 px-6">
    //     {/* Game Logo and Title */}
    //     <div className="text-center flex flex-row justify-between items-center mb-6">
    //       <div className='flex flex-col'>
    //         <h1 className="text-2xl leading-relaxed">Star Dust</h1>
    //         <h1 className="text-2xl leading-relaxed mb-1">Adventures</h1>
    //       </div>
          
    //       <div>
    //         <button className="bg-[#B4177E] text-white px-8 py-2 rounded-lg text-sm hover:bg-[#931366] transition-colors uppercase">
    //           Play Now
    //         </button>
    //       </div>
    //     </div>

    //     {/* Main Section with dark translucent background */}
    //     <div className="rounded-lg p-6 space-y-8">
    //       <div className="space-y-2">
    //         <h2 ref={overviewRef} className="text-xl flex justify-center items-center font-bold mb-3">
    //           Overview of Star Dust Adventures
    //         </h2>
    //         {/* <p  className="text-sm text-gray-300 leading-relaxed">
    //           A Tap-to-Earn Game Combining Exploration and Blockchain
    //         </p> */}
    //       </div>

    //       <div>
    //         <div className='flex flex-row'>
    //           {/* Orange Planet */}
    //           <img 
    //             ref={orangePlanetRef}
    //             src={orange}
    //             alt="Orange planet"
    //             className="absolute mt-20 -left-[27%] rounded-full object-cover w-[250px] h-[250px]"
    //           />

    //           <div className="space-y-4">
    //             <div ref={tapToMineRef} className='ml-4'>
    //               <h1 className='text-bold'>Tap-to-Mine Mechanics</h1>
    //               <p className='text-xs'>Engaging and addictive gameplay that appeals to a wide range of players.</p>
    //             </div>

    //             <div ref={uspRef} className='ml-[105px]'>
    //               <h1 className='text-bold'>Unique Selling Proposition</h1>
    //               <p className='text-xs'>Exciting game mechanics merged with blockchain play-to-earn mechanics for gamers and crypto enthusiasts.</p>
    //             </div>

    //             <div ref={starDustRef} className='ml-[120px]'>
    //               <h1 className='text-bold'>Star Dust Resources</h1>
    //               <p className='text-xs'>A valuable in-game resource with real-world cryptocurrency potential, increasing player engagement.</p>
    //             </div>

    //             <div ref={upgradesRef} className='ml-16'>
    //               <h1 className='text-bold'>Upgrades</h1>
    //               <p className='text-xs'>Players can enhance their astronaut's gear, oxygen tank, and spaceship for improved efficiency.</p>
    //             </div>

    //             <div ref={gameConceptRef} className='ml-4'>
    //               <h1 className='text-bold'>Game Concept</h1>
    //               <p className='text-xs'>Control an astronaut mining StarDust across the universe with tap-to-earn mechanics.</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    
      <div ref={containerRef} className="game-container">
        {/* Background with stars and gradient */}
        <div className="background-overlay">
          <img
            src={bg}
            alt="Space background"
            className="background-image"
          />
        </div>
  
        {/* Main content container */}
        <div className="content-container">
          {/* Game Logo and Title */}
          <div className="header">
            <div className="title-container">
              <h1 className="game-title">Star Dust</h1>
              <h1 className="game-title mb-1">Adventures</h1>
            </div>
            
            <div>
              <button className="play-button">
                Play Now
              </button>
            </div>
          </div>
  
          {/* Main Section */}
          <div className="main-section">
            <div className="section-header">
              <h2 ref={overviewRef} className="section-title">
                Overview of Star Dust Adventures
              </h2>
            </div>
  
            <div>
              <div className="features-container">
                {/* Orange Planet */}
                <img
                  ref={orangePlanetRef}
                  src={orange}
                  alt="Orange planet"
                  className="orange-planet"
                />
  
                <div className="feature-list">
                  <div ref={tapToMineRef} className="feature-tap-mine">
                    <h1 className="feature-title">Tap-to-Mine Mechanics</h1>
                    <p className="feature-description">Engaging and addictive gameplay that appeals to a wide range of players.</p>
                  </div>
  
                  <div ref={uspRef} className="feature-usp">
                    <h1 className="feature-title">Unique Selling Proposition</h1>
                    <p className="feature-description">Exciting game mechanics merged with blockchain play-to-earn mechanics for gamers and crypto enthusiasts.</p>
                  </div>
  
                  <div ref={starDustRef} className="feature-stardust">
                    <h1 className="feature-title">Star Dust Resources</h1>
                    <p className="feature-description">A valuable in-game resource with real-world cryptocurrency potential, increasing player engagement.</p>
                  </div>
  
                  <div ref={upgradesRef} className="feature-upgrades">
                    <h1 className="feature-title">Upgrades</h1>
                    <p className="feature-description">Players can enhance their astronaut's gear, oxygen tank, and spaceship for improved efficiency.</p>
                  </div>
  
                  <div ref={gameConceptRef} className="feature-concept">
                    <h1 className="feature-title">Game Concept</h1>
                    <p className="feature-description">Control an astronaut mining StarDust across the universe with tap-to-earn mechanics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default StarDustMobile;