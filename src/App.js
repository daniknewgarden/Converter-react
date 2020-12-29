import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
//Redux actions
import { applyTheme } from "./redux/theme/themeActions";
import { applyFullscreen } from "./redux/fullscreen/fullscreenActions";
import { setColumnCount } from "./redux/column/columnCount/columnCountActions";
//Components
import { Scrollbar } from "./components/Scrollbar/Scrollbar";
import { AddBtn } from "./components/AddBtn/AddBtn";
import { Header } from "./components/Header/Header";
import { BaseColumn } from "./components/Columns/BaseColumn";
import { Column } from "./components/Columns/Column";
//Mobile adaptation
import { isMobileOnly, isBrowser, isTablet } from "react-device-detect";
//Animations
import { animated, useSpring, config } from "react-spring";
import { useHeight } from "./hooks/useHeight";

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

  //TODO: remove me
  let testArr = [
    { value: "EUR", name: "Euro", icon: "€" },
    { value: "RUB", name: "Russian Ruble", icon: "₽" },
    { value: "USD", name: "US Dollar", icon: "$" },
  ];

  //Normal columns options
  const [columns, setColumns] = useState([Math.random()]);
  //Column remove
  const [canRemove, setCanRemove] = useState(false);

  useEffect(() => {
    dispatch(setColumnCount(columns.length));
  }, [columns.length]);

  const addColumn = () => {
    setColumns([...columns, Math.random()]);
  };

  const removeColumn = (id) => {
    setColumns(columns.filter((item) => item !== id));
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

  //ANim
  const [heightRef, height] = useHeight();

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
            ref={heightRef}
          >
            <BaseColumn fullscreen={fullscreen} />
            {columns.map((item) => {
              return (
                <Column
                  key={item}
                  fullscreen={fullscreen}
                  remove={() => removeColumn(item)}
                />
              );
            })}
            {(isBrowser || isTablet) && (
              <AddBtn onClick={addColumn} ariaLabel="Add column" />
            )}
          </main>
        </section>
      </div>
    </Scrollbar>
  );
}

export default App;
