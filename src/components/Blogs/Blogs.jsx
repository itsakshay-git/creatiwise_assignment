import starIcon from '../../assets/logo/Star.svg';
import img1 from '../../assets/images/Analysis.webp';
import img2 from '../../assets/images/Fortknox.webp';
import img3 from '../../assets/images/Zenocide.webp';
import './blogslist.css';

const works = [
  {
    image: img1,
    date: 'Nov 9, 2023',
    title: 'How UX works in web',
    tags: ['UI', 'UX'],
  },
  {
    image: img2,
    date: 'Aug 18, 2023',
    title: 'Case study - Analysis Application.',
    tags: ['DESIGN', 'PRINT'],
  },
  {
    image: img3,
    date: 'Feb 16, 2023',
    title: 'UX Thinking in UI Strategy',
    tags: ['WEB', 'MOBILE'],
  },
];

const Blogs = () => {
  return (
    <section className="blogs-section">
      <div className="blogs-header">
        <h2><img src={starIcon} alt="star" className="star-icon" /> Blogs</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      <div className="blogs-items">
        {works.map((work, index) => (
          <div className="blogs-item" key={index}>
            <div className='img-container'>
            <img src={work.image} alt={work.title} className="blogs-img" />
            </div>
            <div className="blogs-info">
              <div className="blogs-date">{work.date}</div>
              <div className="blogs-title">{work.title}</div>
              <div className="blogs-tags">
                {work.tags.map((tag, i) => (
                  <span className="tag-pill" key={i}>{tag}</span>
                ))}
              </div>
            </div>
              <button className="read-btn">Read</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
