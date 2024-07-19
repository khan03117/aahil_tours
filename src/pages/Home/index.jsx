// import React from 'react'

import DateField from "./DateField"
import FromField from "./FromField"
import LabelSearch from "./LabelSearch"

const Home = () => {
    return (
        <>
            <section className="bg-primary p-10">
                <div className="container mx-auto">
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
                </div>
            </section>
        </>
    )
}

export default Home