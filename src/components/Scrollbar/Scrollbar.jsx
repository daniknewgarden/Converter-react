import React from "react";
//Scrollbar
import { Scrollbars } from "react-custom-scrollbars";

//Scrollbar line
const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: "rgb(81 81 88 / 0.3)",
    borderRadius: 100,
  };

  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

export const Scrollbar = (props) => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);
