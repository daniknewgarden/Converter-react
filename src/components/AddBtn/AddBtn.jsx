import React, { useState } from "react";
//Styles
import "./AddBtn.scss";
export const AddBtn = ({ onClick, vertical, borderSide, ariaLabel }) => {
  const click = (params) => {
    if (onClick) {
      onClick();
    }
  };

  const classNames = `add-button ${vertical ? "vertical" : ""}`;

  return (
    <button
      className={classNames}
      onClick={click}
      aria-label={ariaLabel ? ariaLabel : "No description"}
    ></button>
  );
};
