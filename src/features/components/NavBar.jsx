import { Link } from "react-scroll";
import "../styles/navbar.css";

const NavBar = () => {
  const navLinks = ["Home", "About", "Skills", "Contact"];

  return (
    <nav className="navbar container">
      <Link to="home" spy={true} smooth={true} duration={500}>
        Harsh
      </Link>
      <ul className="nav-links">
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
      </ul>
    </nav>
  );
};

export default NavBar;
