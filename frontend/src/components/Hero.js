import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.to(".hero-bg", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top", 
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from(".hero-text", { 
      y: -50, 
      opacity: 0, 
      duration: 1, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <h1 className="hero-text">Accelerating Business Growth</h1>
        <p className="hero-subtext">Innovative software solutions tailored for your success.</p>
        <a href="#contact" className="btn btn-primary">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;
