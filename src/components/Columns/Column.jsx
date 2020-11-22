import React, { useState, useEffect } from "react";
import { AddBtn } from "../AddBtn/AddBtn";
import { Currency } from "../Currency/Currency";
import "./Columns.scss";

export const Column = () => {
  const [currencies, setCurrencies] = useState(["1", "2"]);
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

  return (
    <div className="surface__column">
      {currencies.map((value) => {
        return (
          <Currency
            key={value}
            remove={() => removeCurrency(value)}
            canRemove={canRemove}
            baseStatus={false}
          />
        );
      })}
      <AddBtn onClick={addCurrency} />
    </div>
  );
};
