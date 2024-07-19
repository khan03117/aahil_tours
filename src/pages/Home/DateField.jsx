// import React from 'react'
import PropTypes from 'prop-types';
import LabelSearch from './LabelSearch';
const DateField = ({ label }) => {
  return (
    <>
      <div className="w-full bg-white h-full p-3 relative">
        <LabelSearch label={label} />
        <div className="w-full">
          <input type="date" className="w-full z-40 date-input absolute top-0 p-2 outline-none start-0 h-full bg-transparent" />
        </div>
      </div>
    </>
  )
}
DateField.propTypes = {
  label: PropTypes.string
}

export default DateField