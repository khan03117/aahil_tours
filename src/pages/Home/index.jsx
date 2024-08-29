import React from 'react'
import { useEffect, useState } from "react"
import DateField from "./DateField"
import FromField from "./FromField"
import LabelSearch from "./LabelSearch"
import { CloseCircleFilled, DownOutlined, PlusOutlined } from "@ant-design/icons"
import TravellersBox from "./TravellersBox"
import { formatDate, pfts, postData, trips } from '../../Utils'
import { useNavigate } from 'react-router-dom'

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
    const [errors, setErrors] = useState([]);


    const validate = () => {
        console.log(fdata);
        let validationErrors = [];

        // Validate fdata
        if (!fdata || fdata.length === 0) {
            validationErrors.push('Flight data is required.');
        }

        // Validate travellers
        if (!travellers || !travellers.ADULT || travellers.ADULT <= 0) {
            validationErrors.push('At least one adult passenger is required.');
        }

        // Validate cabinClass
        if (!cabinClass) {
            validationErrors.push('Cabin class is required.');
        }

        // Validate each trip segment
        fdata.forEach((itm, index) => {
            if (!itm.From) {
                validationErrors.push(`From city/airport is required for segment ${index + 1}.`);
            }
            if (!itm.To) {
                validationErrors.push(`To city/airport is required for segment ${index + 1}.`);
            }
            if (!itm.DepartureDate && trip !== 2) { // For one-way and multi-city, DepartureDate is required
                validationErrors.push(`Departure date is required for segment ${index + 1}.`);
            }
            if (trip === 2 && !itm.ReturnDate) { // For round trip, ReturnDate is required
                validationErrors.push(`Return date is required for segment ${index + 1}.`);
            }
        });

        // Set errors if any validation failed
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return; // Stop execution if there are errors
        } else {
            return true;
        }

    }
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
            setRows(() => (fdata.length > 1 ? fdata.length : 2));
        } else {
            setRows(1);
            if(fdata.length > 1){
                const arr =  fdata[0];
                setFdata([arr]);
            }
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
        console.log(fdata)
    }, [fdata]);
    const navigate = useNavigate();
    const searchFlight = async () => {
        try {
            if (validate()) {
                let isInt = false;
                let routeInfos = [];
                
                if (trip === 1) { // One Way
                    routeInfos = fdata.map((itm) => {
                        if (itm.From_country !== itm.To_country) {
                            isInt = true;
                        }
                        return {
                            fromCityOrAirport: { code: itm.From },
                            toCityOrAirport: { code: itm.To },
                            travelDate: formatDate(itm?.DepartureDate ?? new Date()),
                        };
                    });
                } else if (trip === 2) { // Round Trip
                    routeInfos = fdata.flatMap((itm) => {
                        if (itm.From_country !== itm.To_country) {
                            isInt = true;
                        }
                        return [
                            {
                                fromCityOrAirport: { code: itm.From },
                                toCityOrAirport: { code: itm.To },
                                travelDate: formatDate(itm?.DepartureDate ?? new Date()),
                            },
                            {
                                fromCityOrAirport: { code: itm.To },
                                toCityOrAirport: { code: itm.From },
                                travelDate: formatDate(itm?.ReturnDate ?? new Date()),
                            }
                        ];
                    });
                } else if (trip === 3) { // Multi-City
                    routeInfos = fdata.map((itm) => {
                        if (itm.From_country !== itm.To_country) {
                            isInt = true;
                        }
                        return {
                            fromCityOrAirport: { code: itm.From },
                            toCityOrAirport: { code: itm.To },
                            travelDate: formatDate(itm.DepartureDate),
                        };
                    });
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
                const appid = localStorage.getItem('appId');            
                await postData('search-query', {...data, appId : appid, is_international : isInt  }).then((resp) => {
                    if(resp.success == "1"){
                        localStorage.setItem('search_id', resp.data._id);
                        localStorage.setItem('search', JSON.stringify({ data: data, trip: trip, isInt : isInt }));
                        navigate('/search-flight')
                    }
                 
                })

             
            }
        } catch (error) {
            console.log(error)
        }
    };

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
                    <div className="w-full text-white text-xs">
                        {errors.length > 0 && '*' + errors[0]}
                    </div>
                    {
                        [...Array(rows)].map((a, index) => (
                            <>
                                <div key={a} className="grid mb-2 last:border-none lg:grid-cols-8 grid-cols-3  *:border-e *:border-blue-gray-100">
                                    <div className="lg:col-span-2 col-span-1 rounded-s">
                                        <FromField handleFdata={handleFdata} id={index} open={open} label="From" />
                                    </div>
                                    <div className="lg:col-span-2 col-span-1">
                                        <FromField handleFdata={handleFdata} id={index} open={open} label="To" />
                                    </div>
                                    <div className="lg:col-span-1 col-span-1">
                                        <DateField handleFdata={handleFdata} id={index} handletrip={handletrip} disabled={false} label={"Departure Date"} />
                                    </div>
                                    {
                                        trip == 2 && (
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
                                                <div className="lg:col-span-1  col-span-3 border-none">
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

                                    <div className={`${trip != 3 ? 'col-span-1' : index == 0 ? 'lg:col-span-2 col-span-3' : 'lg:col-span-3 col-span-3'}  border-none bg-white`}>
                                        {
                                            index + 1 == rows ? <>
                                                <div className={`w-full h-full ${trip != 3 ? '' : 'p-3 flex lg:flex-none flex-wrap gap-2 items-center'}`}>
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
        </>
    )
}

export default Home