// FareDetailsTable.jsx
// import React from 'react';
import PropTypes from 'prop-types';

const FareDetailsTable = ({ passengerCount, totalPriceList }) => {
    if (totalPriceList.length === 0) {
        return <div>No fare details available</div>;
    }

    const { fd: fareDetails } = totalPriceList[0];

    const passengerTypes = [
        { type: 'ADULT', label: 'Adult' },
        { type: 'CHILD', label: 'Child' },
        { type: 'INFANT', label: 'Infant' },
    ];

    const rows = passengerTypes.map(({ type, label }) => {
        const count = passengerCount[type] || 0;
        const fare = fareDetails[type]?.fC.TF || 0;
        return (
            count > 0 && (
                <tr key={type} className='*:p-2 *:text-sm *:border *:border-blue-gray-200 *:text-start'>
                    <td>{count} x {label}</td>
                    <td>₹ {fare * count}</td>
                </tr>
            )
        );
    });

    const totalBaseFare = passengerTypes.reduce((total, { type }) => {
        const count = passengerCount[type] || 0;
        const fare = fareDetails[type]?.fC.TF || 0;
        return total + (fare * count);
    }, 0);

    return (
        <table border="1" cellPadding="10" cellSpacing="0" className='w-full text-start'>
            <thead>
                <tr className='*:p-2 *:text-sm *:border *:border-blue-gray-200 *:text-start'>
                    <th>Passenger Type</th>
                    <th>Fare</th>
                </tr>
            </thead>
            <tbody>
                {rows}
                <tr className='*:p-2 *:text-sm *:border *:border-blue-gray-200 *:text-start'>
                    <td>Total (Base Fare)</td>
                    <td>₹ {totalBaseFare}</td>
                </tr>
            </tbody>
        </table>
    );
};

FareDetailsTable.propTypes = {
    passengerCount: PropTypes.shape({
        ADULT: PropTypes.number.isRequired,
        CHILD: PropTypes.number,
        INFANT: PropTypes.number,
    }).isRequired,
    totalPriceList: PropTypes.arrayOf(
        PropTypes.shape({
            fd: PropTypes.shape({
                ADULT: PropTypes.shape({
                    fC: PropTypes.shape({
                        TF: PropTypes.number.isRequired,
                    }).isRequired,
                }).isRequired,
                CHILD: PropTypes.shape({
                    fC: PropTypes.shape({
                        TF: PropTypes.number.isRequired,
                    }),
                }),
                INFANT: PropTypes.shape({
                    fC: PropTypes.shape({
                        TF: PropTypes.number.isRequired,
                    }),
                }),
            }).isRequired,
        }).isRequired
    ).isRequired,
};

export default FareDetailsTable;
