import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SawadaResume from "../images/SawadaResume.pdf";
import "./Resume.css";
import JAVA from "../images/java.png";
import CSHARP from "../images/csharplogo.png";
import HTML from "../images/html_csslogo.png";
import JS from "../images/jslogo.png";
import PYTHON from "../images/python.png";
import AWS from "../images/awslogo.png";
import REACT from "../images/react.png";
import GIT from "../images/git.png";

function Resume() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="Resume">
      <div className="information">
        <div data-aos="fade-down" data-aos-duration="1500" class="aos-init aos-animate" className="names">
          <h1>Colby</h1>
          <h1>Sawada</h1>
          <h2>Fullstack Software Engineer</h2>

          <div className="download">
            <a href={SawadaResume} download>
              Download Resume
            </a>
          </div>
        </div>
        <hr />
      </div>
      <div id="rectangle">
        <div className="titles">
          <h2 data-aos="fade-right" data-aos-duration="1500" class="aos-init aos-animate" className="intro">
            Introduction
            <h3 data-aos="fade-right" data-aos-duration="1500" class="aos-init aos-animate" className="intro-info">
              <p>Diligent and proficient software engineering new grad that has<br />
                exceptional communication and team building skills with a <br />strong will to grow and learn in
                a professional setting. <br />I have strong knowledge in Java, C#, Python, JavaScript, SQL,
                NoSQL, HTML, and CSS <br />and can quickly adapt to a new language or technology.</p>
            </h3>
          </h2>
          <h2 data-aos="fade-right" data-aos-duration="1500" class="aos-init aos-animate" className="edu">
            Education
            <h3 data-aos="fade-right" data-aos-duration="1500" class="aos-init aos-animate" className="edu-info">
              <p>Bachelor of Science, Computer Science<br />
                Bellevue College<br />
                Honors: Cum Laude (GPA: 3.64/4.0)<br />
                June 2022</p>
            </h3>
          </h2>
          {/* <h2 data-aos="fade-right" data-aos-duration="500" class="aos-init aos-animate" className="projects">
            Projects + Experience
            <h3 data-aos="fade-right" data-aos-duration="500" class="aos-init aos-animate" className="project-info">


            </h3>
          </h2> */}
          <h2
            data-aos="fade-right"
            data-aos-duration="1500"
            class="aos-init aos-animate"
            className="langs">
            Languages and Technologies
            <h3
              data-aos="fade-left"
              data-aos-duration="1500"
              class="aos-init aos-animate"
              className="lang-info">
              <div className="tech-logos">
                <div data-aos="fade-up" data-aos-duration="1500" class="aos-init aos-animate">
                  <img src={JAVA} height="150" role="img" focusable="false" /><title>Java Logo</title>
                  <p class="card-text">Java</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" class="aos-init aos-animate">
                  <img src={CSHARP} height="150" role="img" focusable="false" /><title>C# Logo</title>
                  <p class="card-text">C#</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" class="aos-init aos-animate">
                  <img src={PYTHON} height="150" role="img" focusable="false" /><title>Python Logo</title>
                  <p class="card-text">Python</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" class="aos-init aos-animate">
                  <img src={JS} height="150" role="img" focusable="false" /><title>JS Logo</title>
                  <p class="card-text">JavaScript</p>
                </div>
              </div>

              <div className="tech-logos-bottom">
                <div data-aos="fade-up" data-aos-duration="1500" class="aos-init aos-animate">
                  <img src={REACT} height="100" role="img" focusable="false" /><title>React Logo</title>
                  <p class="card-text">React</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" class="aos-init aos-animate">
                  <img src={AWS} height="100" role="img" focusable="false" /><title>AWS Logo</title>
                  <p class="card-text">AWS</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" class="aos-init aos-animate">
                  <img src={GIT} height="100" role="img" focusable="false" /><title>Git Logo</title>
                  <p class="card-text">Git</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" class="aos-init aos-animate">
                  <img src={HTML} height="100" role="img" focusable="false" /><title>HTML/CSS Logo</title>
                  <p class="card-text">HTML/CSS</p>
                </div>
              </div>
            </h3>
          </h2>
          <h2 data-aos="fade-right" data-aos-duration="1500" class="aos-init aos-animate" className="certs">
            Certifications

            <h3 data-aos="fade-right" data-aos-duration="1500" class="aos-init aos-animate" className="edu-info">
              <p>
                <a href="https://www.credly.com/badges/83de1a47-df53-48a7-8747-ef4ef745f57d?source=linked_in_profile" target="_blank">
                  AWS Certified Cloud Practitioner
                </a>
              </p>
            </h3>
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Resume;
