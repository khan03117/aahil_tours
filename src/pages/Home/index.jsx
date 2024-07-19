// import React from 'react'


import { useState } from "react"
import DateField from "./DateField"
import FromField from "./FromField"
import LabelSearch from "./LabelSearch"
import { CloseCircleFilled, PlusOutlined } from "@ant-design/icons"

const Home = () => {
    const [trip, setTrip] = useState(1)
    const [quota, setQuota] = useState('');
    const [rows, setRows] = useState(1);
    const trips = [
        { id: 1, trip: "One Way" },
        { id: 2, trip: "Round Trip" },
        { id: 3, trip: "Mulicity" }
    ];
    const checkinquota = (itm) => {
        setQuota(itm);
    }
    const handletrip = (itm) => {
        setTrip(itm)
        if (itm == 3) {
            setRows((prev) => (prev > 2 ? prev : 2));
        } else {
            setRows(1);
        }
    }

    const addcity = () => {
        setRows((prev) => (prev + 1))
    }
    const removecity = () => {
        setRows((prev) => Math.max(prev -1 , 1))
    }

    return (
        <>
            <section className="bg-primary p-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full mb-3">
                                {
                                    trips.map((itm) => (
                                        <>
                                            <button onClick={() => handletrip(itm.id)} className={`text-sm text-gray-300 font-bold px-4 py-1 ${trip == itm.id ? "bg-white text-primary rounded-full" : ""}`}>{itm.trip}</button>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {
                        [...Array(rows)].map((a, index) => (
                            <>
                                <div key={a} className="grid border-b border-blue-gray-100 last:border-none grid-cols-8  *:border-e *:border-blue-gray-100">
                                    <div className="col-span-2 rounded-s">
                                        <FromField label="From" />
                                    </div>
                                    <div className="col-span-2">
                                        <FromField label="To" />
                                    </div>
                                    <div className="col-span-1">
                                        <DateField handletrip={handletrip} disabled={false} label={"Departure Date"} />
                                    </div>
                                    {
                                        trip != 3 && (
                                            <>
                                                <div className="col-span-1">
                                                    <DateField handletrip={handletrip} label={"Return Date"} disabled={trip == 2 ? false : true} />
                                                </div>
                                            </>
                                        )
                                    }
                                    {
                                        index == 0 && (
                                            <>
                                                <div className="col-span-1 border-none">
                                                    <div className="w-full p-3 bg-white h-full">
                                                        <LabelSearch label={"Traveller & Class"} />
                                                        <h4>
                                                            <span className="text-xl font-bold me-1">1</span>
                                                            <span className="text-sm me-1">July</span>
                                                            <span>2024</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }

                                    <div className={`${trip != 3 ? 'col-span-1' : index == 0 ? 'col-span-2' : 'col-span-3'}  border-none bg-white`}>
                                        {
                                            index + 1 == rows ? <>
                                                <div className={`w-full h-full ${trip != 3 ? '' : 'p-3 flex gap-2 items-center'}`}>
                                                    <button className={`px-7 text-sm ${trip != 3 ? 'h-full w-full rounded-e' : 'py-2 rounded-full'}   bg-orange-900 text-white outline-none`}>Search</button>
                                                    <button onClick={addcity} className="text-primary px-4 py-2 text-sm border border-primary rounded-full">
                                                        <PlusOutlined/> Add City
                                                    </button>
                                                    {
                                                        index > 1 && (
                                                            <>
                                                                <button onClick={removecity} className=" text-xl text-gray-800">
                                                        <CloseCircleFilled/>
                                                    </button>
                                                            </>
                                                        )
                                                    }
                                                
                                                 
                                                </div>

                                            </> : <>

                                            </>
                                        }
                                    </div>
                                  

                                </div>
                            </>
                        ))
                    }
                    <div className="grid grid-cols-1">

                        <div className="col-span-1">
                            <div className="w-full flex flex-wrap gap-4 mt-5">
                                {
                                    ["Defence Force", "Students", "Senior Citizens", "Doctor Nurses"].map((itm) => (
                                        <>
                                            <div onClick={() => checkinquota(itm)} className={`inline-flex gap-1 cursor-pointer ${quota == itm ? "active" : ""} quotabox`}>
                                                <div className={`size-4 rounded-full border checkbox relative ${quota == itm ? "bg-white" : ""} quotabox`}> </div>
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