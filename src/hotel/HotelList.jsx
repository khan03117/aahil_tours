import { CheckOutlined, EyeOutlined, LoginOutlined, StarFilled } from '@ant-design/icons'
// import React from 'react'
import hotel from '../assets/hotel.jpg'

const HotelList = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <div className="w-full">
                    <img src={hotel} alt="image" className='rounded-lg'/>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-full">
                        <div className="flex">
                            <h1 className="text-sm font-bold"> The Zuri Whitefield, Bangalore</h1>
                            {
                                [1, 2, 3].map(() => (
                                    <>

                                        <StarFilled className="text-yellow-800" />
                                    </>
                                ))
                            }
                        </div>
                        <p className="text-sm text-gray-400">Whitefield</p>
                        <p className="text-xs font-bold text-gray-600">Free Wi Fi</p>
                        <p className="text-xs font-bold text-green-700"><CheckOutlined />Free Breakfast</p>
                        <p className="text-xs font-bold text-orange-800"><EyeOutlined /> 28 people viewing</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-full text-end">

                        <div className="flex justify-end gap-1 items-center ">
                            <div className="">
                                <p className="text-black text-xs font-semibold">Excellent</p>
                                <p className="text-gray-700 text-xs">1562 reviews</p>
                            </div>
                            <span className="size-8 bg-green-800 inline-block text-center leading-8 text-white rounded text-xs">4.5</span>
                        </div>


                        <h4 className="text-black font-bold text-lg">$6150</h4>
                        <p className="text-black text-xs">+ 835 Taxes & fees</p>
                        <p className="text-gray-400 text-xs mb-4">Per Night</p>
                        <button className="bg-orange-900 text-white rounded-full px-4 py-1 text-sm">View Room</button>
                        <p className="text-primary text-sm mt-2"><LoginOutlined />Login & <span className="font-bold">Save more</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelList