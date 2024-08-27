// import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const AppLink = ({to, title, icon}) => {
    return (
        <>
            <Link className='flex  py-3 px-2 rounded border bg-gray-100 shadow' to={to}>
              {icon} <span className="ms-2">{title}</span>     
            </Link>
        </>
    )
}
AppLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon : PropTypes.element
}
export default AppLink