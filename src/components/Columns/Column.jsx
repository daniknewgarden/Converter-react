import React, { useState, useEffect } from "react";
import { AddBtn } from "../AddBtn/AddBtn";
import { Currency } from "../Currency/Currency";
import "./Columns.scss";
//Mobile adaptation
import { isMobileOnly } from "react-device-detect";
//Animation
import { useTransition } from "react-spring";
//redux
import { useSelector } from "react-redux";

export const Column = ({ remove }) => {
  //Currencies options
  const [currencies, setCurrencies] = useState([Math.random()]);

  const [canRemove, setCanRemove] = useState(true);

  const columnsCount = useSelector((state) => state.columnsCount.count);

  useEffect(() => {
    if (currencies.length < 1) {
      remove();
    }
  }, [currencies]);

  //Column remove
  useEffect(() => {
    if (currencies.length < 2 && columnsCount < 2) {
      setCanRemove(false);
    } else {
      setCanRemove(true);
    }
  }, [currencies, columnsCount]);

  const addCurrency = () => {
    setCurrencies([...currencies, Math.random()]);
  };

  const removeCurrency = (id) => {
    if (canRemove) {
      setCurrencies(currencies.filter((item) => item !== id));
    }
  };

  //Animation
  const transitions = useTransition(currencies, null, {
    config: { duration: 250 },
    from: { opacity: 0, height: 0, flexBasis: 0 },
    enter: { opacity: 1, height: 96, flexBasis: 96 },
    leave: { opacity: 0, height: 0, flexBasis: 0 },
  });

  return (
    <div className={`surface__column ${isMobileOnly ? "mobile" : ""}`}>
      {transitions.map(({ item, props }) => (
        <Currency
          style={{ ...props }}
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
