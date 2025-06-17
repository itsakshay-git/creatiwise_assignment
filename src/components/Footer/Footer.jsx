import React from "react";
import "./footer.css";
import star from "../../assets/logo/Star.svg";
import figma from "../../assets/logo/FIGMA.svg";
import designer from "../../assets/logo/DESIGNER.svg";
import { FiExternalLink } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-marquee">
        <div className="marquee-track">
          <div className="marquee-content">
            {Array(20)
              .fill(null)
              .map((_, i) => (
                <>
                  <img src={figma} alt="figma" />
                  <img src={star} alt="star" className="marquee-icon" />
                  <img src={designer} alt="designer" />
                  <img src={star} alt="star" className="marquee-icon" />
                  <img src={figma} alt="figma" />
                  <img src={star} alt="star" className="marquee-icon" />
                  <img src={designer} alt="designer" />
                  <img src={star} alt="star" className="marquee-icon" />
                </>
              ))}
          </div>
        </div>
      </div>

      <div className="main-footer">
        {/* CTA Section */}
        <div className="footer-cta">
          <h2 className="footer-title">LET’S TALK!</h2>
          <a href="mailto=rehanurraihan@gmail.com" className="footer-email">
            rehanurraihan@gmail.com <FiExternalLink className="external-icon" />
          </a>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <span className="footer-copy">© Rehan Raihan – 2023</span>
          <div className="footer-links">
            <a href="#">Dribbble</a>
            <a href="#">Behance</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
