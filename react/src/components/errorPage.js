import { NavLink } from "react-router-dom";
import "./errorPage.css";

function ErrorPage() {
  return (
    <div className="error-container">
      <NavLink className="error-link" to="/home">
        <div className="sry">SORRY</div>
        <div className="sry2">we couldn't find that page</div>
        <div className="sry3">Try searching or go to Amasport page.</div>
      </NavLink>
      <div>
        <img
          src="https://m.media-amazon.com/images/I/81vkislowDL._AC_SS450_.jpg"
          alt="dog"
        ></img>
      </div>
    </div>
  );
}

export default ErrorPage;
