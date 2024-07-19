// import React from 'react'


import { useState } from "react"
import DateField from "./DateField"
import FromField from "./FromField"
import LabelSearch from "./LabelSearch"

const Home = () => {
    const[quota,setQuota] = useState('')
    const checkinquota = (itm)=>{
         setQuota(itm)
    }
    
    
    return (
        <>
            <section className="bg-primary p-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full mb-3">
                                <button className="text-sm text-gray-300 font-bold px-4 py-2">One Way</button>
                                <button className="text-sm text-gray-300 font-bold px-4 py-2">Round Trip</button>
                                <button className="text-sm text-gray-300 font-bold px-4 py-2">Multicity</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-8  *:border-e *:border-blue-gray-100">
                        <div className="col-span-2 rounded-s">
                            <FromField label="From" />
                        </div>
                        <div className="col-span-2">
                            <FromField label="To" />
                        </div>
                        <div className="col-span-1">
                            <DateField label={"Departure Date"} />
                        </div>
                        <div className="col-span-1">
                            <DateField label={"Return Date"} />
                        </div>
                        <div className="col-span-1">
                            <div className="w-full p-3 bg-white h-full">
                                <LabelSearch label={"Traveller & Class"} />
                                <h4>
                                    <span className="text-xl font-bold me-1">1</span>
                                    <span className="text-sm me-1">July</span>
                                    <span>2024</span>
                                </h4>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <button className="w-full h-full  rounded-e bg-orange-900 text-white outline-none">Search</button>
                        </div>

                    </div>
                    <div className="grid grid-cols-1">
                        
                        <div className="col-span-1">
                            <div className="w-full flex flex-wrap gap-4 mt-5">
                                {
                                    ["Defence Force", "Students", "Senior Citizens", "Doctor Nurses"].map((itm) => (
                                        <>
                                            <div onClick={()=> checkinquota(itm)} className={`inline-flex gap-1 cursor-pointer ${quota == itm ? "active": ""} quotabox`}>
                                                <div className={`size-4 rounded-full border checkbox relative ${quota == itm ? "bg-white": ""} quotabox`}> </div>
                                                <span className="text-sm text-white">{itm}</span>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home