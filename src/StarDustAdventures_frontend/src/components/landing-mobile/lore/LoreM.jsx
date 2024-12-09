// import React, { useEffect } from 'react';
// import './lore.css';
// import { loreText } from '../../../constants/text';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const LoreM = () => {

//   useEffect(() => {
//     const applyAnimations = () => {
//       if (window.innerWidth <= 768) {
       
//         gsap.fromTo('.ls-title, .ls-text', 
//           { scale: 1.2, opacity: 0 }, 
//           { 
//             scale: 1, 
//             opacity: 1, 
//             duration: 1.5,
//             ease: 'power3.out',
//             scrollTrigger: {
//               trigger: '.ls-title',
//               start: 'top 80%', 
//               once: true,
//             }
//           }
//         );

//         // Continue other animations below
//         gsap.fromTo('.ls-title, .ls-text', 
//           { opacity: 1, y: 0 },  
//           { 
//             scrollTrigger: {
//               trigger: '.ls-rotating-astro',
//               start: 'top-=50 top', 
//               end: '+=150',
//               pin: '.ls-title, .ls-text', 
//               pinSpacing: false,
//               scrub: true,
//             }
//           }
//         );

//         gsap.fromTo('.ls-rotating-astro', 
//           { opacity: 1, scale: 1 },
//           {
//             scrollTrigger: {
//               trigger: '.lsm-first',
//               start: 'top center-=50', 
//               end: '+=200', 
//               pin: '.ls-rotating-astro',
//               pinSpacing: false,
//               scrub: true,
//             }
//           }
//         );

//         const sections = gsap.utils.toArray('.lsm-text-item');

//         sections.forEach((section, index) => {
//           gsap.fromTo(section, 
//             { opacity: 0, y: 100 },  
//             { 
//               opacity: 1,
//               y: 0,
//               scrollTrigger: {
//                 trigger: section,
//                 start: 'top 85%', 
//                 end: 'bottom 70%', 
//                 toggleActions: 'play none none none',
//                 scrub: true,
//               }
//             }
//           );

//           gsap.to('.ls-rotating-astro', {
//             opacity: 0.2, 
//             scrollTrigger: {
//               trigger: section,
//               start: 'top 85%', 
//               end: 'bottom 70%', 
//               scrub: true,
//             }
//           });

//           if (index > 1) {
//             gsap.to(sections[index - 2], {
//               opacity: 0,
//               y: -100,
//               scrollTrigger: {
//                 trigger: section,
//                 start: 'top 85%', 
//                 end: 'top 70%', 
//                 scrub: true,
//               }
//             });
//           }
//         });

//         gsap.fromTo('.ls-title, .ls-text', 
//           { opacity: 1, y: 0 }, 
//           { 
//             opacity: 0, 
//             y: -100,
//             scrollTrigger: {
//               trigger: '.lore-sec',
//               start: 'top top',
//               end: '+=150',
//               scrub: true,
//               toggleActions: 'play none none none',
//             }
//           }
//         );

//         gsap.fromTo('.ls-rotating-astro', 
//           { opacity: 0, scale: 0.8, y: 100 },
//           { 
//             opacity: 1, 
//             scale: 1,
//             y: 0,
//             scrollTrigger: {
//               trigger: '.ls-rotating-astro',
//               start: 'top 75%',
//               end: 'bottom 40%',
//               scrub: true,
//             }
//           }
//         );
//       }
//     };

//     applyAnimations();
//     window.addEventListener('resize', applyAnimations);

//     return () => {
//       window.removeEventListener('resize', applyAnimations);
//     };
//   }, []);

//   return (
//     <div className='lore-sec'>
//       <h1 className="ls-title" style={{ color: '#ffffff' }}>
//         {loreText.title}
//       </h1>
//       <p className="ls-text" style={{ color: '#ffffff' }}>
//         {loreText.subHeading}
//       </p>

//       <div className="ls-main">
//         <img 
//           src='rotation.gif' 
//           alt='astronaut adventure' 
//           className="ls-rotating-astro"
//         />
        
//         <div className="lsm-first">
//           <div className="lsm-text-item lsm-side-left" style={{ color: '#ffffff' }}>
//             <h3 className="lsm-ti-title">{loreText.data[0].title}</h3>
//             <div className="lsm-ti-text">{loreText.data[0].text}</div>
//           </div>
//         </div>
        
