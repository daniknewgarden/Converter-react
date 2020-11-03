import React, { useState, useEffect } from "react";
//Styles
import "./ControlBtn.scss";

export const ControlBtn = ({
  label,
  active,
  icon,
  iconEnabled,
  reversed,
  big,
  onClick,
}) => {
  const [enabled, setEnabled] = useState(false);
  const [background, setBackground] = useState(icon);

  const styles = {
    backgroundImage: `url(${background})`,
  };

  //Dynamic icon change
  useEffect(() => {
    if (enabled && iconEnabled) {
      setBackground(iconEnabled);
    } else {
      setBackground(icon);
    }
  }, [enabled, icon, iconEnabled]);

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
      <button className={classNames} style={styles} onClick={toggleClick}>
        {label}
      </button>
    </>
  );
};
