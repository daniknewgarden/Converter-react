import React, { useState, useEffect } from "react";
import { AddBtn } from "../AddBtn/AddBtn";
import { Currency } from "../Currency/Currency";
import "./Columns.scss";
//Mobile adaptation
import { isMobileOnly } from "react-device-detect";
//Animation
import { animated, useTransition } from "react-spring";

export const Column = () => {
  const [currencies, setCurrencies] = useState([1]);
  const [canRemove, setCanRemove] = useState(true);

  useEffect(() => {
    currencies.length < 2 ? setCanRemove(false) : setCanRemove(true);
    console.log(currencies);
  }, [currencies]);

  const addCurrency = () => {
    setCurrencies([...currencies, currencies.length + 1]);
  };

  const removeCurrency = (id) => {
    if (canRemove) {
      setCurrencies(currencies.filter((item) => item !== id));
    }
  };

  //Animation
  const transitions = useTransition(currencies, null, {
    config: { duration: 250 },
    from: { transform: "translate3d(0,-10px,0)" },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { height: 0, flexBasis: 0 },
  });

  return (
    <div className={`surface__column ${isMobileOnly ? "mobile" : ""}`}>
      {transitions.map(({ item, props }) => (
        <Currency
          style={props}
          key={item}
          remove={() => removeCurrency(item)}
          canRemove={canRemove}
          baseStatus={false}
        />
      ))}
      <AddBtn onClick={addCurrency} ariaLabel="Add currency" />
    </div>
  );
};
