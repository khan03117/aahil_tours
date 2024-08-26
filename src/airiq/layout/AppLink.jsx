// import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const AppLink = ({to, title}) => {
    return (
        <>
            <Link to={to}>{title}</Link>
        </>
    )
}
AppLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
export default AppLink