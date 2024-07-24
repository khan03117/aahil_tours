import React from 'react'

import axios from "axios";
import Filter from "./Filter"
import SingleFlightResBox from "./SingleFlightResBox"
import { SEARCH } from "../../Utils";


const SearchFlightsRes = () => {
    const [onwards, setOnwards] = React.useState([]);
    const [returns, setReturns] = React.useState([]);
    const [comobs, setCombos] = React.useState([]);
    const [isInternational, setInternational] = React.useState(false);
    const searchdata = localStorage.getItem('search');
    const { data, trip } = JSON.parse(searchdata);
    const searchFlight = async () => {
        const resp = await axios.post(SEARCH, data, {
            headers: {
                'Content-Type': 'application/json',
                'apikey': '7121041a825bdf-f95d-40a6-8663-3bd50825a0ec'
            },
        });
        const { searchResult } = resp.data;
        const { tripInfos } = searchResult;
        if (trip === 1) {
            setOnwards(tripInfos.ONWARD || []);
        } else if (trip === 2) {
            setOnwards(tripInfos.ONWARD || []);
            setReturns(tripInfos.RETURN || []);
        } else if (trip === 3 && isInternational) {
            setCombos(tripInfos.COMBO || []);
        } else if (trip === 3) {
            // Handle Domestic Multi-City
            // Assuming searchResult contains equivalent number of route infos
            const multiCityResults = searchResult.routeInfos.map((info, index) => ({
                id: index + 1,
                ...info
            }));
            setOnwards(multiCityResults);
        }
    }
    React.useEffect(() => {
        setInternational(false);
        searchFlight();
        console.log(comobs);
    }, []);
    return (
        <>
            <section className="bg-[#e8f2fa] py-2 px-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-3">
                            <Filter />
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
                                    <div className={`grid ${trip == 2 ? 'col-span-2' : 'col-span-1'}`}>
                                        <div className="col-span-1">
                                            {

                                                trip != 3 && (
                                                    <>
                                                        {
                                                            onwards.map((flight) => (
                                                                <>
                                                                    <SingleFlightResBox paxinfo={data.searchQuery.paxInfo} flight={flight} />
                                                                </>
                                                            ))
                                                        }
                                                    </>
                                                )
                                            }
                                        </div>
                                        <div className="col-span-1">
                                            {
                                                returns.map((flight) => (
                                                    <>
                                                       <SingleFlightResBox flight={flight} />
                                                    </>
                                                ))
                                            }
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

export default SearchFlightsRes