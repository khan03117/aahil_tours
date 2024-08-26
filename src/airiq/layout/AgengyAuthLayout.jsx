// import React from 'react'
import AppHeader from '../../layout/AppHeader'
import { Outlet } from 'react-router-dom'

const AgengyAuthLayout = () => {
    return (
        <>
            <AppHeader />
         
            <Outlet />
        </>
    )
}

export default AgengyAuthLayout