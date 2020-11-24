import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
//Redux actions
import { applyTheme } from "./redux/theme/themeActions";
import { applyFullscreen } from "./redux/fullscreen/fullscreenActions";
import { fetchRates } from "./redux/API/requestActions";
//Icons
import downIcon from "./icons/down.svg";
import upIcon from "./icons/up.svg";
//Components
import { Scrollbar } from "./components/Scrollbar/Scrollbar";
import { ControlBtn } from "./components/ControlBtn/ControlBtn";
import { AddBtn } from "./components/AddBtn/AddBtn";
import { Header } from "./components/Header/Header";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Currency } from "./components/Currency/Currency";
import { BaseColumn } from "./components/Columns/BaseColumn";
import { Column, NormalColumn } from "./components/Columns/Column";
//Mobile adaptation
import { isMobileOnly, isBrowser, isTablet } from "react-device-detect";

function App() {
  const dispatch = useDispatch();
  //Theme
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const changeTheme = (theme) => {
    dispatch(applyTheme(theme));
  };

  //Screen mode
  const fullscreen = useSelector((state) => state.fullscreen.fullscreen);
  const changeMode = (fullscreen) => {
    dispatch(applyFullscreen(fullscreen));
  };

  //Rates
  const ratesData = useSelector((state) => state.ratesData);

  const getData = (base) => {
    dispatch(fetchRates(base));
  };

  useEffect(() => {
    getData("EUR");
  }, []);

  //TODO: remove me
  let testArr = [
    { value: "EUR", name: "Euro", icon: "€" },
    { value: "RUB", name: "Russian Ruble", icon: "₽" },
    { value: "USD", name: "US Dollar", icon: "$" },
  ];

  //Normal columns
  const [columns, setColumns] = useState(["1"]);

  const addColumn = () => {
    setColumns([...columns, columns.length + 1]);
  };

  useEffect(() => {
    console.log(columns);
  }, [columns]);

  useEffect(() => {
    if (isMobileOnly) {
      changeMode(true);
    }
  }, []);

  //Column mode
  const twoColumn = useSelector((state) => state.twoColumn.twoColumn);

  return (
    <Scrollbar>
      <div
        className={`App ${darkTheme ? "dark" : "light"} ${
          fullscreen ? "fullscreen" : ""
        }`}
      >
        <section
          className={`surface ${fullscreen ? "fullscreen" : ""} ${
            isMobileOnly ? "mobile" : ""
          }`}
        >
          <Header fullscreen={fullscreen} />
          <main
            className={`content ${isMobileOnly ? "mobile" : ""} ${
              twoColumn ? "two-column" : ""
            }`}
          >
            <BaseColumn fullscreen={fullscreen} />
            {columns.map((value) => {
              return <Column key={value} fullscreen={fullscreen} />;
            })}
            {(isBrowser || isTablet) && <AddBtn onClick={addColumn} />}
          </main>
        </section>
      </div>
    </Scrollbar>
  );
}

export default App;
