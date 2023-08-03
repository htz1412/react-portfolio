import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

import { getScrollOptions } from "../services/service";

import { SECTION_SCROLL_DURATION } from "../constants/constants";
import img from "../../assets/perfil.png";

const Home = () => {
  const scrollOption = getScrollOptions();
  const CONTACT_SECTION_ID = "contact";

  return (
    <section id="home" className="section container">
      <Fade triggerOnce direction="up">
        <div className="home-data">
          <Fade cascade direction="up" damping={0.2} duration={SECTION_SCROLL_DURATION}>
            <span className="home-title">Hi, </span>
            <span className="home-title">
              I'm <span className="home-title-name">Harsh Gohel</span>
            </span>
            <span className="home-title"> Software Developer</span>
            <br />
            <Link
              to={CONTACT_SECTION_ID}
              spy={true}
              offset={scrollOption.offset}
              smooth={true}
              duration={scrollOption.duration}
            >
              <button className="primary">Contact Me</button>
            </Link>
          </Fade>
        </div>
        <div className="home-img">
          <svg
            className="home-blob"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              <image x="50" y="60" href={img} />
            </g>
          </svg>
        </div>
      </Fade>
    </section>
  );
};

export default Home;
