import React, { useState } from "react";
//Styles
import "./ControlBtn.scss";

export const ControlBtn = ({
  label,
  active,
  icon,
  reversed,
  big,
  onClick,
  ariaLabel,
}) => {
  const [enabled, setEnabled] = useState(false);

  const styles = {
    backgroundImage: `url(${icon})`,
  };

  //onClick callback
  const toggleClick = () => {
    setEnabled(!enabled);

    if (onClick) {
      onClick();
    }
  };

  //Class names
  const classNames = `control-button ${reversed ? "reversed" : ""}
  ${icon ? "icon" : ""} ${big ? "big" : ""} ${active ? "active" : ""}`;

  return (
    <>
      <button
        className={classNames}
        style={styles}
        onClick={toggleClick}
        aria-label={ariaLabel}
      >
        {label}
      </button>
    </>
  );
};
