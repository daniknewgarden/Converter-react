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

export const Header = () => {
  const dispatch = useDispatch();

  //Screen mode
  const fullscreen = useSelector((state) => state.fullscreen.fullscreen);
  const changeMode = (fullscreen) => {
    dispatch(applyFullscreen(fullscreen));
  };

  //Dark theme
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const changeTheme = (theme) => {
    dispatch(applyTheme(theme));
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
        <ControlBtn
          label={modeLabel}
          icon={fullscreen ? minimize : maximize}
          onClick={() => changeMode(!fullscreen)}
        />
      </div>
    </header>
  );
};
