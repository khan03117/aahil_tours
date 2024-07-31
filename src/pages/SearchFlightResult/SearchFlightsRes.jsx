import React from 'react'

import axios from "axios";
import Filter from "./Filter"
import SingleFlightResBox from "./SingleFlightResBox"
import { SEARCH } from "../../Utils";
import airplane from '../../assets/airplane.gif';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';


const SearchFlightsRes = () => {
    const [onwards, setOnwards] = React.useState([]);
    const [returns, setReturns] = React.useState([]);
    const [comobs, setCombos] = React.useState([]);
    const [multies, setMulties] = React.useState({});
    const [isInternational, setInternational] = React.useState(false);
    const searchdata = localStorage.getItem('search');
    const { data, trip } = JSON.parse(searchdata);
    const [pid, setPid] = React.useState('');
    const [rpid, setRpid] = React.useState('');
    const [allow, setAllow] = React.useState(false);
    const [isloading, setIsLoading] = React.useState(false);
    const [routeid, setRouteId] = React.useState(0);
    const navigate = useNavigate();
    const set_allow = () => {
        if (trip == 1 && pid) {
            setAllow(true);
        }
        if (trip == 2) {
            if (pid && rpid) {
                setAllow(true);
            }
        }
    }
    React.useEffect(() => {
        set_allow();
    }, [pid, rpid]);

    const searchFlight = async () => {
        setIsLoading(true)
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
            console.log('trip 3 and internationl')
            setCombos(tripInfos.COMBO || []);
        } else if (trip === 3) {
            console.log(tripInfos)
            setMulties(tripInfos);
        }
        setIsLoading(false)
    }
    React.useEffect(() => {
        setInternational(false);
        searchFlight();
        console.log(comobs);
    }, [comobs]);
    React.useEffect(() => {
        console.log(multies);
    }, [multies]);

    if (!data.searchQuery.paxInfo) {
        return <div>Loading...</div>
    }
    const bookflight = () => {
        if (allow) {
            let ids = pid;
            if (rpid) {
                ids = ids + ',' + rpid;
            }

            navigate('/review/' + ids);
        } else {
            alert('No allowed')
        }
    }

    return (
        <>
            {
                isloading ? (
                    <>
                        <div className='p-10 text-center'>
                            <img src={airplane} alt="" className="max-w-full mx-auto inline-block" />
                        </div>
                    </>
                )
                    : (
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
                                                    {
                                                        [...data.searchQuery.routeInfos].map((route, index) => (
                                                            <>
                                                                <button onClick={() => setRouteId(index)}>
                                                                    {route.fromCityOrAirport.code} <ArrowRightOutlined /> {route.toCityOrAirport.code}
                                                                </button>
                                                            </>
                                                        ))


                                                    }
                                                    <div className={`grid gap-2 ${trip == 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                                        <div className="col-span-1">
                                                            {

                                                                (
                                                                    <>
                                                                        {
                                                                            onwards.map((flight) => (
                                                                                <>
                                                                                    <SingleFlightResBox name="onwards" handlepid={setPid} paxinfo={data.searchQuery.paxInfo} flight={flight} />
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
                                                                        <SingleFlightResBox name="return" handlepid={setRpid} flight={flight} paxinfo={data.searchQuery.paxInfo} />
                                                                    </>
                                                                ))
                                                            }
                                                        </div>
                                                        <div className="col-span-1">
                                                          {
                                                            Object.values(multies)[routeid].map((flight) => (
                                                                <>
                                                                                    <SingleFlightResBox name="onwards" handlepid={setPid} paxinfo={data.searchQuery.paxInfo} flight={flight} />

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
                            {
                                allow && (
                                    <>
                                        <section className="fixed z-[109999] bottom-0 start-0 w-full bg-primary p-4">
                                            <div className="flex justify-between">
                                                <button onClick={bookflight} className="bg-white text-primary px-4 py-2 rounded shadow-sm shadow-white/40">Book Now</button>
                                            </div>
                                        </section>
                                    </>
                                )
                            }
                        </>
                    )
            }


        </>
    )
}

export default SearchFlightsRes