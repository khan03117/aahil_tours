// import React from 'react'
import PropTypes from 'prop-types';
import LabelSearch from './LabelSearch';
import { CloseOutlined } from '@ant-design/icons';
const DateField = ({ label, disabled, handletrip }) => {
  return (
    <>
      <div className="w-full bg-white h-full p-3 relative">
        <LabelSearch label={label} />
        <div className="w-full">
          {
            disabled && (
              <>
                <button onClick={() => handletrip(2)} className='absolute top-2 z-50 end-2 size-6 text-gray-600'>
                  <CloseOutlined />
                </button>
              </>
            )
          }
          <input type="date" disabled={disabled} className="w-full z-40 date-input absolute top-0 p-2 outline-none start-0 h-full bg-transparent" />
        </div>
      </div>
    </>
  )
}
DateField.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  handletrip: PropTypes.func
}

export default DateField