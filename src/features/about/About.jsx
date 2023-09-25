import { Container, Image, Stack } from "react-bootstrap";
import about from "../../assets/about.svg";
import WorkShowcaseContainer from "./WorkDetailsWrapper";
import PersonalDetailsWrapper from "./PersonalDetailsWrapper";

const About = () => {
  const EXP_IN_YEARS = "1+";
  const PROJECTS_COMPLETED = "15+";

  return (
    <Container id="about">
      <h2 className="fw-semibold text-center">About</h2>
      <Stack direction="horizontal">
        <div className="w-100">
          <Image className="w-100" src={about} />
        </div>
        <div className="h-100 ns-5" />
        <div className="w-100">
          <Stack className="justify-content-between" direction="horizontal">
            <WorkShowcaseContainer
              text={EXP_IN_YEARS}
              leadText="Years of Experience"
            />
            <WorkShowcaseContainer
              text={PROJECTS_COMPLETED}
              leadText="Projects Completed"
            />
          </Stack>
          <br />
          <br />
          <h4 className="fw-semibold">I'm Harsh</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            voluptatum, debitis facere quae reprehenderit doloremque aspernatur
            molestias eligendi doloribus laborum aliquam consequatur dolorum et
            architecto tenetur blanditiis rerum voluptate ipsum.
          </p>
          <br />
          <Stack direction="horizontal" className="justify-content-between">
            <PersonalDetailsWrapper heading="Name" text="Harsh Gohel" />
            <PersonalDetailsWrapper
              heading="Email"
              text="harsh22gohel@gmail.com"
            />
          </Stack>
        </div>
      </Stack>
    </Container>
  );
};

export default About;
