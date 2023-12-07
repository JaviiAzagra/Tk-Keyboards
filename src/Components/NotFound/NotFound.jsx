import React from "react";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound__card">
        <div className="notfound__card--error">
          <h2>404 </h2>
          <h3>Not Found</h3>
        </div>
        <div className="notfound__card--text">
          <p>The resource requested could not be found on this server!</p>
          {/* <p>
            <span>Go back,</span> or head over to{" "}
            <Link to="/">mestrecabreta.com</Link> to choose a new direction.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
