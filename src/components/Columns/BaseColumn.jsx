import React from "react";
import { Currency } from "../Currency/Currency";
import "./Columns.scss";
//Mobile adaptation
import { isMobileOnly } from "react-device-detect";

export const BaseColumn = ({ fullscreen }) => {
  const classNames = `surface__column surface__column-base ${
    fullscreen ? "fullscreen" : ""
  } ${isMobileOnly ? "mobile" : ""}`;

  return (
    <div className={classNames}>
      <Currency baseStatus={true} />
    </div>
  );
};
