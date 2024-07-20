//import React from 'react'

import { ArrowRightOutlined } from "@ant-design/icons"
import vistara from '../../assets/vistara.png'
import alarm from '../../assets/alarm-clock.png'

const FlightDetails = () => {
    return (
      <>
            <div className="col-span-1">
                <div className="w-full">
                    <div className="w-full">
                        <span className="text-xs">DEL <ArrowRightOutlined /> BOM</span>
                        <div className="col-span-1">
                            <div className="grid grid-cols-4">
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
                                        <p className='text-sm text-black font-light'>Sat-20Jul2024</p>
                                        <p className='text-sm text-black font-light'>Terminal - 2
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className="w-full">
                                       <img src={alarm} alt="image" className="h-[30px]"/>
                                       <span className="text-sm text-black font-light">02h 10m</span>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className="w-full">
                                        <p className='font-bold text-lg'>06:15</p>
                                        <p className='text-sm text-black font-light'>Mumbai</p>
                                        <p className='text-sm text-black font-light'>Sat-20Jul2024</p>
                                        <p className='text-sm text-black font-light'>Terminal - 2</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </>
            )
}

            export default FlightDetails