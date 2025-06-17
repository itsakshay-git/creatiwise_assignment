import './expertise.css';
import startIcon from "../../assets/logo/Star.svg";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const expertiseList = [
  {
    title: 'Branding',
    description:
      'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
  },
  {
    title: 'UI Design',
    description:
      'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
  },
  {
    title: 'UX Design',
    description:
      'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
  },
  {
    title: 'Development',
    description:
      'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
  },
];

const Expertise = () => {
  const sectionRef = useRef(null);

useEffect(() => {
  const items = gsap.utils.toArray('.expertise-item');

  items.forEach((item, i) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
          once: false,
        },
      }
    );
  });
}, []);

  return (
    <section id='about' className="expertise-section" ref={sectionRef}>
      <h2 className="expertise-title">
        <span className="expertise-icon"><img src={startIcon} alt="start_icon" /></span> Expertise
      </h2>

      <div className="expertise-grid">
        {expertiseList.map((item, i) => (
          <div className="expertise-item" key={i}>
            <h3 className="expertise-subtitle">
              <span className="dot">▪</span> {item.title}
            </h3>
            <p className="expertise-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
