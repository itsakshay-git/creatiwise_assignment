import "./navbar.css";
import Logo  from '../../assets/logo/creatiwise_logo.svg';
import { useState } from "react";

const Navbar = () => {

  const [activeIndex, setActiveIndex] = useState(null);

    const menuItems = [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" }
    ];

  return (
      <nav className="navbar">
        <div><img src={Logo} alt="logo" width="46" height="32"/></div>
        <div className="Menu">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`list-menu ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <a href={item.href} className="list-menu-btn">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <button className="hire-btn">HIRE ME</button>
      </nav>
  )
}

export default Navbar