//import React from 'react'

import Filter from "./Filter"
import SingleFlightResBox from "./SingleFlightResBox"


const SearchFlightsRes = () => {
    return (
        <>
            <section className="bg-[#e8f2fa] py-2 px-5">
                <div className="container mx-auto">
                   <div className="grid grid-cols-12 gap-3">
                         <div className="col-span-3">
                           <Filter/>
                         </div>
                         <div className="col-span-9">
                            <div className="w-full">
                            <div className="grid grid-cols-6">
                        {
                            ["AIRLINES", "DEPARTURE", "DURATION", "ARRIVE", "PRICE"].map((itm) => (
                                <>
                                    <div className="col-span-1">
                                        <div className="w-full">
                                            <p className="text-gray-500 text-sm font-bold py-3">{itm}</p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    <div className="w-full">
                        {
                            [...Array(12)].map((ar, index) => (
                                <>
                                    <SingleFlightResBox key={ar ?? Math.random() * 100} id={index} />
                                </>
                            ))
                        }
                    </div>
                            </div>
                         </div>
                   </div>

                </div>
            </section>
        </>
    )
}

export default SearchFlightsRes