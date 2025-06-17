import Navbar from '../Navbar/Navbar';
import heroImg1 from '../../assets/images/avtar-1.svg';
import heroImg2 from '../../assets/images/avtar-2.svg';
import logo1 from '../../assets/logo/flash.svg';
import logo2 from '../../assets/logo/susila.svg';
import logo3 from '../../assets/logo/wavefun.svg';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './header.css';

const Header = () => {

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  const renderLetters = (text) =>
    text.split('').map((char, i) => (
      <span key={i} className="inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  useEffect(() => {
    const line1 = gsap.utils.toArray(line1Ref.current.children);
    const line2 = gsap.utils.toArray(line2Ref.current.children);
    const line3 = gsap.utils.toArray(line3Ref.current.children);

    gsap.fromTo(
      line1,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo(
      line2,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3,
      }
    );

    gsap.fromTo(
      line3,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.6,
      }
    );
  }, []);

  return (
    <header className="header">
      <Navbar />
      <div className="hero-container">
      <div className="hero-wrapper">
        <p className="hero-line">
         <span ref={line1Ref}>{renderLetters('I AM A')}</span>
          <img src={heroImg1} alt="Profile" className="hero-badge" />
        </p>
        <p className="hero-line">
          <span ref={line2Ref}>{renderLetters('FREELANCE')}</span>
        </p><br />
        <p className="hero-line">
          <span ref={line2Ref}>{renderLetters('DESIGNER')}</span>
        <img src={heroImg2} alt="Portfolio" className="hero-badge hero-badge--wide" />
          <span ref={line2Ref}>{renderLetters('FROM')}</span>
        </p>
        <br />
        <p className="hero-line"><span ref={line3Ref}>{renderLetters('San Francisco')}</span></p>
      </div>

      <div className="logos-and-text">
          <div className="logo-item doradesign" ><img src={logo1} alt="Logo 1" />doradesign</div>
          <div className="logo-item"><img src={logo2} alt="Logo 2"  /></div>
          <div className="logo-item"><img src={logo3} alt="Logo 3"  /></div>
        <p className="hero-description">
          Welcome to my portfolio. Here, artistry meets functionality. Dive into a
          curated showcase of distinctive branding and web designs, each crafted to
          captivate and inspire.
        </p>
      </div>
      </div>
    </header>
  );
};

export default Header;
