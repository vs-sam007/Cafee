import Hero from "./components/Hero"
import News from './components/News'
import Welovecoffee from './components/Welovecoffee'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageCarousel from "./components/ImageCarousel";
import MenuSection from './components/MenuSection';
import { FaWhatsapp } from 'react-icons/fa';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ImageCarousel />
              <MenuSection />
              <News />
              <Welovecoffee />
              <Footer />
            </>
          } />



        </Routes>
      </Router>
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  )
}

export default App
