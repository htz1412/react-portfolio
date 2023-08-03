import { Fade } from "react-awesome-reveal";

import { SECTION_SCROLL_DURATION } from "../constants/constants";

const About = () => {
  return (
    <section id="about" className="section container">
      <Fade direction="down" duration={SECTION_SCROLL_DURATION}>
        <h1 className="section-heading">About</h1>
      </Fade>
    </section>
  );
};

export default About;
