import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.scss';
import { applyTheme } from './redux/theme/themeActions';

function App() {

  const dispatch = useDispatch();

  const darkTheme = useSelector((state) => state.theme.darkTheme);

  const changeTheme = (theme) => {
    dispatch(applyTheme(theme))
  }

  return (
    <div className={`App ${darkTheme ? 'dark' : 'light'}`}>
      <button onClick={() => changeTheme(!darkTheme)}>Test</button>
    </div>
  );
}

export default App;
