import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuData = {
    coffee: {
        title: "Coffee Classics",
        image: "/images/latte.jpg", // Assuming existing path
        items: [
            { name: "Espresso", price: "$2.50", desc: "Rich and bold single shot of espresso." },
            { name: "Americano", price: "$3.00", desc: "Espresso with hot water for a smooth, robust flavor." },
            { name: "Latte", price: "$4.00", desc: "Espresso with steamed milk and a light layer of foam." },
            { name: "Cappuccino", price: "$4.00", desc: "Equal parts espresso, steamed milk, and foam." },
            { name: "Flat White", price: "$4.00", desc: "Silky microfoam over a double shot of espresso." },
            { name: "Macchiato", price: "$4.00", desc: "Espresso marked with a dollop of frothy steamed milk." },
            { name: "Mocha", price: "$4.00", desc: "Espresso, steamed milk, and rich chocolate syrup." },
            { name: "Cold Brew", price: "$4.00", desc: "Smooth and refreshing cold-brewed coffee." },
        ]
    },
    specialty: {
        title: "Specialty Lattes",
        image: "/images/chailatte3.jpg",
        items: [
            { name: "Matcha Latte", price: "$2.50", desc: "Ceremonial grade matcha blended with steamed milk." },
            { name: "Turmeric Latte", price: "$3.00", desc: "Turmeric, ginger, and cinnamon healthy boost." },
            { name: "Chai Latte", price: "$4.00", desc: "Spiced chai tea blended with steamed milk." },
            { name: "Honey Lavender", price: "$4.00", desc: "Espresso, steamed milk, honey, and lavender." },
        ]
    },
    tea: {
        title: "Tea & Beverages",
        image: "/images/hot2.jpg",
        items: [
            { name: "Premium Tea", price: "$2.50", desc: "Selection of black, green, and herbal teas." },
            { name: "Hot Chocolate", price: "$3.00", desc: "Rich and creamy, topped with whipped cream." },
            { name: "Golden Milk", price: "$4.00", desc: "Turmeric, ginger, and honey blended with milk." },
            { name: "Iced Tea", price: "$4.00", desc: "Freshly brewed and chilled, served over ice." },
        ]
    }
};

const MenuSection = () => {
    const [activeTab, setActiveTab] = useState('coffee');
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate container
            gsap.fromTo(containerRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );

            // Animate items
            gsap.from(".menu-item-anim", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.2 // Wait for container
            });

        }, sectionRef);

        return () => ctx.revert();
    }, [activeTab]);

    // Handle Tab Change Animation
    const handleTabChange = (tabKey) => {
        if (tabKey === activeTab) return;

        // Fade out current content
        gsap.to(".menu-content", {
            opacity: 0,
            y: 10,
            duration: 0.3,
            onComplete: () => {
                setActiveTab(tabKey);
                // Fade in new content
                gsap.fromTo(".menu-content",
                    { opacity: 0, y: 10 },
                    { opacity: 1, y: 0, duration: 0.5, clearProps: "all" } // clearProps to avoid conflict with hover effects later if any
                );
            }
        });
    };

    const currentCategory = menuData[activeTab];

    return (
        <section ref={sectionRef} id="menu" className="py-24 bg-cream-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-900 mb-4">Our Transformations</h2>
                    <p className="font-sans text-coffee-800 text-lg max-w-2xl mx-auto">
                        From the bean to the cup, we ensure every sip is a masterclass in flavor.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-6 md:gap-12 mb-16 border-b border-coffee-900/10 pb-4">
                    {Object.keys(menuData).map((key) => (
                        <button
                            key={key}
                            onClick={() => handleTabChange(key)}
                            className={`font-serif text-xl md:text-2xl pb-4 transition-all duration-300 relative
                ${activeTab === key ? 'text-coffee-900' : 'text-coffee-900/40 hover:text-coffee-900/70'}
              `}
                        >
                            {menuData[key].title}
                            {activeTab === key && (
                                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gold-500"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Container */}
                <div ref={containerRef} className="menu-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* Menu List */}
                    <div className="flex flex-col justify-center gap-8">
                        {currentCategory.items.map((item, index) => (
                            <div key={index} className="menu-item-anim group flex justify-between items-baseline border-b border-coffee-900/10 pb-4 hover:border-gold-500 transition-colors duration-300">
                                <div className="flex flex-col">
                                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-coffee-900 group-hover:text-gold-600 transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="font-sans text-sm md:text-base text-coffee-800/70 mt-1">{item.desc}</p>
                                </div>
                                <span className="font-sans text-lg font-bold text-gold-600 shrink-0 ml-4">{item.price}</span>
                            </div>
                        ))}
                    </div>

                    {/* Featured Image */}
                    <div className="relative h-[400px] lg:h-auto overflow-hidden rounded-2xl shadow-xl">
                        {/* Fallback pattern if image fails, but using the correct path from public folder should work. 
                 Using object-cover to ensure it fills nicely. */}
                        <img
                            src={currentCategory.image}
                            alt={currentCategory.title}
                            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                        />
                        {/* Overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/30 to-transparent pointer-events-none"></div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MenuSection;
