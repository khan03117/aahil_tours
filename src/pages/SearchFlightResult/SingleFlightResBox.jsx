// import React from 'react'
import food from '../../assets/fast-food.svg'
import vistara from '../../assets/vistara.png'
import seat from '../../assets/airplane-seat.svg'

const SingleFlightResBox = () => {
    return (
        <>
            <div className="w-full bg-white rounded-lg  p-5 my-3">
                <div className="w-full">
                    <div className="col-span-1">
                        <div className="w-full ">
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
                        <div className="w-full">
                            <p className='bg-yellow-50 inline-block border-l-2 border-yellow-800'>Use Promo Code: EMTSENIOR to get additional Rs.400 instant discount </p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="w-full bg-blue-gray-50">
                            <div className="w-full py-2 gap-3 flex">
                                <button className='text-primary'>Flight Detail</button>
                                <button className='rounded-full bg-yellow-50 border border-yellow-400 px-4 py-1 text-xs font-semibold'>Senior Citizens Fare</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleFlightResBox