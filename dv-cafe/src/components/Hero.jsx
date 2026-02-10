import React, { useEffect, useRef } from 'react';
import { BsFillCupHotFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const navRef = useRef(null);
  const bgRef = useRef(null);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Parallax Effect
    gsap.to(bgRef.current, {
      yPercent: 30, // move background down slower than scroll
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Initial State
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], { y: 50, opacity: 0 });
    gsap.set(navRef.current, { y: -20, opacity: 0 });

    // Animation Sequence
    tl.to(navRef.current, { y: 0, opacity: 1, duration: 1 })
      .to(titleRef.current, { y: 0, opacity: 1, duration: 1, stagger: 0.2 }, "-=0.5")
      .to(subtitleRef.current, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
      .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8");

  }, []);

  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden text-cream-100">

      {/* Background Image with Overlay */}
      <div ref={bgRef} className="absolute inset-0 z-0 scale-110"> {/* Scaled up to avoid gaps during parallax */}
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
          alt="Premium Coffee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 bg-blend-overlay"></div>
      </div>

      {/* Navigation */}
      <nav ref={navRef} className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-6 md:px-16">
        <a href="/" className="flex items-center gap-2 text-2xl font-serif font-bold tracking-wider hover:text-gold-500 transition-colors duration-300">
          <span>DVicious</span>
          <BsFillCupHotFill className="text-gold-500" />
          <span>Brew</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-sans text-lg tracking-wide">
          <button onClick={() => scrollToSection("menu")} className="hover:text-gold-500 transition-colors duration-300 relative group">
            Menu
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => navigate('/news')} className="hover:text-gold-500 transition-colors duration-300 relative group">
            News
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 ref={titleRef} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight max-w-4xl text-shadow-lg">
          Crafted to <span className="text-gold-500 italic">Perfection</span>
        </h1>

        <p ref={subtitleRef} className="font-sans text-lg md:text-2xl text-cream-200 mb-10 max-w-2xl font-light tracking-wide">
          Experience the art of coffee, where every bean tells a story of passion and flavor.
        </p>

        <button
          ref={ctaRef}
          onClick={() => scrollToSection("menu")}
          className="group relative px-8 py-3 bg-transparent border border-gold-500 text-gold-500 font-sans text-lg font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-gold-500 hover:text-coffee-900 overflow-hidden"
        >
          <span className="relative z-10">Discover Our Menu</span>
        </button>
      </div>

    </div>
  );
};

export default Hero;
