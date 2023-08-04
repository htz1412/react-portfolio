import { Fade } from "react-awesome-reveal";

import aboutImage from "../../assets/about.jpg";

import { SECTION_ANIMATION_DURATION } from "../constants/constants";

const About = () => {
  return (
    <section id="about" className="section container">
      <Fade fraction={0.5} direction="down">
        <h1 className="section-heading">About Me</h1>
      </Fade>
      <br />
      <div className="about-data">
        <Fade
          fraction={0.5}
          direction="left"
          duration={SECTION_ANIMATION_DURATION}
        >
          <img className="about-image" src={aboutImage} alt="" />
        </Fade>
        <div className="about-details">
          <h2 className="about-name">I'm Harsh</h2>
          <br />
          <ul className="about-summary">
            <Fade
              cascade
              damping={0.2}
              direction="up"
              duration={SECTION_ANIMATION_DURATION}
            >
              <li>
                Software Developer with 1 year of experience in React.js and
                ASP.NETCore Web API.
              </li>
              <li>
                Proven ability to develop userinterfaces, develop and maintain
                websites, and debug applications.
              </li>
              <li>
                Skilled in developing software solutions with React.js and
                ASP.NET Core Web API.
              </li>
              <li>
                Software Developer with 1 year of experience in React.js and
                ASP.NETCore Web API.
              </li>
              <li>
                Proven ability to develop userinterfaces, develop and maintain
                websites, and debug applications.
              </li>
              <li>
                Skilled in developing software solutions with React.js and
                ASP.NET Core Web API.
              </li>
            </Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
