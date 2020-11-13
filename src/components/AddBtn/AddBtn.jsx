import React, { useState } from "react";
//Styles
import "./AddBtn.scss";
export const AddBtn = ({
  label,
  onClick,
  icon,
  iconEnabled,
  vertical,
  borderSide,
}) => {
  const click = (params) => {
    if (onClick) {
      onClick();
    }
  };

  const classNames = `add-button ${vertical ? "vertical" : ""}`;

  return (
    <button className={classNames} onClick={click}>
      {" "}
    </button>
  );
};
