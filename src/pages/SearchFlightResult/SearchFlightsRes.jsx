import React, { useState } from 'react'

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
    
   
    const searchdata = localStorage.getItem('search');
    const { data, trip, isInt } = JSON.parse(searchdata);
   
    const [pid, setPid] = React.useState('');
    const [rpid, setRpid] = React.useState('');
    const [allow, setAllow] = React.useState(false);
    const [isloading, setIsLoading] = React.useState(false);
    const [routeid, setRouteId] = React.useState(0);
    const [pids, setPids] = React.useState([]);
    const [stops, setStops] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    const [pdarr, setPdarr] = useState([]);

    const setAllPid = (id) => {
        const prr = [...pdarr];
        const isExists = prr.find(obj => obj.rid == routeid);
        if (isExists) {
            const index = prr.indexOf(isExists);
            prr[index].p_id = id;
            setPdarr(prr);
        } else {
            const newobj = { rid: routeid, p_id: id };
            prr.push(newobj);
            setPdarr([...prr]);
        }
        const arr = [...prr];
        const filtered_pids = arr.map(obj => (obj.p_id));
        setPids(filtered_pids);
    }
    const navigate = useNavigate();
    const handleStops = (arr) => {
        setStops(arr);
    }
    const set_allow = () => {
        if (trip == 1 && pid) {
            setAllow(true);
        }
        if (trip == 2) {
            if (pid && rpid) {
                setAllow(true);
            }
        }
        if (trip == 3 && !isInt) {
            if (data.searchQuery.routeInfos.length == pids.length) {
                setAllow(true);
            }
        }
    }
    React.useEffect(() => {
        set_allow();
    }, [pid, rpid, pids]);



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
            console.log(tripInfos.ONWARD);
            setOnwards(tripInfos.ONWARD || []);
        } else if (trip === 2) {
            setOnwards(tripInfos.ONWARD || []);
            setReturns(tripInfos.RETURN || []);
        } else if (trip === 3 && isInt) {
            console.log('trip 3 and internationl')
            setCombos(tripInfos.COMBO || []);
        } else if (trip === 3) {
            console.log(tripInfos)
            setMulties(tripInfos);
        }
        setIsLoading(false)
    }
    React.useEffect(() => {
        searchFlight();
       
    }, []);
   


    if (!data.searchQuery.paxInfo) {
        return <div>Loading...</div>
    }
    const bookflight = () => {
        if (allow) {
            if (trip != 3) {
                let ids = pid;
                if (rpid) {
                    ids = ids + ',' + rpid;
                }

                navigate('/review/' + ids);
            }
            if (trip == 3 && !isInt) {
                const allpids = pids.join(',');
                navigate('/review/' + allpids);
            }

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
                                            <Filter handleStops={handleStops} />
                                        </div>
                                        <div className="col-span-9">
                                            <div className="w-full">
                                                <div className="w-full">
                                                    <div className="w-full flex gap-4 items-center *:text-nowrap *:text-sm" >
                                                        {
                                                            [...data.searchQuery.routeInfos].map((route, index) => (
                                                                <>
                                                                    <button className={`p-2 ${routeid == index ? 'bg-primary text-white' : 'bg-gray-300 text-black'}`} onClick={() => setRouteId(index)}>
                                                                        {route.fromCityOrAirport.code} <ArrowRightOutlined /> {route.toCityOrAirport.code}
                                                                    </button>
                                                                </>
                                                            ))
                                                        }
                                                    </div>

                                                    <div className={`grid gap-2 ${trip == 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                                        {
                                                            trip != 3 && routeid == 0 && (
                                                                <div className="col-span-1">
                                                                    {

                                                                        (
                                                                            <>
                                                                                {
                                                                                    onwards.filter(obj => stops.includes(obj.sI.length - 1)).map((flight) => (
                                                                                        <>
                                                                                            <SingleFlightResBox name="onwards" handlepid={setPid} paxinfo={data.searchQuery.paxInfo} flight={flight} />
                                                                                        </>
                                                                                    ))
                                                                                }
                                                                            </>
                                                                        )
                                                                    }
                                                                </div>
                                                            )}
                                                        {
                                                            trip == 2 && routeid == 1 && (
                                                                <>

                                                                    <div className="col-span-1">
                                                                        {
                                                                            returns.filter(obj => stops.includes(obj.sI.length - 1)).map((flight) => (
                                                                                <>
                                                                                    <SingleFlightResBox name="return" handlepid={setRpid} flight={flight} paxinfo={data.searchQuery.paxInfo} />
                                                                                </>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </>
                                                            )
                                                        }
                                                        <div className="col-span-1">
                                                            {
                                                                ((trip == 3 && !isInt) && Object.values(multies).length > 0) && Object.values(multies)[routeid].filter(obj => stops.includes(obj.sI.length - 1)).map((flight) => (
                                                                    <>
                                                                        <SingleFlightResBox name={'multi'} handlepid={setAllPid} paxinfo={data.searchQuery.paxInfo} flight={flight} />

                                                                    </>
                                                                ))
                                                            }
                                                            {
                                                                (trip == 3 && isInt) &&  comobs.filter(obj => stops.includes(obj.sI.length - 1)).map((flight) => (
                                                                    <>
                                                                        <SingleFlightResBox name={'multi'} handlepid={setAllPid} paxinfo={data.searchQuery.paxInfo} flight={flight} />

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