//         <div className="lsm-second">
//           <div className="lsm-text-item lsm-side-right" style={{ color: '#ffffff' }}>
//             <h3 className="lsm-ti-title">{loreText.data[1].title}</h3>
//             <div className="lsm-ti-text">{loreText.data[1].text}</div>
//           </div>
//           <div className="lsm-text-item lsm-side-left" style={{ color: '#ffffff' }}>
//             <h3 className="lsm-ti-title">{loreText.data[2].title}</h3>
//             <div className="lsm-ti-text">{loreText.data[2].text}</div>
//           </div>  
//         </div>

//         <div className="lsm-third">
//           <div className="lsm-text-item lsm-side-right" style={{ color: '#ffffff' }}>
//             <h3 className="lsm-ti-title">{loreText.data[3].title}</h3>
//             <div className="lsm-ti-text">{loreText.data[3].text}</div>
//           </div>
//           <div className="lsm-text-item lsm-side-left" style={{ color: '#ffffff' }}>
//             <h3 className="lsm-ti-title">{loreText.data[4].title}</h3>
//             <div className="lsm-ti-text">{loreText.data[4].text}</div>
//           </div>  
//         </div>
//       </div>
      
//     </div>
//   );
// }
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LoreM = () => {
  // References for each section
  const headerRef = useRef(null);
  const rotationImageRef = useRef(null);
  const settingRef = useRef(null);
  const starDustRef = useRef(null);
  const commanderRef = useRef(null);
  const challengesRef = useRef(null);

  useEffect(() => {
    // Prevent default scroll behavior and hide scrollbar
    document.body.style.overflowX = 'hidden';
    
    // Create GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#lore-container",
        start: "top top",
        end: "+=600%", 
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Animation Sequence
    tl.fromTo(headerRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(rotationImageRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
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
        { y: -50, opacity: 1, duration: 1 }
    )

    // stardust wala aniamtion
    .fromTo(starDustRef.current, 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }
    )

    // Move Setting Section up and fade out while bringing in Star Dust Section
    .to(settingRef.current, 
      { y: -60, opacity: 0, duration: 1 }
    )
    
    .to(starDustRef.current, 
        { y: -100, opacity: 1, duration: 1 }
    )
    
    .to(starDustRef.current, 
        { y: -200, opacity: 1, duration: 1 }
    )

     // Bring in Commander Section
    .fromTo(commanderRef.current, 
        { y: 400, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }
    )
    .to(commanderRef.current, 
        { y: -100, opacity: 0, duration: 1 }
    )
    // Move Star Dust Section up and fade out
    .to(starDustRef.current, 
      { y: -200, opacity: 0, duration: 1 }
    )
    
    
    // Bring in Challenges Section
    .fromTo(challengesRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    )
    // Fade out Challenges Section
    .to(challengesRef.current, 
        { y: -100, opacity: 0, duration: 1 }
    )

    // Cleanup function
    return () => {
      tl.kill();
      document.body.style.overflowY = '';
    };
  }, []);

  return (
    <div 
      id="lore-container" 
      className="min-h-screen bg-black text-white p-4 relative overflow-hidden "
    >
      {/* Main Content */}
      <main className="relative w-full space-y-12 flex flex-col items-center justify-center">
        {/* Lore Header Section */}
        <header 
          ref={headerRef} 
          className="space-y-4 w-full flex justify-center items-center"
        >
          <div className='flex flex-col justify-center items-center'>
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
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
          className='flex items-center justify-center top-10 my-8 absolute z-1'
        >
          <img
            src='/assets/orange.png'
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
          className="mt-10  w-full max-w-xl"
        >
          <h2 className="text-3xl mb-4 ">
            Setting in the <br /> Distant Future
          </h2>
          <p className="text-gray-300">
            Humanity embarks on a quest to gather cosmic resources in a vast universe.
          </p>
        </section>

        {/* StarDust as Currency Section */}
        <section 
          ref={starDustRef} 
          className="space-y-4 w-full  max-w-xl"
        >
          <div className='flex flex-col w-full '>
            <h2 className="font-bold text-4xl  mb-4  w-60 mx-auto flex justify-start items-center gap-2">
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
          className="space-y-4  w-full max-w-xl"
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
            <h2 className=" font-bold text-4xl  mb-4  w-60 mx-auto flex justify-start items-center gap-2">
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