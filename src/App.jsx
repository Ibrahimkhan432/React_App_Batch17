import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterPage from './router/Router'
import { useSelector } from 'react-redux';

const App = () => {

  const themeBtn = useSelector((state) => state.theme.theme);
  return (
    <div className={themeBtn}>
  <BrowserRouter>
  <RouterPage/>
  </BrowserRouter>
    </div>
  )
}

export default App
