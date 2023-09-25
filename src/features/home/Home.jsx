import { Link } from "react-scroll";
import { Container, Image, Stack } from "react-bootstrap";

import img from "../../assets/hero-img.jpg";
import githubIcon from "../../assets/icon-github.svg";
import linkedinIcon from "../../assets/icon-linkedin.svg";

import "./home.css";

const Home = () => {
  return (
    <Container id="home">
      <Stack className="column-gap-5 h-100" direction="horizontal">
        <div>
          <h1 className="fw-medium lh-base fw-semibold">
            Hi,
            <br />
            I'm <span className="highlight-text">Harsh Gohel</span>
            <br />
            Fullstack Developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem placeat
            eveniet, officia modi nemo consequatur blanditiis quae asperiores
            totam voluptas sed rerum officiis possimus vitae provident omnis
            accusamus at illo.
          </p>
          <Link to="contact">
            <button className="btn-primary">Contact Me</button>
          </Link>

          <Stack className="mt-5 column-gap-3" direction="horizontal">
            <a href="https://www.linkedin.com/in/harsh-gohel-5a4117149/">
              <Image src={linkedinIcon} className="social-icons" />
            </a>
            <a href="https://github.com/htz1412">
              <Image src={githubIcon} className="social-icons" />
            </a>
          </Stack>
        </div>
        <div className="d-none d-md-block hero-img-wrapper">
          <Image className="w-100" src={img} roundedCircle />
        </div>
      </Stack>
    </Container>
  );
};

export default Home;
