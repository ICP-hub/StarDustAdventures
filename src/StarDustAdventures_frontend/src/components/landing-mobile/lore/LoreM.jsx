import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LoreM = () => {
  // References for each section
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const rotationImageRef = useRef(null);
  const settingRef = useRef(null);
  const starDustRef = useRef(null);
  const commanderRef = useRef(null);
  const challengesRef = useRef(null);

  useEffect(() => {
    // Prevent default scroll behavior and hide scrollbar
    document.body.style.overflowX = 'hidden';
    
    // Create GSAP timeline with adjusted settings
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#lore-container-second",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: true,
      }
    });

       // Animation Sequence
    tl.fromTo(headerRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(rotationImageRef.current, 
      { y: 200, opacity: 0 }, 
      { y: 100, opacity: 1, duration: 1 }
    )
    .to(rotationImageRef.current, 
      { opacity: 0.3, scale: 0.9, duration: 1 }
    )
    // Setting Section Animation
    .fromTo(settingRef.current, 
      { y: 200, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    )

    .to(settingRef.current, 
        { y: -20, opacity: 1, duration: 1 }
    )

    // stardust wala aniamtion
    .fromTo(starDustRef.current, 
        { y: 150, opacity: 0 }, 
        { y: -50, opacity: 1, duration: 1 }
    )

    // Move Setting Section up and fade out while bringing in Star Dust Section
    .to(settingRef.current, 
      { y: -30, opacity: 0, duration: 1 }
    )
    
    .to(starDustRef.current, 
        { y: -100, opacity: 1, duration: 1 }
    )
    
    .to(starDustRef.current, 
        { y: -200, opacity: 1, duration: 1 }
    )

     // Bring in Commander Section
    .fromTo(commanderRef.current, 
        { y: 600, opacity: 0 }, 
        { y:-200, opacity: 1, duration: 1 }
    )

     // Move Star Dust Section up and fade out
     .to(starDustRef.current, 
        { y: -200, opacity: 0, duration: 1 }
    )


    .to(commanderRef.current, 
        { y: -420, opacity: 1, duration: 1 }
    )

    // Bring in Challenges Section
    .fromTo(challengesRef.current, 
        { y: 600, opacity: 0 }, 
        { y: -420, opacity: 1, duration: 1 }
      )

    .to(commanderRef.current, 
        { y: -430, opacity: 0, duration: 1 }
    )
    
    
    
    
    .to(challengesRef.current, 
        { y: -600, opacity: 1, duration: 1 }
    )
    // Fade out Challenges Section
    .to(challengesRef.current, 
        { y: -610, opacity: 0, duration: 1 }
    )


    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.body.style.overflowY = '';
    };
  }, []);

  return (
    <div 
      id="lore-container-second" 
      ref={containerRef}
      className="min-h-screen bg-black text-white p-4 relative overflow-hidden"
    >
      {/* Main Content */}
      <main className="relative w-full mt-10 space-y-12 flex flex-col items-center justify-center">
        {/* Lore Header Section */}
        <header 
          ref={headerRef} 
          className="space-y-4 w-full flex justify-center items-center z-10"
        >
          <div className='flex flex-col justify-center items-center'>
            <h2 className="text-4xl font-bold font-coin mb-4 flex items-center gap-2">
              Lore and <br /> Storyline
            </h2>
            <p className="text-gray-300 w-52">
              Explore the Epic Quest for Star Dust in a Distant Future
            </p>
          </div>
        </header>

        {/* Rotating Image */}
        <div 
          ref={rotationImageRef} 
          className='flex items-center justify-center top-10 my-8 absolute z-0'
        >
          <img
            src='rotation.gif'
            width={557}
            height={557}
            loading='lazy'
            alt="Rotating illustration"
            className="rounded-full"
          />
        </div>

        {/* Setting Section */}
        <section 
          ref={settingRef} 
          className="mt-10 w-full max-w-xl"
        >
          <h2 className="text-3xl mb-4">
            Setting in the <br /> Distant Future
          </h2>
          <p className="text-gray-300">
            Humanity embarks on a quest to gather cosmic resources in a vast universe.
          </p>
        </section>

        {/* StarDust as Currency Section */}
        <section 
          ref={starDustRef} 
          className="space-y-4 w-full max-w-xl"
        >
          <div className='flex flex-col w-full'>
            <h2 className="font-bold text-4xl mb-4 w-60 mx-auto flex justify-start items-center gap-2">
              Star Dust <br /> as Currency
            </h2>
            <p className="text-gray-300 w-72 mr-4 mx-auto">
              Star Dust emerges as a vital energy source, becoming the universal currency.
            </p>
          </div>
        </section>

        {/* Commander Section */}
        <section 
          ref={commanderRef} 
          className="space-y-4 w-full max-w-xl"
        >
          <h2 className="text-3xl mb-4 font-bold">
            Commander <br /> Dom's Mission
          </h2>
          <p className="text-gray-300">
            Elite astronaut Commander Dom leads a mission to mine Star Dust and upgrade gear.
          </p>
        </section>

        {/* Challenges Section */}
        <section 
          ref={challengesRef} 
          className="space-y-4 w-full max-w-xl"
        >
          <div className='flex flex-col w-full'>
            <h2 className="font-bold text-4xl mb-4 w-60 mx-auto flex justify-start items-center gap-2">
              Challenges <br /> Ahead
            </h2>
            <p className="text-gray-300 w-72 mr-4 mx-auto">
              The mission involves navigating hostile planets & overcoming various obstacles.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoreM;