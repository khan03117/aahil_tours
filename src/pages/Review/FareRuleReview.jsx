// import React from 'react';
import PropTypes from 'prop-types';

const FareRuleReview = ({ fareRules }) => {
    if (!fareRules) {
        <>
            <div className="w-full">
                <p>No Rule found for this flight</p>
            </div>
        </>
    }
    const { tfr} = fareRules;
    if (!tfr) {
        <>
            <div className="w-full">
                <p>No Rule TFR found for this flight</p>
            </div>
        </>
    }
    const renderTable = (title, policies) => (
        <div className="mb-4">
            <h5 className="text-md text-primary block font-semibold">{title}</h5>
            <table border={1} className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className='*:border *:border-blue-gray-800'>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Policy Info</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Policy Period</th>
                        {title !== 'No Show' && (
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Amount</th>
                        )}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {policies.map((policy, index) => (
                        <tr key={index} className='*:border *:border-blue-gray-800 *:text-xs' >
                            <td className="px-4 py-2">{policy.policyInfo}</td>
                            <td className="px-4 py-2 capitalize">{policy.pp ?? "NO Show"}</td>
                            {title !== 'No Show' && (
                                <td className="px-4 py-2">{policy.amount}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="p-6 bg-gray-100">
            { tfr && (
                    <div className="mb-4">
                        {tfr && (
                            <>
                                {tfr.NO_SHOW && renderTable('No Show', tfr.NO_SHOW)}
                                {tfr.CANCELLATION && renderTable('Cancellation', tfr.CANCELLATION)}
                                {tfr.DATECHANGE && renderTable('Date Change', tfr.DATECHANGE)}
                            </>
                        )}
                    </div>
                )}
        </div>
    );
};

FareRuleReview.propTypes = {
    fareRules: PropTypes.shape({
        fr: PropTypes.object,
        tfr: PropTypes.objectOf(
            PropTypes.arrayOf(
                PropTypes.shape({
                    policyInfo: PropTypes.string,
                    amount: PropTypes.number,
                    fcs: PropTypes.objectOf(PropTypes.number),
                    st: PropTypes.string,
                    et: PropTypes.string
                })
            )
        )
    })
};

export default FareRuleReview;
