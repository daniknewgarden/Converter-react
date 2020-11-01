import React, { useState } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { applyFullscreen } from "../../redux/fullscreen/fullscreenActions";
//Components
import { ControlBtn } from "../ControlBtn/ControlBtn";
//Styles
import "./Header.scss";
//Icons
import maximize from "../../icons/maximize.svg";
import minimize from "../../icons/minimize.svg";

export const Header = ({}) => {
  const dispatch = useDispatch();

  //Fullscreen button
  //Screen mode
  const fullscreen = useSelector((state) => state.fullscreen.fullscreen);
  const changeMode = (fullscreen) => {
    dispatch(applyFullscreen(fullscreen));
  };

  const btnLabel = fullscreen ? "Minimize" : "Fullscreen";

  return (
    <header className={`header`}>
      <a className="header__link" href="#">
        cr.fetbiko.ru
      </a>
      {fullscreen && <ControlBtn />}
      <ControlBtn
        label={btnLabel}
        icon={maximize}
        iconEnabled={minimize}
        onClick={() => changeMode(!fullscreen)}
      />
    </header>
  );
};
