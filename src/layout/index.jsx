import React from 'react'
import { Outlet } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import AppHeader from './AppHeader';
const Layout = () => {

  const setAppid = () => {
    const appid = uuidv4();
    const isApp = localStorage.getItem('appId');
    if (!isApp) {
      localStorage.setItem('appId', appid);
    }
  }
  React.useEffect(() => {
    setAppid();
  }, []);
  return (
    <>
      <AppHeader/>
      {<Outlet />}
    </>
  )
}

export default Layout