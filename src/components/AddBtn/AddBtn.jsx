import React, { useState } from "react";
//Styles
import "./AddBtn.scss";
export const AddBtn = ({
  label,
  callback,
  icon,
  iconEnabled,
  vertical,
  borderSide,
}) => {
  const onClick = (params) => {
    if (callback) {
      callback();
    }
  };

  const classNames = `add-button ${vertical ? "vertical" : ""}`;

  return (
    <button className={classNames} onClick={onClick}>
      {" "}
    </button>
  );
};
