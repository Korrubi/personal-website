import React, { useEffect } from "react";
import "./Homepage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Shibuya from "../images/Shibuya_clip.mov";
import Osaka from "../images/Osaka_clip.mov";

function Homepage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <header id="home">
      <div id="homepage">
        <div data-aos="fade-down" data-aos-duration="3000" class="aos-init aos-animate" className="homepage-title">
          <h1>
            <span>Colby Sawada</span>
          </h1>
          <h3>
            <span>// Software Engineer //</span>
          </h3>
          <h3>
            <span>Background pc: Mammoth Lakes, CA by Colby Sawada</span>
          </h3>
          <hr />
        </div>
        <ul data-aos="fade-right" data-aos-duration="1500" class="aos-init aos-animate" className="social">
          <li>
            <a href="https://www.linkedin.com/in/colby-sawada-3b5598193/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Korrubi">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/CSawada12">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="mailto:s.colby.1280@gmail.com">
              <i class="fa-solid fa-envelope-open-text"></i>
            </a>
          </li>
        </ul>
        {/* <div className="video-container">
          <video src={Shibuya} autoplay="" muted loop type="video/mp4"></video>
          <img src={Mammoth1}></img>
        </div> */}
      </div>
    </header>
  );
}

export default Homepage;
