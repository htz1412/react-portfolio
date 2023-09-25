import { Stack } from "react-bootstrap";
import PropTypes from "prop-types";

const PersonalDetailsWrapper = (props) => {
  return (
    <Stack direction="vertical" className="flex-grow-0">
      <h6 className="fw-semibold">{props.heading}</h6>
      <p>{props.text}</p>
    </Stack>
  );
};

PersonalDetailsWrapper.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PersonalDetailsWrapper;
