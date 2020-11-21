import React from "react";
import { Currency } from "../Currency/Currency";
import "./Columns.scss";

export const BaseColumn = ({ fullscreen }) => {
  const classNames = `surface__column surface__column-base ${
    fullscreen ? "fullscreen" : ""
  }`;

  return (
    <div className={classNames}>
      <Currency baseStatus={true} />
    </div>
  );
};
