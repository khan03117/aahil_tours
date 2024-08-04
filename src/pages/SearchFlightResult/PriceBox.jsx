import { Radio } from '@material-tailwind/react'
// import React from 'react';
import PropTypes from 'prop-types';

const PriceBox = ({ name, plist, getFareRule, countPrice }) => {
    return (
        <>
            <div className="block">
                <div className="flex items-center">

                    <Radio name={name} key={plist.id} onClick={() => getFareRule(plist.id)} label={
                        <>
                            <p className='font-bold text-md text-red-600'>{countPrice(plist.id)}</p>
                            <div className="flex gap-2 flex-wrap items-center text-[12px]">
                                <span className="bg-yellow-200  px-1 py-[2px]">
                                    {plist.fareIdentifier}
                                </span>
                                <span>
                                    {plist.fd.ADULT.cc}
                                </span>
                                <span>
                                    {plist.fd.ADULT.mI ? 'Free Meal' : ''}
                                </span>
                                <span>
                                    {plist.fd.ADULT.rT ? 'Refundable' : 'Not Refundable'}
                                </span>
                            </div>
                        </>
                    } value={plist.id} />
                </div>
            </div>
        </>
    )
}
PriceBox.propTypes = {
    name: PropTypes.string.isRequired,
    plist: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        fareIdentifier: PropTypes.string.isRequired,
        fd: PropTypes.shape({
            ADULT: PropTypes.shape({
                cc: PropTypes.string.isRequired,
                mI: PropTypes.bool,
                rT: PropTypes.bool,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    getFareRule: PropTypes.func,
    countPrice: PropTypes.func,
};

export default PriceBox