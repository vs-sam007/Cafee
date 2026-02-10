import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsFillCupHotFill } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const storyData = [
  {
    title: "The Origin",
    text: "It all starts with the soil. Our beans are sourced from the finest high-altitude plantations in Ethiopia and Colombia, where the perfect climate nurtures every cherry to maturity. We work directly with farmers to ensure ethical practices and superior quality.",
    image: "/images/news3.jpg"
  },
  {
    title: "The Roast",
    text: "Roasting is an art form. We roast in small batches, carefully monitoring temperature and time to unlock the unique flavor notes of each bean. From light, floral notes to deep, chocolatey undertones, our roast master crafts perfection in every batch.",
    image: "/images/news2.jpg"
  },
  {
    title: "The Ritual",
    text: "The final pour is where magic happens. Our baristas are trained artists, ensuring that every cup is not just a drink, but an experience. Whether it's a precise pour-over or a silky latte, we serve passion in liquid form.",
    image: "/images/love.jpg"
  }
];

const Welovecoffee = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image switching logic
      storyData.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: `#story-text-${index}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveImage(index),
          onEnterBack: () => setActiveImage(index),
          // Toggle class for text fade effect
          toggleClass: { targets: `#story-text-${index}`, className: "opacity-100" },
          onLeave: () => {
            if (index !== storyData.length - 1) { // Don't fade out last one
              gsap.to(`#story-text-${index}`, { opacity: 0.3 })
            }
          },
          onLeaveBack: () => gsap.to(`#story-text-${index}`, { opacity: 0.3 })
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-cream-200 min-h-screen flex flex-col md:flex-row">

      {/* Left Column - Sticky Images */}
      <div ref={leftColRef} className="hidden md:block w-1/2 h-screen sticky top-0 overflow-hidden">
        {storyData.map((data, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeImage === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-coffee-900/20 mix-blend-multiply"></div>
          </div>
        ))}

        {/* Brand Overlay */}
        <div className="absolute top-8 left-8 z-10">
          <div className="flex items-center gap-2 text-2xl font-serif font-bold tracking-wider text-cream-100 drop-shadow-lg">
            <span>DVicious</span>
            <BsFillCupHotFill />
            <span>Brew</span>
          </div>
        </div>
      </div>

      {/* Right Column - Scrolling Text */}
      <div className="w-full md:w-1/2 flex flex-col">
        {storyData.map((data, index) => (
          <div
            key={index}
            id={`story-text-${index}`}
            className="min-h-screen flex flex-col justify-center px-12 lg:px-24 py-24 transition-opacity duration-500 opacity-30 hover:opacity-100"
          >
            <span className="font-sans font-bold text-gold-600 tracking-widest uppercase mb-4">0{index + 1}</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-coffee-900 mb-8">{data.title}</h2>
            <p className="font-sans text-xl text-coffee-800/80 leading-relaxed">{data.text}</p>

            {/* Mobile Image Fallback */}
            <div className="md:hidden mt-8 rounded-xl overflow-hidden shadow-lg">
              <img src={data.image} alt={data.title} className="w-full h-64 object-cover" />
            </div>
          </div>
        ))}

        {/* Call to Action at the end */}
        <div className="min-h-[50vh] flex flex-col justify-center items-center bg-coffee-900 text-cream-100 px-12 py-24 text-center">
          <h2 className="font-serif text-4xl mb-8">Ready to taste the difference?</h2>
          <button className='px-10 py-4 bg-gold-600 text-coffee-900 rounded-full font-sans font-bold text-lg hover:bg-cream-100 transition-colors duration-300 shadow-xl'>
            Visit Us Today
          </button>
        </div>
      </div>

    </section>
  );
}

export default Welovecoffee;