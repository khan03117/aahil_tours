// import React from 'react'
import { BASE_URL } from '../../Utils'
import PropTypes from 'prop-types';

const FlightInfo = ({code, name, fN}) => {
    return (
        <>
            <div className="w-full flex gap-3 items-center">
                <div className='icon'>
                    <img className='size-8' src={BASE_URL + 'logos/' + code + '.png'} alt='image' />
                </div>
                <div className='text'>
                    <p className='text-sm text-black font-light'>{name}</p>
                    <p className='text-sm text-gray-400 font-light'>{code}-{fN}</p>
                </div>
            </div>
        </>
    )
}

FlightInfo.propTypes = {
   
    code: PropTypes.string,
    name : PropTypes.string,
    fN : PropTypes.string
}

export default FlightInfo