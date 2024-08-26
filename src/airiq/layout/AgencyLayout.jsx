// import React from 'react'

import { Outlet } from "react-router-dom"
import AppHeader from "../../layout/AppHeader"
import useAuth from "../auth/useAuth"
import AppSidebar from "./AppSidebar";

const AgencyLayout = () => {
  useAuth();
  return (
    <>
      <AppHeader />
      <section>
        <div className="flex">
          <div className="w-[200px]">
            <AppSidebar/>
          </div>
          <div className="w-[calc(100%-200px)]">
          <Outlet />
          </div>
        </div>
      </section>
    
    </>
  )
}

export default AgencyLayout