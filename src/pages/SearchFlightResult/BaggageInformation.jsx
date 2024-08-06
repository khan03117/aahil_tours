//import React from 'react'
// import vistara from '../../assets/vistara.png'
import PropTypes from 'prop-types';
import FlightInfo from './FlightInfo';
const BaggageInformation = ({bI, code, name, fN}) => {
    return (
        <>
            <div className="col-span-1">
                <div className="w-full mt-5">
                    <table className="w-full *:text-sm *:text-left border border-gray-400">
                        <thead>
                            <tr>
                                <th>Airline</th>
                                <th>Check-in Baggage</th>
                                <th>Cabin Baggage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='*:py-1 *:text-md'>
                                <td className="">
                                <FlightInfo code={code} name={name} fN={fN} />
                                </td>
                                <td className="">{bI && bI.cB}</td>
                                <td className="">{bI && bI.iB}</td>
                            </tr>

                        </tbody>
                    </table>
                    <div className="w-full mt-5">
                        <ul className="*:text-sm *:text-black">
                            <li>Baggage information mentioned above is obtained from airlines reservation system, EaseMyTrip does not guarantee the accuracy of this information.</li>
                            <li>The baggage allowance may vary according to stop-overs, connecting flights. changes in airline rules. etc.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
BaggageInformation.propTypes = {
   
    bI: PropTypes.object,
    code: PropTypes.string,
    name : PropTypes.string,
    fN : PropTypes.string
}


export default BaggageInformation