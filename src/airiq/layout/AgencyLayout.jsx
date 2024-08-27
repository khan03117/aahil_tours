// import React from 'react'

import { Outlet } from "react-router-dom"
import useAuth from "../auth/useAuth"
import AppSidebar from "./AppSidebar";

const AgencyLayout = () => {
  useAuth();
  return (
    <>
      <section>
        <div className="w-full p-8 mb-3 bg-gray-300">
          
        </div>
        <div className="flex gap-3">
          <div className="w-[250px]">
           <div className="ps-3">
           <AppSidebar />
           </div>
          </div>
          <div className="w-[calc(100%-250px)]">            
           <div className="w-full pe-3">
           <Outlet />
           </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default AgencyLayout