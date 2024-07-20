//import React from 'react'

const FareDetails = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-4">
                    <div className="w-full">
                        <table className="w-full border border-gray-400 *:text-sm mt-5">
                            <tbody>
                                <tr className="border border-gray-400">
                                    <td className="py-1">1 x Adult</td>
                                    <td className="text-end py-1">$ 4840</td>
                                </tr>
                                <tr className="border border-gray-400">
                                    <td className="py-1">Total (Base Fare)</td>
                                    <td className="text-end py-1">$ 4840</td>
                                </tr>
                                <tr className="border border-gray-400">
                                    <td className="py-1">Total Tax</td>
                                    <td className="text-end py-1">$ 735</td>
                                </tr>
                                <tr className="border border-gray-400">
                                    <td className="py-1">Total (Fee & Surcharge)</td>
                                    <td className="text-end py-1">$ 5575</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="w-full border border-gray-400 mt-5 p-4">
                        <div className="w-full flex justify-between items-center">
                            <p className="text-sm text-black">Fare Rules</p>
                            <button className="border border-primary text-primary rounded-full px-3 py-1 text-sm">Refundable</button>
                        </div>
                        <div className="w-full">
                            <table className="w-full *:text-left *:text-sm border border-gray-400 mt-4">
                                <thead>
                                    <tr className="border border-gray-400">
                                        <th className="py-1">Time Frame to cancel</th>
                                        <th className="py-1">Airline Fees</th>
                                        <th className="py-1">EMT Fees</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-400">
                                        <td className="py-1">Cancel Before 72 hours of departure time.</td>
                                        <td className="py-1">$ 2250</td>
                                        <td className="py-1">$ 300</td>
                                    </tr>
                                    <tr className="border border-gray-400">
                                        <td className="py-1">Cancel within 72 hours & before 4 hours of departure time.</td>
                                        <td className="py-1">$ 2999 </td>
                                        <td className="py-1">$ 300</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full">
                        <table className="w-full *:text-left *:text-sm border border-gray-400 mt-4">
                                <thead>
                                    <tr className="border border-gray-400">
                                        <th className="py-1">Time Frame to cancel</th>
                                        <th className="py-1">Airline Fees</th>
                                        <th className="py-1">EMT Fees</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-400">
                                        <td className="py-1">Cancel Before 72 hours of departure time.</td>
                                        <td className="py-1">$ 2250</td>
                                        <td className="py-1">$ 300</td>
                                    </tr>
                                    <tr className="border border-gray-400">
                                        <td className="py-1">Cancel within 72 hours & before 4 hours of departure time.</td>
                                        <td className="py-1">$ 2999 </td>
                                        <td className="py-1">$ 300</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full mt-5">
                            <h1 className="text-black text-sm font-bold">Terms and Condition</h1>
                            <ul className="*:text-sm *:text-black">
                                <li>Total Rescheduling Charges Airlines Rescheduling fees Fare Difference if applicable + EMT Fees.</li>
                                <li>The airline cancel reschedule fees is indicative and can be changed without any prior notice by the airlines..</li>
                                <li>EaseMyTrip does not guarantee the accuracy of cancel reschedule fees.</li>
                                <li>Partial cancellation is not allowed on the flight tickets which are book under special round trip discounted fares.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FareDetails