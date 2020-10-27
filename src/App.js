import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.scss';
//Redux actions
import { applyTheme } from './redux/theme/themeActions';
import { applyFullscreen } from './redux/fullscreen/fullscreenActions'

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


  console.log(fullscreen)

  return (
    <div className={`App ${darkTheme ? 'dark' : 'light'}`}>
      <h1>{fullscreen ? 'Fullscreen' : 'Minimized'}</h1>
      <button onClick={() => changeTheme(!darkTheme)}>Change theme</button>
      <button onClick={() => changeMode(!fullscreen)}>Change screen mode</button>
    </div>
  );
}

export default App;
