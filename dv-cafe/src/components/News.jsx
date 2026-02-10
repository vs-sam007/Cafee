import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const newsData = [
  {
    date: "Mar 15, 2024",
    title: "Exploring the World of Coffee Origins",
    image: "/images/news3.jpg",
    path: "/news1"
  },
  {
    date: "Feb 28, 2024",
    title: "5 Ways to Elevate Your Coffee Experience",
    image: "/images/news2.jpg",
    path: "/news2"
  },
  {
    date: "Feb 6, 2024",
    title: "Eco-Friendly Practices at Latte Haven",
    image: "/images/news1.jpg",
    path: "/news3"
  },
];

const News = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".news-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-900 mb-16 text-center md:text-left">
          Latest <span className="text-gold-600 italic">Coffee News</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {newsData.map((news, index) => (
            <Link to={news.path} key={index} className="news-card group block">
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md border border-coffee-900/5 aspect-[3/4] md:aspect-auto md:h-[400px]">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="space-y-3">
                <p className="font-sans text-sm font-bold text-gold-600 tracking-widest uppercase">{news.date}</p>
                <h3 className="font-serif text-2xl font-semibold text-coffee-900 leading-tight group-hover:text-gold-600 transition-colors duration-300">
                  {news.title}
                </h3>
                <span className="inline-block border-b border-coffee-900 text-coffee-900 text-sm font-sans pb-1 mt-2 group-hover:text-gold-600 group-hover:border-gold-600 transition-colors">Read Article</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;