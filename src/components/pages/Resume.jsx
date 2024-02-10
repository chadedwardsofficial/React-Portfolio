// Link to my resume along with list of my skills
// Make it detail oriented and list of what you can do
import React from "react";
import "../../styles/resume.css";
import resume from "C:\\Users\\wtfch\\onedrive\\desktop\\homework-module-19\\React-Portfolio\\src\\assets\\Chad Edwards Resume 2024.pdf";

const Resume = () => {
  return (
    <div className="resumeContainer">
      <div className="resume">
        <section className="experience">
          <h2>Experience</h2>
          <div className="job">
            <h3>FreeLance Web Dev.</h3>

            <p className="date">October 2023- Present</p>
            <ul>
              <li>
                Developed and maintained frontend and backend systems for
                various web applications.
              </li>
              <li>
                Consulted with clients on their web application for better
                performance.
              </li>
              <li>
                Implemented responsive design and optimized performance for
                mobile devices.
              </li>
            </ul>
          </div>
          <div className="job">
            <h3>Server/Trainer</h3>
            <h5>Ocean Prime Co.</h5>

            <p className="date">May 2022- Present</p>
            <ul>
              <li>
                Provided exceptional customer service in a fine dining setting.
              </li>
              <li>
                Mastered intricate menus and effectively communicated menu
                details to patrons
              </li>
              <li>
                Developed strong communication and interpersonal skills while
                collaborating with customers and team members.
              </li>
            </ul>
          </div>
          <div className="job">
            <h3>Substitute Teacher</h3>
            <h5>ESS Co.</h5>

            <p className="date">January 2021- March 2022</p>
            <ul>
              <li>
                Fostered a positive and inclusive learning environment by
                effectively managing student behavior and encouraging active
                participation.
              </li>
              <li>
                Adapted teaching strategies to accommodate diverse learning
                styles and individual student needs.
              </li>
              <li>
                Communicated clearly and promptly with school staff, including
                administrators and fellow teachers, to ensure a smooth
                transition during temporary assignments.
              </li>
            </ul>
          </div>
        </section>
        <div className="downloadSec">
          <a
            href={resume}
            className="btn btn-primary"
            download="Chad Edwards Resume 2024.pdf"
          >
            Download Resume
          </a>
        </div>

        <section className="education">
          <h2>Education</h2>
          <div className="degree">
            <h3>Bachelor of Integrative Studies</h3>
            <p className="university">University of North Texas</p>
            <p className="date">Graduated May 2020</p>
          </div>
          <div className="degree">
            <h3>Bachelor of Japanese Studies</h3>
            <p className="university">University of North Texas</p>
            <p className="date">Graduated May 2020</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
