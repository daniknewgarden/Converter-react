import React from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { applyFullscreen } from "../../redux/fullscreen/fullscreenActions";
import { applyTheme } from "../../redux/theme/themeActions";
//Components
import { ControlBtn } from "../ControlBtn/ControlBtn";
//Styles
import "./Header.scss";
//Icons
import maximize from "../../icons/maximize.svg";
import minimize from "../../icons/minimize.svg";
import down from "../../icons/down.svg";
import up from "../../icons/up.svg";
import oneColumn from "../../icons/columns-one.svg";
import twoColumn from "../../icons/columns-two.svg";
//Mobile adaptation
import { isMobileOnly, isBrowser, isTablet } from "react-device-detect";

export const Header = ({ fullscreen }) => {
  const dispatch = useDispatch();

  //Screen mode (fullscreen)
  const changeMode = (fullscreen) => {
    dispatch(applyFullscreen(fullscreen));
  };

  //Dark theme
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const changeTheme = (theme) => {
    //Smooth theme switching
    document.body.classList.add("theme-switch");
    dispatch(applyTheme(theme));
    setTimeout(() => {
      document.body.classList.remove("theme-switch");
    }, 500);
  };

  //Control buttons labels
  const modeLabel = fullscreen ? "Minimize" : "Fullscreen";
  const themeLabel = darkTheme ? "Dark Theme" : "Light Theme";

  return (
    <header className={`header ${fullscreen ? "fullscreen" : ""}`}>
      <p className="header__link" href="">
        cr.fetbiko.ru
      </p>
      <div className="header__controls">
        {fullscreen && (
          <ControlBtn
            label={themeLabel}
            icon={darkTheme ? down : up}
            reversed={true}
            onClick={() => changeTheme(!darkTheme)}
          />
        )}
        {(isBrowser || isTablet) && (
          <ControlBtn
            label={modeLabel}
            icon={fullscreen ? minimize : maximize}
            onClick={() => changeMode(!fullscreen)}
          />
        )}
        {isMobileOnly && (
          <ControlBtn
            label={modeLabel}
            icon={fullscreen ? oneColumn : twoColumn}
          />
        )}
      </div>
    </header>
  );
};
