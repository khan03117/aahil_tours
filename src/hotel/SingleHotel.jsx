//import React from 'react'

import { CheckCircleFilled,  StarFilled } from "@ant-design/icons"
import hotel from '../assets/hotel.jpg'

const SingleHotel = () => {
    return (
        <>
            <section className="bg-white py-2 px-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full py-4">
                                <p className="text-[#2196f3] text-sm">Home <span className="text-primary text-sm">  Hotels In THE ZURI WHITEFIELD, BANGALORE, BANGALORE, INDIA  </span></p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full bg-white rounded-lg p-5 flex justify-between">
                                <div>
                                    <div className="flex gap-4">
                                        <h1 className="text-lg font-bold">The Zuri Whitefield, Bangalore </h1>
                                        {
                                            [1, 2, 3, 4].map(() => (
                                                <>

                                                    <StarFilled className="text-yellow-800" />
                                                </>
                                            ))
                                        }
                                        <button className="border border-primary bg-white text-sm px-2 py-1 rounded-lg text-primary">hello</button>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">244, Hoody Village, Itpl Main Rd, Whitefield, Bengaluru, Karnataka 560048</p>
                                </div>
                                <div className="flex gap-1 items-center ">
                                    <div className="">
                                        <p className="text-black text-xs font-semibold">Excellent</p>
                                        <p className="text-gray-700 text-xs">1562 reviews</p>
                                    </div>
                                    <span className="size-8 bg-green-800 inline-block text-center leading-8 text-white rounded text-xs">4.5</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-6">
                            <div className="w-full h-full">
                                <img src={hotel} className="w-full h-full" alt="image" />
                            </div>

                        </div>
                        <div className="col-span-2">
                            <div className="w-full flex gap-2 flex-col">
                                <img src={hotel} alt="image" />
                                <img src={hotel} alt="image" />
                                <img src={hotel} alt="image" />
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        <div className="w-full">
                                            <h1 className="text-lg text-primary font-bold">Zuri Room with 01 King</h1>
                                            <h1 className="text-lg text-primary font-bold">Size Bed</h1>
                                            <p className="text-black text-sm">2 x Guest | 1 x Room</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 text-end">
                                        <h4 className="text-xl font-bold">$61950</h4>
                                        <p className="text-md text-black">+ $ 835 Taxes & fees</p>
                                        <p className="text-md text-gray-600">base price(Per Night)</p>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="w-full flex flex-wrap gap-2 mt-8">
                                            {
                                                ['Free wifi', 'Barbeeque', 'Utensils', 'Free wifi', 'Barbeeque', 'Utensils'].map((itm) => (
                                                    <>
                                                        <span className="text-xs pe-2  bg-primary/10 rounded">
                                                            <CheckCircleFilled className="text-sm text-green-500" />
                                                          <small className="ms-2">  {itm}</small>
                                                        </span>
                                                    </>
                                                ))
                                            }
                                        </div>
                                    </div>


                                    
                                    <div className="col-span-2">
                                        <div className="w-full flex mt-5 gap-4">
                                            <button className="border border-primary text-primary bg-white rounded-full px-5 py-2">SELECT ROOMS</button>
                                            <button className="border border-orange-800 text-white bg-orange-800 rounded-full px-8 py-2">BOOK NOW</button>
                                        </div>
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

export default SingleHotel