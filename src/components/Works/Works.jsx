import starIcon from '../../assets/logo/Star.svg';
import img1 from '../../assets/images/Analysis.webp';
import img2 from '../../assets/images/Fortknox.webp';
import img3 from '../../assets/images/Zenocide.webp';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import './works.css';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    image: img1,
    title: 'Analysis Application',
    tags: ['FIGMA', 'UX'],
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
  },
  {
    image: img2,
    title: 'Fortknox Application',
    tags: ['MOBILE', 'WEB'],
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
  },
  {
    image: img3,
    title: 'Zenocide Application',
    tags: ['APP', 'WEB'],
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
  },
];

const Works = () => {

   const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play reset play reset', // makes it animate every scroll
            scrub: false,
            once: false,
          },
        }
      );
    });
  }, []);


  return (
    <section id='projects' className="works-section">
      <div className="works-header">
        <h2>
          <img src={starIcon} alt="star" className="star-icon" /> Works
        </h2>
        <a href="#" className="view-all">
          View all
        </a>
      </div>

      <div className="works-grid">
        {works.map((work, index) => (
          <div
            className="work-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="work-image-container">
              <img
                src={work.image}
                alt={work.title}
                className="work-image"
              />
            </div>
            <div className="work-content">
              <div>
                <h3 className="work-title">{work.title}</h3>
                <p className="work-desc">{work.description}</p>
                <div className="work-tags">
                  {work.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="case-study-btn">View Case Study</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
