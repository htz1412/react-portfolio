import { Fade } from "react-awesome-reveal";

import { SECTION_SCROLL_DURATION } from "../constants/constants";

const Contact = () => {
  return (
    <section id="contact" className="section demo-section">
      <Fade direction="down" duration={SECTION_SCROLL_DURATION}>
        <h1>Contact</h1>
      </Fade>
    </section>
  );
};

export default Contact;
