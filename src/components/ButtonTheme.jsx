import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice/themeslice';

const ButtonTheme = () => {
  const themeBtn = useSelector((state) => state.theme.theme);
  
  const dispatch = useDispatch();
  const handleThemeToggle = () => {

    dispatch(toggleTheme());
  };

  return (
    <div className={themeBtn}>
      <button className={`theme-switcher-btn ${themeBtn ? 'dark' : 'light'}`} onClick={handleThemeToggle}>
        <span className="button-icon">{themeBtn ? "dark btn" :"light btn"}</span>
      </button>
    </div>
  );
};

export default ButtonTheme;
