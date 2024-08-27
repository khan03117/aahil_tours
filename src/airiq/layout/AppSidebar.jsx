// import React from 'react'
import { CreditCardOutlined, HomeOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import AppLink from './AppLink'
import { MdBookOnline } from 'react-icons/md';
import { GrOfflineStorage } from 'react-icons/gr';
import { RiFlightTakeoffFill } from 'react-icons/ri';

const AppSidebar = () => {
  const links = [
    {
      title: "Dashboard",
      to: "/dashboard",
      icon : <HomeOutlined/>
    },
    {
      title: "Book Ticket Current",
      to: "/online-booking",
      icon : <MdBookOnline/>
    },
    {
      title: "Book Ticket Advance",
      to: "/offline-booking",
      icon : <GrOfflineStorage/>
    },
    {
      title: "Commission",
      to: "/commission",
      icon : <CreditCardOutlined/>
    },
    {
      title: "E-Tickets",
      to: "/bookings",
      icon : <RiFlightTakeoffFill/>
    },
    {
      title: "Settings",
      to: "/settings",
      icon : <SettingOutlined/>
    },
    {
      title : "Logout",
      to : "/logout",
      icon : <LogoutOutlined/>
    }
  ];
  return (
    <>
      <div className="sidebar">
        <ul className='*:pb-2'>
          {
            links.map((itm) => (
              <>
                <li className=''>
                  <AppLink icon={itm.icon} to={itm.to} title={itm.title} />
                </li>
              </>
            ))
          }

        </ul>
      </div>

    </>
  )
}

export default AppSidebar