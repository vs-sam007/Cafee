import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/images/imagecar1.jpg",
  "/images/imagecar2.jpg",
  "/images/imageCar3.jpg",
  "/images/imageCar4.jpg",
  "/images/imageCar5.jpg",
  "/images/imageCar6.jpg",
  "/images/imageCar7.jpg",
];

const ImageCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full py-20 bg-cream-100 overflow-hidden">

      {/* Gradient Fog Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream-100 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream-100 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-cream-100 to-transparent z-10 pointer-events-none hidden md:block"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-cream-100 to-transparent z-10 pointer-events-none hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center font-serif text-4xl md:text-5xl font-bold text-coffee-900 mb-12">
          Moments of <span className="text-gold-600 italic">Joy</span>
        </h2>

        <Swiper
          ref={swiperRef}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full py-10"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="!w-[300px] !h-[400px] md:!w-[400px] md:!h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={src}
                alt={`Cafe Moment ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;
