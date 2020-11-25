import React, { useState, useRef, useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { updateBaseValue } from "../../redux/baseValue/baseValueActions";
//Components
import { Dropdown } from "../Dropdown/Dropdown";
//Styles
import "./Currency.scss";
//Mobile adaptation
import { isMobile } from "react-device-detect";

//FIXME: remove me
let testArr = [
  { value: "EUR", name: "Euro", icon: "€", rate: 1 },
  { value: "RUB", name: "Russian Ruble", icon: "₽", rate: 90.56 },
  { value: "USD", name: "US Dollar", icon: "$", rate: 1.18 },
];

export const Currency = ({ baseStatus, canRemove, remove }) => {
  const dispatch = useDispatch();

  const baseValue = useSelector((state) => state.baseValue.value);

  const [currency, setCurrency] = useState({});
  const [value, setValue] = useState(1);

  useEffect(() => {
    const num = baseStatus ? baseValue : baseValue * currency.rate;

    setValue(Math.round(num * 100) / 100);
  }, [baseValue, currency]);

  //Input focus
  const inputRef = useRef();

  const updateBase = (event) => {
    const num = baseStatus
      ? event.target.value
      : event.target.value / currency.rate;
    dispatch(updateBaseValue(num));
  };

  const focusElem = (ref) => {
    ref.current.focus();
  };

  return (
    <section
      className={`currency ${baseStatus ? "currency-base" : ""} ${
        isMobile ? "currency-mobile" : ""
      }`}
      tabIndex="0"
      onKeyDown={(e) => {
        if (
          (e.currentTarget === e.target && e.key === "Enter") ||
          (e.currentTarget === e.target && e.key === "Enter" && e.key === " ")
        ) {
          focusElem(inputRef);
        }
      }}
    >
      <div className="currency__top-part">
        <Dropdown
          list={testArr}
          defaultOptionIndex={0}
          onChoose={(currency) => setCurrency(currency)}
        />
        {canRemove && (
          <button className="currency__remove-btn" onClick={remove}></button>
        )}
      </div>
      <div
        className="currency__bottom-part"
        onClick={() => focusElem(inputRef)}
      >
        <label name="currency" className="currency__icon">
          {currency.icon}
        </label>
        {value && (
          <input
            name="currency"
            type="number"
            min="1"
            className="currency__input"
            ref={inputRef}
            value={value}
            onChange={(event) => updateBase(event)}
          />
        )}
      </div>
    </section>
  );
};
