import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/buttons.scss";

export const BackButton = (props) => {
  let navigate = useNavigate();
  return (
    <div style={{ marginLeft: "60px", marginTop: "50px" }}>
      <button
        type="button"
        className="btn back_button"
        onClick={() => navigate(props.path)}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "20px" }} />
        Zurück
      </button>
    </div>
  );
};

export const Button = (props) => {
  return (
    <Link
      to={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="readMoreButton shadow"
    >
      {props.text}
    </Link>
  );
};
