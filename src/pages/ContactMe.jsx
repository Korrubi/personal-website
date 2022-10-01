import React, { useEffect } from "react";
import AOS from "aos";
import "./ContactMe.css";
import "aos/dist/aos.css";

function ContactMe() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="contact">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        class="aos-init aos-animate"
        className="section-intro"
      >
        <h5>Contact</h5>
        <div className="contact-bar">
          <hr />
        </div>

        <h1>I'd love to connect with you.</h1>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        class="aos-init aos-animate"
        className="contact-info"
      >
        <div className="icon">
          <i class="fa-solid fa-envelope"></i>
        </div>

        <h5>Email Me @</h5>
        <p>
          <a href="mailto:s.colby.1280@gmail.com">s.colby.1280@gmail.com</a>
          <br />
        </p>

        <div className="icon">
          <i class="fa fa-linkedin"></i>
        </div>

        <h5>Let's Connect</h5>
        <p>
          <a href="https://www.linkedin.com/in/colby-sawada-3b5598193/" target="_blank">
            LinkedIn Profile
          </a>
        </p>
      </div>
    </section>
  );
}

export default ContactMe;
