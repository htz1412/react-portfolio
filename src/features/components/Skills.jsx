import { Fade } from "react-awesome-reveal";

import { SECTION_ANIMATION_DURATION } from "../constants/constants";

const Skills = () => {
  return (
    <section id="skills" className="section demo-section">
      <Fade direction="down" duration={SECTION_ANIMATION_DURATION}>
        <h1>Skills</h1>
      </Fade>
    </section>
  );
};

export default Skills;
