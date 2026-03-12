import React, { useEffect, useRef } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { BsFillCupHotFill } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(footerRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-coffee-900 text-cream-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-2xl font-serif font-bold tracking-wider text-gold-500">
            <span>DVicious</span>
            <BsFillCupHotFill />
            <span>Brew</span>
          </div>
          <p className="font-sans text-cream-200/80 leading-relaxed">
            Brewed to perfection. Experience the finest coffee in a warm, inviting atmosphere.
          </p>
          <div className="flex gap-4 mt-2">
            <FaInstagram className="text-2xl hover:text-gold-500 transition-colors cursor-pointer" />
            <FaFacebook className="text-2xl hover:text-gold-500 transition-colors cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-gold-500 transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-gold-500">Visit Us</h4>
          <div className="space-y-4 font-sans text-cream-200/80">
            <p>123 Brew Lane</p>
            <p>Brew City, BC 12345</p>
            <p>(555) 987-6543</p>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-gold-500">Opening Hours</h4>
          <div className="space-y-2 font-sans text-cream-200/80">
            <div className="flex justify-between max-w-[200px]">
              <span>Mon - Thu</span>
              <span>11am - 9pm</span>
            </div>
            <div className="flex justify-between max-w-[200px]">
              <span>Fri - Sat</span>
              <span>11am - 10pm</span>
            </div>
            <div className="flex justify-between max-w-[200px]">
              <span>Sunday</span>
              <span>12pm - 8pm</span>
            </div>
          </div>
        </div>

        {/* Map or Newsletter? Map for now as per original */}
        <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-coffee-800">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.9966984785413!2d4.88891647692836!3d52.37367847978352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c1d78df1eb%3A0x74f9a55efc5b1c1!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1707165123456!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-300"
          ></iframe>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-coffee-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-cream-200/60 font-sans text-sm">
        <p>© 2024 — DViciousBrew. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gold-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gold-500 transition-colors">Terms</a>
          <a href="#" className="hover:text-gold-500 transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
