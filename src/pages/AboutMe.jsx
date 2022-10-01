import React, { useEffect } from "react";
import "./AboutMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import profile_pic from "../images/profile_pic.png";

function AboutMe() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="about-me">
      <div className="about-me">
        <div data-aos="flip-up" data-aos-duration="1300" class="aos-init aos-animate" className="photo">
          <img src={profile_pic} alt="Profile pic" class="center"></img>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" class="aos-init aos-animate" className="text">
          <h1>Hi! Nice to meet you.</h1>
        </div>

        <hr />
        <div className="container">
          <div className="container1">
            <div data-aos="fade-right" data-aos-duration="2900" class="aos-init aos-animate" className="about-me-profile">
              <h3>Profile</h3>
              <p>
                I am a recent graudate with a BSc in Computer Science from Bellevue College. Some of my hobbies include sports card and memorabilia collecting,
                fishing, woodworking, and cooking. I am currently looking for a software engineering position
                and if you believe I am a good fit, please contact me @{" "}
                <a href="mailto:s.colby.1280@gmail.com">s.colby.1280@gmail.com</a>
              </p>
              <ul className="info-list">
                <li>
                  <strong> Full Name: </strong>
                  <span> Colby Sawada</span>
                </li>
                <li>
                  <strong> Interests: </strong>
                  <li>Fishing, </li>
                  <li> Cooking, </li>
                  <li> Sports Card and Memorabilia Collecting</li>
                </li>
              </ul>
            </div>
          </div>

          <div className="container2">
            <div data-aos="fade-left" data-aos-duration="2900" class="aos-init aos-animate" className="about-me-profile2">
              <h3>Skills</h3>
              <ul className="skill-bars">
                <li>
                  <div className="progress percent90">
                    <span>90%</span>
                  </div>
                  <strong>Java</strong>
                </li>
                <li>
                  <div className="progress percent90">
                    <span>90%</span>
                  </div>
                  <strong>JS/React</strong>
                </li>
                <li>
                  <div class="progress percent70">
                    <span>70%</span>
                  </div>
                  <strong>Python</strong>
                </li>
                <li>
                  <div class="progress percent60">
                    <span>60%</span>
                  </div>
                  <strong>C#</strong>
                </li>
              </ul>

              <ul className="tech-list">
                <li>
                  <strong> Technologies: </strong>
                </li>
                <li>
                  <li>Git, </li>
                  <li> Amazon Web Services (AWS), </li>
                  <li> React, </li>
                  <li> NoSQL (MongoDB), </li>
                  <li> Sass, </li>
                  <li> Bootstrap</li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
