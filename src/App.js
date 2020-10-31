import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.scss';
//Redux actions
import { applyTheme } from './redux/theme/themeActions';
import { applyFullscreen } from './redux/fullscreen/fullscreenActions';
import { applyDesktop, applyTablet, applyMobile } from './redux/device/deviceActions';
import { fetchRates } from "./redux/API/requestActions";
import { ControlBtn } from './components/ControlBtn/ControlBtn';
//Icons
import downIcon from './icons/down.svg';
import upIcon from './icons/up.svg';
import { AddBtn } from './components/AddBtn/AddBtn';

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
  const ratesData = useSelector(state => state.ratesData)
  const getData = () => {
    dispatch(fetchRates());
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className={`App ${darkTheme ? 'dark' : 'light'}`}>
      <div className='fragment'>
          <h2>Control button</h2>
          <ControlBtn label='Default' icon={downIcon} iconEnabled={upIcon} reversed={true} />
      </div>
      <div className='fragment'>
          <h2>Add button</h2>
          <AddBtn label='Default' icon={downIcon}/>
      </div>
    </div>
  );
}

export default App;
