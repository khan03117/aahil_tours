import React from 'react';
import PropTypes from 'prop-types';
import defaultRule from './text.json';

const FareRule = ({ rule = defaultRule }) => {
  
    const fareRules = rule.fareRule;
    const [selectedRoute, setSelectedRoute] = React.useState(typeof fareRules == 'object' ? Object.keys(fareRules)[0] : []);
    if(!rule){
        return "No policy Found";
    }
    if (!fareRules || Object.keys(fareRules).length === 0) {
        return <div>No fare rule data available</div>;
    }

    const handleRouteClick = (route) => {
        setSelectedRoute(route);
    };

    const renderTable = (title, policies) => (
        <div className="mb-4">
            <h5 className="text-md text-primary block font-semibold">{title}</h5>
            <table border={1} className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className='*:border *:border-blue-gray-800'>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Policy Info</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Policy Period</th>
                        {title !== 'No Show' && (
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Amount</th>
                        )}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {policies.map((policy, index) => (
                        <tr key={index} className='*:border *:border-blue-gray-800 *:text-sm' >
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

    const renderRouteDetails = (route) => {
        const fareRule = fareRules[route];
        const { isML, isHB, rT, cB, hB, fr, tfr } = fareRule;

        return (
            <div className="mb-8">
                <div className="mb-4">
                    <h4 className="text-sm font-semibold">General Information</h4>
                    {
                        isML && (
                            <>
                               <p className='text-sm '><strong>Is Multi-Leg:</strong> {isML ? 'Yes' : 'No'}</p>
                            </>
                        )
                    }
                 
                    <p  className='text-sm'><strong>Is Hand Baggage Only:</strong> {isHB ? 'Yes' : 'No'}</p>
                    <p  className='text-sm'><strong>Refund Type:</strong> {rT}</p>
                </div>

                {cB && (
                    <div className="mb-4">
                        <h4 className="text-sm text-primary  block font-semibold">Checked Baggage</h4>
                        {Object.entries(cB).map(([key, value]) => (
                            <p  className='text-sm ' key={key}><strong>{key}:</strong> {value}</p>
                        ))}
                    </div>
                )}

                {hB && (
                    <div className="mb-4">
                        <h4 className="text-sm block text-primary font-semibold">Hand Baggage</h4>
                        {Object.entries(hB).map(([key, value]) => (
                            <p  className='text-sm ' key={key}><strong>{key}:</strong> {value}</p>
                        ))}
                    </div>
                )}

                {(fr || tfr) && (
                    <div className="mb-4">
                        <h4 className="text-sm block text-primary font-semibold">Fare Rules</h4>

                        {fr && (
                            <>
                                {fr.CANCELLATION && renderTable('Cancellation', [fr.CANCELLATION.DEFAULT])}
                                {fr.DATECHANGE && renderTable('Date Change', [fr.DATECHANGE.DEFAULT])}
                            </>
                        )}

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

    return (
        <div className="w-full p-4 border rounded shadow">
            <h2 className="text-lg font-bold mb-4">Fare Rule Details</h2>
            <div className="mb-4">
                {Object.keys(fareRules).map(route => (
                    <button
                        key={route}
                        onClick={() => handleRouteClick(route)}
                        className={`mr-2 p-2 border rounded ${route === selectedRoute ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                    >
                        {route}
                    </button>
                ))}
            </div>
            {renderRouteDetails(selectedRoute)}
        </div>
    );
};

FareRule.propTypes = {
    rule: PropTypes.object,
};

export default FareRule;
