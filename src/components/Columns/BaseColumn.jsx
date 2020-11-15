import React, { useState, useEffect } from "react";
import { Currency } from "../Currency/Currency";
import "./Columns.scss";

export const BaseColumn = ({}) => {
  return (
    <div className="surface__column surface__column-base">
      <Currency baseStatus={true} />
    </div>
  );
};
