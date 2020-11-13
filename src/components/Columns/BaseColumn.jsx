import React, { useState, useEffect } from "react";
import { Currency } from "../Currency/Currency";

export const BaseColumn = ({}) => {
  return (
    <div className="content__column column-base">
      <Currency />
    </div>
  );
};
