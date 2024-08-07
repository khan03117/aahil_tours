import React from 'react'

import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons"
import { useLocation } from "react-router-dom"
import ServiceSelection from "../passengerDetails/ServiceSelection";
import AddDetails from "../passengerDetails/AddDetails";
import DeliveryInfo from '../passengerDetails/DeliveryInfo';
import GstDetails from '../passengerDetails/GstDetails';

const AddPassengerDetails = () => {
    const { state } = useLocation();
    const { reviews } = state;
    
    const [pinfo, setPinfo] = React.useState([]);
    const [smeals, setSmeals] = React.useState([]);
    const [deliveryInfo, setDeliveryInfo] = React.useState({email : [], contacts : []});
    const [gstDetails, setGstDetails] = React.useState({});

    const handlePinfo = (obj) => {
        setPinfo([...pinfo, obj]);
    }

    const totalPax = reviews.searchQuery.paxInfo;
    const conditions = reviews.conditions;

    const totalarray = Object.entries(totalPax).flatMap(([type, count]) =>
        Array(count).fill(type)
    );



    React.useEffect(() => {
        console.log([pinfo, smeals]);
    }, [pinfo, smeals]);
    return (
        <>
            <section className="py-5 bg-gray-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-9">
                            <div className="w-full border-r-2 border-gray-400 p-2">
                                <h1 className="text-xl">Passenger Details</h1>
                                <div className="w-full bg-white border border-gray p-2  rounded-md">
                                    {
                                        [...totalarray].map((a, index) => (
                                            <>
                                                {
                                                    pinfo.length >= index && (
                                                        <>
                                                            {
                                                                pinfo.length > index ? (<>
                                                                    <p className="text-black text-md border-b border-gray-400">{a} {index + 1} : </p>
                                                                    {
                                                                        Object.entries(pinfo[index]).map(([k, v]) => (
                                                                            <>
                                                                                <span key={k} className='me-2 text-sm'>
                                                                                    {v}
                                                                                </span>
                                                                            </>
                                                                        ))
                                                                    }
                                                                </>) : (<>
                                                                    <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                                                        <p className="text-black text-md border-b border-gray-400">{a} {index + 1} : </p>
                                                                        <div className="w-full bg-white py-3  px-2">
                                                                            <AddDetails conditions={conditions} id={index} show={index == pinfo.length ? true : false} onsubmit={handlePinfo} type={a} />
                                                                        </div>
                                                                    </div>
                                                                </>)
                                                            }
                                                        </>
                                                    )
                                                }

                                            </>
                                        ))
                                    }

                                    <ServiceSelection pinfo={pinfo} mealsave={setSmeals} routeInfos={reviews.searchQuery.routeInfos} paxInfo={reviews.searchQuery.paxInfo} tripInfos={reviews.tripInfos} />
                                    <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                        <p className="text-black text-md border-b border-gray-400">Select Seats (optional)</p>
                                        {
                                            conditions.isa ? (
                                                <>
                                                
                                        <div className="div flex justify-between py-3">
                                            <div className="text">
                                                <p className="text-black text-sm">Bangalore<ArrowRightOutlined />Mumbai</p>
                                                <p className="text-sm text-gray-400">on july 26 , 2024</p>
                                            </div>
                                            <button className="text-white bg-primary px-2 py-2 text-sm rounded-lg">Show Seat Map</button>
                                        </div>
                                        <div className="div flex justify-between py-3">
                                            <div className="text">
                                                <p className="text-black text-sm">Bangalore<ArrowRightOutlined />Mumbai</p>
                                                <p className="text-sm text-gray-400">on july 26 , 2024</p>
                                            </div>
                                            <button className="text-white bg-primary px-2 py-2 text-sm rounded-lg">Show Seat Map</button>
                                        </div>
                                        </>
                                            ) : (
                                                <>
                                                    <p className='text-yellow-900 text-sm py-3'>No seat map Available</p>
                                                </>
                                            )
                                        }
                                    </div>
                                    <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                        <p className="text-black text-md border-b border-gray-400">Contact Details</p>

                                        <DeliveryInfo setDeliveryInfo={setDeliveryInfo} />
                                    </div>
                                    <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                        <p className="text-black text-md border-b border-gray-400">GST Number for Bussiness Travel</p>
                                        <div className="w-full py-3 flex gap-4 items-center border-b border-gray-400 justify-between">
                                            <div className="div">
                                                <select id="select_box" name="select_box" className="border-b border-gary-700 text-sm outline-none w-full bg-transparent">
                                                    <option value="option1">Search from hiostry</option>
                                                </select>
                                            </div>
                                            <button className="text-primary text-xs font-semibold">CLEAR</button>
                                        </div>
                                        <div className="w-full bg-white py-3">
                                            <p className="text-gray-400 text-sm">to claim credit of GST charged by airlines. please enter your company GST number</p>
                                            <GstDetails setGstDetails={setGstDetails} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="w-full ">
                                <p className="text-gray-400 text-md  py-2">Fare Summary</p>
                                <table className="w-full table mb-5">
                                    <tbody className="*:text-sm">
                                        <tr className="border-b-2 border-gray-200">
                                            <td className="py-3">Base fare</td>
                                            <td className="text-end py-3">$5,568.00</td>
                                        </tr>
                                        <tr className="border-b-2 border-gray-200">
                                            <td className="py-3">Taxes and fees</td>
                                            <td className="text-end py-3">$1,437.00</td>
                                        </tr>
                                        <tr className="border-b-2 border-gray-200">
                                            <td className="py-3">Meal , Baggage & Seat</td>
                                            <td className="text-end py-3">$0.00</td>
                                        </tr>
                                        <tr className="border-b-2 border-gray-200">
                                            <td className="py-3">Amount to pay</td>
                                            <td className="text-end py-3">$7,005.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="w-full bg-gray-200 rounded-lg shadow-lg shadow-gray-400 py-5 px-2 flex items-center justify-between ">
                                    <div className="text flex gap-4">
                                        <p className="text-sm text-black">TJ Coins :</p>
                                        <p className="text-sm text-gray-600">Enter Coins</p>
                                        <CloseOutlined className="text-primary" />
                                    </div>
                                    <div className="button">
                                        <button className="bg-primary text-white text-xs   py-2 px-2 rounded-lg">REDEEM</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default AddPassengerDetails