import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.scss';
//Redux actions
import { applyTheme } from './redux/theme/themeActions';
import { applyFullscreen } from './redux/fullscreen/fullscreenActions';
import { applyDesktop, applyTablet, applyMobile } from './redux/device/deviceActions';
import { fetchRates } from "./redux/API/requestActions";

function App() {

  const dispatch = useDispatch();
  //Theme
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const changeTheme = (theme) => {
    dispatch(applyTheme(theme))
  }

  //Screen mode
  const fullscreen = useSelector(state => state.fullscreen.fullscreen);
  const changeMode = (fullscreen) => {
    dispatch(applyFullscreen(fullscreen))
  }

  //Device mode
  const mode = useSelector(state => state.mode.mode);
  const changeDeviceMode = (mode) => {
    switch (mode) {
      case 'mobile':
        dispatch(applyMobile(mode))
        break;
      case 'tablet':
        dispatch(applyTablet(mode))
        break;
      default:
        dispatch(applyDesktop(mode))
        break;
    }
  }

  //FIXME: API request don't working (see ./redux/API/)
  //Rates
  const ratesData = useSelector(state => state.ratesData.ratesData)
  const getData = () => {
    fetchRates();
  }

  return (
    <div className={`App ${darkTheme ? 'dark' : 'light'}`}>
      <h1>{fullscreen ? 'Fullscreen' : 'Minimized'}</h1>
      <h1>{`Device is ${mode}`}</h1>
      <button onClick={() => changeTheme(!darkTheme)}>Change theme</button>
      <button onClick={() => changeMode(!fullscreen)}>Change screen mode</button>
      <h2>Change device mode</h2>
      <button onClick={() => changeDeviceMode('mobile')}>Mobile</button>
      <button onClick={() => changeDeviceMode('tablet')}>Tablet</button>
      <button onClick={() => changeDeviceMode('default')}>Default</button>
      <button onClick={() => getData()}>Get data from API</button>
    </div>
  );
}

export default App;
