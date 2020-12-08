import React, { useState, useEffect } from "react";
import { AddBtn } from "../AddBtn/AddBtn";
import { Currency } from "../Currency/Currency";
import "./Columns.scss";
//Mobile adaptation
import { isMobileOnly } from "react-device-detect";
//Animation
import { useTransition } from "react-spring";

export const Column = () => {
  //Currencies options
  const [currencies, setCurrencies] = useState([1]);
  //Simple react key
  let id = 1;
  const [canRemove, setCanRemove] = useState(true);

  useEffect(() => {
    currencies.length < 2 ? setCanRemove(false) : setCanRemove(true);
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
    config: { duration: 1000 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, height: 0, flexBasis: 0 },
  });

  return (
    <div className={`surface__column ${isMobileOnly ? "mobile" : ""}`}>
      {transitions.map(({ item, props }) => (
        <Currency
          style={props}
          key={id++}
          remove={() => removeCurrency(item)}
          canRemove={canRemove}
          baseStatus={false}
        />
      ))}
      <AddBtn onClick={addCurrency} ariaLabel="Add currency" />
    </div>
  );
};
