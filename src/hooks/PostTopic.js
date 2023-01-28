import React from "react";
import btnStyles from "../styles/Button.module.css";
import { Link } from "react-router-dom";

export const postTopic = () => {
  return (
    <>
      <Link to="/topics/create">
        <button className={`{btnStyles.Button} ${btnStyles.Blue}`}>
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Create A
          Topic Post
        </button>
      </Link>
    </>
  );
};
