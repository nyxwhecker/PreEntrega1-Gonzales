import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>Not Found</h1>
      <Link to="/home" className="option">
        Come home
      </Link>
    </div>
  );
};

export default NotFound;
