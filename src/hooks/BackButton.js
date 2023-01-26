import React from "react";
import btnStyles from "../styles/Button.module.css"
import { useHistory } from "react-router-dom";

export const BackButton = () => {
    let history = useHistory();
    return (
      <>
        <button className={`{btnStyles.Button} ${btnStyles.Blue}`} onClick={() => history.goBack()}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
        </button>
      </>
    );
  };
