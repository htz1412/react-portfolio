import { Link } from "react-scroll";
import "../styles/navbar.css";
import { Fade } from "react-awesome-reveal";

const NavBar = () => {
  const navLinks = ["Home", "About", "Skills", "Contact"];

  return (
    <nav className="navbar container">
      <Fade triggerOnce direction="down" duration={800}>
        <Link to="home" spy={true} smooth={true} duration={500}>
          Harsh
        </Link>
      </Fade>
      <ul className="nav-links">
        <Fade direction="down" duration={800} triggerOnce>
          {navLinks.map((navLink) => (
            <li key={navLink} className="nav-link">
              <Link
                to={navLink.toLowerCase()}
                spy={true}
                offset={-1}
                smooth={true}
                duration={500}
              >
                {navLink}
              </Link>
            </li>
          ))}
        </Fade>
      </ul>
    </nav>
  );
};

export default NavBar;
