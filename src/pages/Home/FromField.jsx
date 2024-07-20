// import React from 'react'
import PropTypes from 'prop-types';
import LabelSearch from './LabelSearch';
const FromField = ({ label, handleopen, open, id }) => {
  return (
    <div onClick={() => handleopen(id, label)} className="w-full  p-3 cursor-pointer relative bg-white">
      <LabelSearch label={label} />
      <div className="w-full">
        <h4 className="text-xl font-bold">
          Delhi
        </h4>
        <p className="text-sm font-light">
          Indira gandhi international airport
        </p>
      </div>
      {
        ( label == open.type && id == open.id ) && (
          <>
            <div className="absolute w-full z-50 bg-white top-16 p-1 start-0 border border-blue-gray-200">
              <input type="text" placeholder='Search country' className="w-full p-2 text-sm outline-none border border-blue-gray-200" />
              <div className="w-full">
                <ul className='*:p-1 *:text-sm'>
                  <li>
                    <button className="w-full text-start">Delhi (Indira gandhi airport)</button>
                  </li>
                  <li>
                    <button className="w-full text-start">Delhi (Indira gandhi airport)</button>
                  </li>
                  <li>
                    <button className="w-full text-start">Delhi (Indira gandhi airport)</button>
                  </li>
                  <li>
                    <button className="w-full text-start">Delhi (Indira gandhi airport)</button>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )
      }

    </div>
  )
}
FromField.propTypes = {
  label: PropTypes.string.isRequired,
  handleopen: PropTypes.func,
  open: PropTypes.string,
  id : PropTypes.string
};


export default FromField