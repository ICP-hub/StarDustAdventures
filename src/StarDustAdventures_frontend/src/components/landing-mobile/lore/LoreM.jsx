import React, { useEffect } from 'react';
import './lore.css';
import { loreText } from '../../../constants/text';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LoreM = () => {

  useEffect(() => {
    const applyAnimations = () => {
      if (window.innerWidth <= 768) {
       
        gsap.fromTo('.ls-title, .ls-text', 
          { scale: 1.2, opacity: 0 }, 
          { 
            scale: 1, 
            opacity: 1, 
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.ls-title',
              start: 'top 80%', 
              once: true,
            }
          }
        );

        // Continue other animations below
        gsap.fromTo('.ls-title, .ls-text', 
          { opacity: 1, y: 0 },  
          { 
            scrollTrigger: {
              trigger: '.ls-rotating-astro',
              start: 'top-=50 top', 
              end: '+=150',
              pin: '.ls-title, .ls-text', 
              pinSpacing: false,
              scrub: true,
            }
          }
        );

        gsap.fromTo('.ls-rotating-astro', 
          { opacity: 1, scale: 1 },
          {
            scrollTrigger: {
              trigger: '.lsm-first',
              start: 'top center-=50', 
              end: '+=200', 
              pin: '.ls-rotating-astro',
              pinSpacing: false,
              scrub: true,
            }
          }
        );

        const sections = gsap.utils.toArray('.lsm-text-item');

        sections.forEach((section, index) => {
          gsap.fromTo(section, 
            { opacity: 0, y: 100 },  
            { 
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: section,
                start: 'top 85%', 
                end: 'bottom 70%', 
                toggleActions: 'play none none none',
                scrub: true,
              }
            }
          );

          gsap.to('.ls-rotating-astro', {
            opacity: 0.2, 
            scrollTrigger: {
              trigger: section,
              start: 'top 85%', 
              end: 'bottom 70%', 
              scrub: true,
            }
          });

          if (index > 1) {
            gsap.to(sections[index - 2], {
              opacity: 0,
              y: -100,
              scrollTrigger: {
                trigger: section,
                start: 'top 85%', 
                end: 'top 70%', 
                scrub: true,
              }
            });
          }
        });

        gsap.fromTo('.ls-title, .ls-text', 
          { opacity: 1, y: 0 }, 
          { 
            opacity: 0, 
            y: -100,
            scrollTrigger: {
              trigger: '.lore-sec',
              start: 'top top',
              end: '+=150',
              scrub: true,
              toggleActions: 'play none none none',
            }
          }
        );

        gsap.fromTo('.ls-rotating-astro', 
          { opacity: 0, scale: 0.8, y: 100 },
          { 
            opacity: 1, 
            scale: 1,
            y: 0,
            scrollTrigger: {
              trigger: '.ls-rotating-astro',
              start: 'top 75%',
              end: 'bottom 40%',
              scrub: true,
            }
          }
        );
      }
    };

    applyAnimations();
    window.addEventListener('resize', applyAnimations);

    return () => {
      window.removeEventListener('resize', applyAnimations);
    };
  }, []);

  return (
    <div className='lore-sec'>
      <h1 className="ls-title" style={{ color: '#ffffff' }}>
        {loreText.title}
      </h1>
      <p className="ls-text" style={{ color: '#ffffff' }}>
        {loreText.subHeading}
      </p>

      <div className="ls-main">
        <img 
          src='rotation.gif' 
          alt='astronaut adventure' 
          className="ls-rotating-astro"
        />
        
        <div className="lsm-first">
          <div className="lsm-text-item lsm-side-left" style={{ color: '#ffffff' }}>
            <h3 className="lsm-ti-title">{loreText.data[0].title}</h3>
            <div className="lsm-ti-text">{loreText.data[0].text}</div>
          </div>
        </div>
        
        <div className="lsm-second">
          <div className="lsm-text-item lsm-side-right" style={{ color: '#ffffff' }}>
            <h3 className="lsm-ti-title">{loreText.data[1].title}</h3>
            <div className="lsm-ti-text">{loreText.data[1].text}</div>
          </div>
          <div className="lsm-text-item lsm-side-left" style={{ color: '#ffffff' }}>
            <h3 className="lsm-ti-title">{loreText.data[2].title}</h3>
            <div className="lsm-ti-text">{loreText.data[2].text}</div>
          </div>  
        </div>

        <div className="lsm-third">
          <div className="lsm-text-item lsm-side-right" style={{ color: '#ffffff' }}>
            <h3 className="lsm-ti-title">{loreText.data[3].title}</h3>
            <div className="lsm-ti-text">{loreText.data[3].text}</div>
          </div>
          <div className="lsm-text-item lsm-side-left" style={{ color: '#ffffff' }}>
            <h3 className="lsm-ti-title">{loreText.data[4].title}</h3>
            <div className="lsm-ti-text">{loreText.data[4].text}</div>
          </div>  
        </div>
      </div>
      
    </div>
  );
}

export default LoreM;
