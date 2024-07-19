// import React from 'react'
import PropTypes from 'prop-types';
import LabelSearch from './LabelSearch';
const FromField = ({ label }) => {
  return (
    <div className="w-full p-3 cursor-pointer bg-white">
      <LabelSearch label={label} />
      <div className="w-full">
        <h4 className="text-xl font-bold">
          Delhi
        </h4>
        <p className="text-sm font-light">
          Indira gandhi international airport
        </p>
      </div>
    </div>
  )
}
FromField.propTypes = {
  label: PropTypes.string.isRequired,
};


export default FromField