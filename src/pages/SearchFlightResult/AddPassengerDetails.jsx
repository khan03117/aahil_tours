//import React from 'react'

import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons"

const AddPassengerDetails = () => {
    return (
        <>
            <section className="py-5 bg-gray-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-9">
                            <div className="w-full border-r-2 border-gray-400 p-2">
                                <h1 className="text-xl">Passenger Details</h1>
                                <div className="w-full bg-white border border-gray p-2 rounded-md">
                                    <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                        <p className="text-black text-md border-b border-gray-400">ADULT 1 : Mr AHIL SINGH</p>
                                        <div className="w-full py-3 flex gap-4 items-center border-b border-gray-400">
                                            <input type="text" placeholder="Select from History" className="px-1 py-2 rounded-md" />
                                            <p className="text-primary text-xs font-semibold">MISSING NAME FORMATE</p>
                                        </div>
                                        <div className="w-full bg-white py-3 flex justify-between">
                                            <div className="div">
                                                <label htmlFor="" className="block text-sm text-gray-400 w-full">Title</label>
                                                <select id="select_box" name="select_box" className="border-b border-gary-600 text-sm outline-none w-full">
                                                    <option value="option1">Mr</option>
                                                    <option value="option2">Ms</option>
                                                    <option value="option3">Mss</option>
                                                </select>
                                            </div>
                                            <div className="div">
                                                <label htmlFor="" className="block text-sm text-gray-400">First Name</label>
                                                <input type="text" className="border-b border-gary-600 text-sm outline-none w-full" />
                                            </div>
                                            <div className="div">
                                                <label htmlFor="" className="block text-sm text-gray-400">Last Name</label>
                                                <input type="text" className="border-b border-gary-600 text-sm outline-none w-full" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                        <p className="text-black text-md border-b border-gray-400">Add Baggage , Meal & other services to your Travel</p>
                                        <div className="w-full bg-white">
                                            <div className="w-full py-5">
                                                <p className="text-black text-sm">Bangalore<ArrowRightOutlined />Mumbai <span className="text-sm text-gray-400">on july 26 , 2024</span></p>
                                            </div>
                                            <div className="w-full flex justify-between py-3">
                                                <div>
                                                    <p className="text-black">ADULT 1</p>
                                                </div>
                                                <div className="div">
                                                    <label htmlFor="" className="block text-sm text-gray-400 w-full">Select Meal</label>
                                                    <select id="select_box" name="select_box" className="border-b border-gary-600 text-sm outline-none w-full">
                                                        <option value="option1">Veg Meal</option>
                                                        <option value="option2">Non veg Meal</option>

                                                    </select>
                                                </div>
                                                <div className="div">
                                                    <label htmlFor="" className="block text-sm text-gray-400 w-full">Select Extra Service</label>
                                                    <select id="select_box" name="select_box" className="border-b border-gary-600 text-sm outline-none w-full">
                                                        <option value="option1">Add Extra Service</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full bg-white">
                                            <div className="w-full py-5">
                                                <p className="text-black text-sm">Bangalore<ArrowRightOutlined />Mumbai <span className="text-sm text-gray-400">on july 26 , 2024</span></p>
                                            </div>
                                            <div className="w-full flex justify-between py-3">
                                                <div>
                                                    <p className="text-black">ADULT 1</p>
                                                </div>
                                                <div className="div">
                                                    <label htmlFor="" className="block text-sm text-gray-400 w-full">Select Meal</label>
                                                    <select id="select_box" name="select_box" className="border-b border-gary-600 text-sm outline-none w-full">
                                                        <option value="option1">Veg Meal</option>
                                                        <option value="option2">Non veg Meal</option>

                                                    </select>
                                                </div>
                                                <div className="div">
                                                    <label htmlFor="" className="block text-sm text-gray-400 w-full">Select Extra Service</label>
                                                    <select id="select_box" name="select_box" className="border-b border-gary-600 text-sm outline-none w-full">
                                                        <option value="option1">Add Extra Service</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                        <p className="text-black text-md border-b border-gray-400">Select Seats (optional)</p>
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
                                    </div>
                                    <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                        <p className="text-black text-md border-b border-gray-400">Contact Details</p>
                                        <div className="w-full bg-white flex justify-between py-5">
                                            <div className="div">
                                                <label htmlFor="" className="block text-sm text-gray-400 w-full">Country code</label>
                                                <select id="select_box" name="select_box" className="border-b border-gary-600 text-sm outline-none w-full">
                                                    <option value="option1">India (+91)</option>
                                                </select>
                                            </div>
                                            <div className="div">
                                                <label htmlFor="" className="block text-sm text-gray-400">Mobile Number</label>
                                                <input type="number" className="border-b border-gary-600 text-sm outline-none w-full" />
                                            </div>
                                            <div className="div">
                                                <label htmlFor="" className="block text-sm text-gray-400">Email ID</label>
                                                <input type="text" className="border-b border-gary-600 text-sm outline-none w-full" />
                                            </div>
                                        </div>
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
                                            <div className="flex">
                                                 <div>
                                                    <label htmlFor="" className="text-sm">Registration Number</label>
                                                    <input type="text" className="border-b border-gary-900 text-sm outline-none w-full"/>
                                                 </div>
                                                 <div>
                                                    <label htmlFor="" className="text-sm">Registered company name</label>
                                                    <input type="text" className="border-b border-gary-900 text-sm outline-none w-full"/>
                                                 </div>
                                                 <div>
                                                    <label htmlFor="" className="text-sm">Registered Email</label>
                                                    <input type="text" className="border-b border-gary-900 text-sm outline-none w-full"/>
                                                 </div>
                                                 <div>
                                                    <label htmlFor="" className="text-sm">Registered phone Number</label>
                                                    <input type="number" className="border-b border-gary-900 text-sm outline-none w-full"/>
                                                 </div>
                                            </div>
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