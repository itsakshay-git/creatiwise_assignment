import { useRef, useState, useEffect } from 'react';
import starIcon from '../../assets/logo/Star.svg';
import user1 from '../../assets/images/userProfile.svg';
import quote from '../../assets/logo/quote.svg';
import './testimonials.css';

const testimonials = [
  {
    name: 'Floyd Miles',
    company: 'eBay',
    image: user1,
    text: `Synergys resume builder is fantastic. It helped me create a professional resume that stood out to employers.`,
  },
  {
    name: 'Jenny Wilson',
    company: 'Google',
    image: user1,
    text: `Absolutely loved using Synergys! The design tools are sleek and easy to use. Highly recommended for job seekers.`,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef();

  const handleSlide = (direction) => {
    const container = containerRef.current;

    container.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    container.style.opacity = '0';
    container.style.transform = direction === 'next' ? 'translateX(-50px)' : 'translateX(50px)';

    setTimeout(() => {
      setIndex((prev) => {
        if (direction === 'next') return (prev + 1) % testimonials.length;
        return (prev - 1 + testimonials.length) % testimonials.length;
      });

      container.style.transition = 'none';
      container.style.transform = direction === 'next' ? 'translateX(50px)' : 'translateX(-50px)';

      requestAnimationFrame(() => {
        container.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        container.style.transform = 'translateX(0)';
        container.style.opacity = '1';
      });
    }, 500);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide('next');
    }, 2000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const { name, company, image, text } = testimonials[index];

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2><img src={starIcon} alt="star" className="star-icon" /> What they say</h2>
      </div>
      <div className="testimonial-content" ref={containerRef}>
        <div className="testimonial-left">
          <img src={image} alt={name} className="testimonial-img" />
          <div className='testimonial-container'>
            <div className="testimonial-name">{name}</div>
            <div className="testimonial-company">{company}</div>
          </div>
        </div>
        <div className="testimonial-right">
          <div className='quote-container'>
            <img src={quote} alt="quote" />
            <p className="testimonial-quote">{text}</p>
          </div>
        </div>
      </div>
      <div className="testimonial-nav">
        <button onClick={() => handleSlide('prev')} className="nav-btn">←</button>
        <button onClick={() => handleSlide('next')} className="nav-btn">→</button>
      </div>
    </section>
  );
};

export default Testimonials;
