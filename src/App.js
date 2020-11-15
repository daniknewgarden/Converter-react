import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
//Redux actions
import { applyTheme } from "./redux/theme/themeActions";
import { applyFullscreen } from "./redux/fullscreen/fullscreenActions";
import {
  applyDesktop,
  applyTablet,
  applyMobile,
} from "./redux/device/deviceActions";
import { fetchRates } from "./redux/API/requestActions";
//Icons
import downIcon from "./icons/down.svg";
import upIcon from "./icons/up.svg";
//Components
import { ControlBtn } from "./components/ControlBtn/ControlBtn";
import { AddBtn } from "./components/AddBtn/AddBtn";
import { Header } from "./components/Header/Header";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Currency } from "./components/Currency/Currency";
import { BaseColumn } from "./components/Columns/BaseColumn";
import { Column, NormalColumn } from "./components/Columns/Column";

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

  //Device mode
  const mode = useSelector((state) => state.mode.mode);
  const changeDeviceMode = (mode) => {
    switch (mode) {
      case "mobile":
        dispatch(applyMobile(mode));
        break;
      case "tablet":
        dispatch(applyTablet(mode));
        break;
      default:
        dispatch(applyDesktop(mode));
        break;
    }
  };
  //Rates
  const ratesData = useSelector((state) => state.ratesData);

  const getData = () => {
    dispatch(fetchRates());
  };

  useEffect(() => {
    getData();
  }, []);

  //TODO: remove me
  let testArr = [
    { value: "EUR", name: "Euro", icon: "€" },
    { value: "RUB", name: "Russian Ruble", icon: "₽" },
    { value: "USD", name: "US Dollar", icon: "$" },
  ];

  return (
    <div className={`App ${darkTheme ? "dark" : "light"}`}>
      <section className="surface">
        <Header />
        <main className="content">
          <BaseColumn />
          <Column />
          <AddBtn />
        </main>
      </section>
    </div>
  );
}

export default App;
