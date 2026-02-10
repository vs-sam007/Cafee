import Hero from "./components/Hero"
import News from './components/News'
import Welovecoffee from './components/Welovecoffee'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageCarousel from "./components/ImageCarousel";
import MenuSection from './components/MenuSection';

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
    </>
  )
}

export default App
