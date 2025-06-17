import Header from './components/Header/Header';
import Expertise from './components/Expertise/Expertise';
import './App.css';
import Works from './components/Works/Works';
import Experience from './components/Experience/Experience';
import Blogs from './components/Blogs/Blogs';
import Testimonials from './components/Testimonial/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import { ReactLenis } from 'lenis/react'

function App() {

  return (
    <>
      <ReactLenis root>
        <Header />
        <Expertise />
        <Works />
        <Experience />
        <Blogs />
        <Testimonials />
        <FAQ />
        <Footer />
      </ReactLenis>
    </>
  )
}

export default App
