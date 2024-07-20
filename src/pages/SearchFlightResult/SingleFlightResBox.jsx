// import React from 'react'
import food from '../../assets/fast-food.svg'
import vistara from '../../assets/vistara.png'
import seat from '../../assets/airplane-seat.svg'
import { CloseOutlined } from '@ant-design/icons'
import FlightDetails from './FlightDetails'
import FareDetails from './FareDetails'
import BaggageInformation from './BaggageInformation'
import { useState } from 'react'

// import PropTypes from 'prop-types';

const SingleFlightResBox = () => {
    const [view, setView] = useState('');
    const [show, setShow] = useState(false);
    const viewDetails = (itm) => {
        setView(itm)
    }
    const handleshow = () => {
        setShow(!show);
        setView('Flight Details')

    }

    return (
        <>
            <div className="w-full bg-white rounded-lg  p-5 my-3 relative">
                <div className="w-full">
                    <div className="col-span-1">
                        <div className="w-full py-2">
                            <div className="w-full flex items-center gap-2 px-2">
                                <img src={food} alt='image' className='h-[20px]' />
                                <p className="text-black text-sm font-semibold">Enjoy Free Meals</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-cols-6">
                            <div className="col-span-1">
                                <div className="w-full flex gap-3 items-center">
                                    <div className='icon'>
                                        <img src={vistara} alt='image' />
                                    </div>
                                    <div className='text'>
                                        <p className='text-sm text-black font-light'>Vistara</p>
                                        <p className='text-sm text-gray-400 font-light'>UK-929</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="w-full">
                                    <p className='font-bold text-lg'>21:25</p>
                                    <p className='text-sm text-black font-light'>New Delhi</p>
                                </div>
                            </div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1">
                                <div className="w-full">
                                    <p className='font-bold text-lg'>06:15</p>
                                    <p className='text-sm text-black font-light'>Mumbai</p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="w-full">
                                    <p className='font-bold text-xl text-red-600'>$5,088</p>
                                    <button className='text-xs border border-primary px-3 py-1 rounded-full text-primary'>+ More Fare</button>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="w-full">
                                    <button className='font-bold text-md text-white bg-orange-800 px-4 py-1 rounded-full'>BOOK NOW</button>
                                    <div className="flex mt-2 gap-2">
                                        <div className='icon'>
                                            <img src={seat} alt='image'></img>
                                        </div>
                                        <div className="text">
                                            <p className='text-xs text-red-500 font-bold'>2 Seat Left</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="w-full py-2">
                            <button onClick={handleshow} className={`font-bold text-sm  hover:bg-primary hover:text-white px-4 py-1 rounded ${show ? "bg-primary text-white" : "text-black bg-gray-200"}`}>View Details </button>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="w-full py-2">
                            <p className='bg-yellow-50 inline-block border-l-2 border-yellow-800'>Use Promo Code: EMTSENIOR to get additional Rs.400 instant discount </p>
                        </div>
                    </div>

                </div>
                {
                    show && (
                        <>
                            <div className="relative w-full p-2 bg-gray-100 mt-3">
                                <div className="grid grid-cols-1">
                                    <div className="col-span-1">
                                        <div className=" grid grid-cols-1 justify-between">
                                            <div className="col-span-1">
                                                <div className="w-full flex border-b border-gray-400">
                                                    <div className="w-full">
                                                        {
                                                            ["Flight Details", "Fare Details", "Fare Rules", "Baggage Information"].map((itm) => (
                                                                <>
                                                                    <button onClick={() => viewDetails(itm)} className={`text-black text-sm font-bold px-4 py-2 ${view == itm ? "text-primary" : ""}`}>{itm}</button>
                                                                </>
                                                            ))
                                                        }
                                                    </div>
                                                    <button className="text-gray-700" onClick={handleshow}>
                                                        <CloseOutlined />
                                                    </button>
                                                </div>
                                            </div>
                                            {
                                                view == "Flight Details" && (
                                                    <>
                                                        <FlightDetails />
                                                    </>
                                                )
                                            }
                                            {
                                                view == "Fare Details" && (
                                                    <>
                                                        <FareDetails />
                                                    </>
                                                )
                                            }
                                            {
                                                view == "Baggage Information" && (
                                                    <>
                                                        <BaggageInformation />
                                                    </>
                                                )
                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}




export default SingleFlightResBox