import React from 'react'
import { useEffect, useState } from "react"
import DateField from "./DateField"
import FromField from "./FromField"
import LabelSearch from "./LabelSearch"
import { CloseCircleFilled, DownOutlined, PlusOutlined } from "@ant-design/icons"
import TravellersBox from "./TravellersBox"
import { formatDate, pfts, SEARCH, trips } from '../../Utils'
import axios from 'axios'
import SingleFlightResBox from '../SearchFlightResult/SingleFlightResBox'

const Home = () => {
    const [travellers, setTravellers] = useState({
        ADULT: 1,
        CHILD: 0,
        INFANT: 0,
    });
    const boxRef = React.useRef(null);
    const [cabinClass, setCabinClass] = useState('ECONOMY');
    const handleCabinClass = (key) => {
        setCabinClass(key);
    };
    const handleIncrement = (key) => {
        setTravellers((prev) => {
            const newValue = prev[key] + 1;

            if (key === 'INFANT' && newValue > prev['ADULT']) {
                // Infants cannot be more than adults
                return prev;
            }

            if ((key === 'ADULT' || key === 'CHILD') && (newValue + prev[key === 'ADULT' ? 'CHILD' : 'ADULT']) > 9) {
                // Total number of adults + children cannot be more than 9
                return prev;
            }

            return { ...prev, [key]: newValue };
        });
    };
    const handleDecrement = (key) => {
        setTravellers((prev) => {
            if (key === 'ADULT' && prev[key] <= 1) {
                // Ensure the number of adults cannot be less than 1
                return prev;
            }

            let newValue = prev[key] > 0 ? prev[key] - 1 : 0;
            let newTravellers = { ...prev, [key]: newValue };

            if (key === 'ADULT' && newTravellers['INFANT'] > newValue) {
                newTravellers['INFANT'] = newValue;
            }

            return newTravellers;
        });
    };

    const [open, setOpen] = useState({ id: 0, type: "" })
    const [trip, setTrip] = useState(1)
    const [quota, setQuota] = useState('');
    const [rows, setRows] = useState(1);
    const [fdata, setFdata] = useState([]);
    const [tbox, setTbox] = useState(false);
    const [isInternational, setInternational] = useState(false);
    const [onwards, setOnwards] = useState([]);
    const [returns, setReturns] = useState([]);
    const [comobs, setCombos] = useState([]);

    const handleTravellerBox = () => {
        setTbox(true);
    }
    const handleClickOutside = (event) => {
        if (boxRef.current && !boxRef.current.contains(event.target)) {
            setTbox(false);
        }
    };

    useEffect(() => {
        if (tbox) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [tbox]);
    const handleFdata = (index, key, value) => {
        let temp = [...fdata];
        const found = temp.find(obj => obj.id == index);
        if (found) {
            found[key] = value;
        } else {
            temp.push({ id: index, [key]: value });
        }
        setFdata(temp);
    }

    const checkinquota = (itm) => {
        setQuota((prev) => (prev != itm ? itm : ""));
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
        setRows((prev) => (prev + 1));
        setOpen({ id: "", type: "" })
    }
    const removecity = () => {
        setRows((prev) => Math.max(prev - 1, 1));
        setOpen({ id: "", type: "" })
    }
    useEffect(() => {
        setInternational(false);
        console.log(fdata)
    }, [fdata]);

    const searchFlight = async () => {
        try {
            let routeInfos = [];
            if (trip === 1) { // One Way
                routeInfos = fdata.map((itm) => ({
                    fromCityOrAirport: { code: itm.From },
                    toCityOrAirport: { code: itm.To },
                    travelDate: formatDate(itm.DepartureDate),
                }));
            } else if (trip === 2) { // Round Trip
                routeInfos = fdata.flatMap((itm) => [
                    {
                        fromCityOrAirport: { code: itm.From },
                        toCityOrAirport: { code: itm.To },
                        travelDate: formatDate(itm.DepartureDate),
                    },
                    {
                        fromCityOrAirport: { code: itm.To },
                        toCityOrAirport: { code: itm.From },
                        travelDate: formatDate(itm.ReturnDate),
                    }
                ]);
            } else if (trip === 3) { // Multi-City
                routeInfos = fdata.map((itm) => ({
                    fromCityOrAirport: { code: itm.From },
                    toCityOrAirport: { code: itm.To },
                    travelDate: formatDate(itm.DepartureDate),
                }));
            }

            const searchModifiers = {};
            if (quota) {
                searchModifiers['pft'] = quota;
            }

            const data = {
                searchQuery: {
                    cabinClass: cabinClass,
                    paxInfo: {
                        ADULT: travellers.ADULT.toString(),
                        CHILD: travellers.CHILD.toString(),
                        INFANT: travellers.INFANT.toString(),
                    },
                    routeInfos: routeInfos,
                }
            };

            if (Object.keys(searchModifiers).length > 0) {
                data.searchQuery.searchModifiers = searchModifiers;
            }
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
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        console.log({ "onwards": onwards });
        console.log({ "return": returns });
        console.log({ "coms": comobs });
    }, [onwards, returns, comobs])
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
                                        <FromField handleFdata={handleFdata} id={index} open={open} label="From" />
                                    </div>
                                    <div className="col-span-2">
                                        <FromField handleFdata={handleFdata} id={index} open={open} label="To" />
                                    </div>
                                    <div className="col-span-1">
                                        <DateField handleFdata={handleFdata} id={index} handletrip={handletrip} disabled={false} label={"Departure Date"} />
                                    </div>
                                    {
                                        trip != 3 && (
                                            <>
                                                <div className="col-span-1">
                                                    <DateField id={index} handleFdata={handleFdata} handletrip={handletrip} label={"Return Date"} disabled={trip == 2 ? false : true} />
                                                </div>
                                            </>
                                        )
                                    }
                                    {
                                        index == 0 && (
                                            <>
                                                <div className="col-span-1 border-none">
                                                    <div onClick={handleTravellerBox} className="w-full p-3 bg-white h-full relative">
                                                        <LabelSearch label={"Traveller & Class"} />
                                                        <h4>
                                                            <span className="text-xl font-bold me-1">{travellers.ADULT + travellers.CHILD + travellers.INFANT}</span>
                                                            <span className="text-sm me-1">Traveller(s)</span>
                                                            <span><DownOutlined /></span>
                                                        </h4>
                                                        <p className="text-sm capitalize">{cabinClass.split('_').join(' ').toLowerCase()}</p>
                                                        {
                                                            tbox && (
                                                                <>
                                                                    <div ref={boxRef} className="absolute top-full start-0 w-full min-w-[250px]">
                                                                        <TravellersBox
                                                                            travellers={travellers}
                                                                            handleIncrement={handleIncrement}
                                                                            handleDecrement={handleDecrement}
                                                                            handleCabinClass={handleCabinClass}
                                                                            cabinClass={cabinClass}
                                                                            c_bin={cabinClass}
                                                                        />
                                                                    </div>
                                                                </>
                                                            )
                                                        }

                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }

                                    <div className={`${trip != 3 ? 'col-span-1' : index == 0 ? 'col-span-2' : 'col-span-3'}  border-none bg-white`}>
                                        {
                                            index + 1 == rows ? <>
                                                <div className={`w-full h-full ${trip != 3 ? '' : 'p-3 flex gap-2 items-center'}`}>
                                                    <button onClick={searchFlight} className={`px-7 text-sm ${trip != 3 ? 'h-full w-full rounded-e' : 'py-2 rounded-full'}   bg-orange-900 text-white outline-none`}>Search</button>
                                                    <button onClick={addcity} className="text-primary px-4 py-2 text-sm border border-primary rounded-full">
                                                        <PlusOutlined /> Add City
                                                    </button>
                                                    {
                                                        index > 1 && (
                                                            <>
                                                                <button onClick={removecity} className=" text-xl text-gray-800">
                                                                    <CloseCircleFilled />
                                                                </button>
                                                            </>
                                                        )
                                                    }
                                                </div>

                                            </> : <></>
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
                                    pfts.map((itm) => (
                                        <>
                                            <div onClick={() => checkinquota(itm.key)} className={`inline-flex gap-1 cursor-pointer ${quota == itm.key ? "active" : ""} quotabox`}>
                                                <div className={`size-4 rounded-full border checkbox relative ${quota == itm.key ? "bg-white" : ""} quotabox`}> </div>
                                                <span className="text-sm text-white">{itm.title}</span>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10">
                {onwards.length > 0 && onwards.map((itm) => (
                    <>
                        <SingleFlightResBox flight={itm} />
                    </>
                ))}
            </section>
        </>
    )
}

export default Home