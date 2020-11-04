import React, { useState, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
//Components
import { ControlBtn } from "../ControlBtn/ControlBtn";
//Styles
import "./Dropdown.scss";
//Icons
import down from "../../icons/down.svg";
import up from "../../icons/up.svg";

//TODO: remove me
let testArr = [
  { value: "EUR", name: "Euro", icon: "€" },
  { value: "RUB", name: "Russian Ruble", icon: "₽" },
  { value: "USD", name: "US Dollar", icon: "$" },
];

//Dropdown component
export const Dropdown = ({ list = testArr }) => {
  const [opened, setOpened] = useState(false);

  //Open function
  const toggleOpened = () => {
    setOpened(!opened);
  };

  //Click outside (when menu opened)
  const menuRef = useRef();
  useClickOutside(menuRef, toggleOpened);

  //Choose option
  const chooseOption = () => {
    toggleOpened();
  };

  //Dropdown options items
  const options = list.map((item, index) => {
    return (
      <li className="list-item" key={index}>
        <button className="list-item__button" onClick={() => chooseOption()}>
          <span className="list-item__name">{item.name}</span>
          <span>
            <span className="list-item__value">{item.value}</span>
            <span className="list-item__icon">{item.icon}</span>
          </span>
        </button>
      </li>
    );
  });

  return (
    <section className="dropdown">
      <ControlBtn
        label="Hello"
        icon={opened ? up : down}
        reversed={true}
        big={true}
        onClick={toggleOpened}
        active={opened}
      />
      {opened && (
        <div className="dropdown__menu" ref={menuRef}>
          <input
            type="search"
            className="dropdown__menu-search"
            placeholder="Type for search..."
          />
          <ul className="dropdown__list">{options}</ul>
        </div>
      )}
    </section>
  );
};
