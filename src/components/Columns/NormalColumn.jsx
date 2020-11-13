import React, { useState, useEffect } from "react";
import { AddBtn } from "../AddBtn/AddBtn";
import { Currency } from "../Currency/Currency";

export const NormalColumn = ({}) => {
  const [currencies, setCurrencies] = useState(["1", "2"]);
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

  return (
    <div className="content__column column-base">
      {currencies.map((value, index) => {
        return (
          <Currency
            key={value}
            remove={() => removeCurrency(value)}
            canRemove={canRemove}
          />
        );
      })}
      <AddBtn onClick={addCurrency} />
    </div>
  );
};
