import { Link } from "react-scroll";
import { Container, Nav, Navbar } from "react-bootstrap";

import { LOGO_NAME } from "./../shared/constants/constants";
import { getNavLinks, getScrollOptions } from "../shared/services/service";

import "./navbar.css";

const NavBar = () => {
  const navLinks = getNavLinks();
  const scrollOption = getScrollOptions();

  return (
    <Navbar expand="lg" fixed="top" id="navbar">
      <Container>
        <Navbar.Brand className="fw-medium">
          <Link to="home">{LOGO_NAME}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className="me-auto column-gap-3">
            {navLinks.map((navLink) => (
              <Link
                to={navLink.toLowerCase()}
                spy={true}
                smooth={true}
                duration={scrollOption.duration}
                className="nav-link"
                key={navLink}
              >
                {navLink}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
