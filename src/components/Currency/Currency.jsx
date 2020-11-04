import React, { useState, useEffect } from "react";
//Components
import { Dropdown } from "../Dropdown/Dropdown";
//Styles
import "./Currency.scss";

//TODO: remove me
let testArr = [
  { value: "EUR", name: "Euro", icon: "€" },
  { value: "RUB", name: "Russian Ruble", icon: "₽" },
  { value: "USD", name: "US Dollar", icon: "$" },
];

export const Currency = ({ array, icon, remove }) => {
  const [currency, setCurrency] = useState({});

  return (
    <section className="currency" tabIndex="0">
      <div className="currency__top-part">
        <Dropdown
          list={testArr}
          defaultOptionIndex={0}
          onChoose={(currency) => setCurrency(currency)}
        />
        <button className="currency__remove-btn"></button>
      </div>
      <div className="currency__bottom-part">
        <label name="currency" className="currency__icon">
          {currency.icon}
        </label>
        <input name="currency" type="number" className="currency__input" />
      </div>
    </section>
  );
};
