import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { getNavLinks, getScrollOptions } from "../services/service";

const NavBar = () => {
  const navLinks = getNavLinks();
  const scrollOption = getScrollOptions();

  return (
    <nav className="navbar container">
      <Fade triggerOnce direction="down" duration={800}>
        <Link
          className="nav-logo"
          to="home"
          spy={true}
          smooth={true}
          duration={scrollOption.duration}
        >
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
                offset={scrollOption.offset}
                smooth={true}
                duration={scrollOption.duration}
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
