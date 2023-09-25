import PropTypes from "prop-types";

import "./about.css"

const WorkDetailsWrapper = (props) => {
  return (
    <div className="work-details text-center">
      <h2 className="fw-semibold">{props.text}</h2>
      <p className="fw-medium m-0">{props.leadText}</p>
    </div>
  );
};

WorkDetailsWrapper.propTypes = {
  text: PropTypes.string.isRequired,
  leadText: PropTypes.string.isRequired,
};

export default WorkDetailsWrapper;
