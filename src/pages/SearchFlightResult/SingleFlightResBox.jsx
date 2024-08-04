import React, { useEffect } from 'react'
import food from '../../assets/fast-food.svg'
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import FlightDetails from './FlightDetails'
import FareDetails from './FareDetails'
import BaggageInformation from './BaggageInformation'
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from '@material-tailwind/react'
import axios from 'axios'
import { BASE_URL, FAIR_RULE, token } from '../../Utils'
import FareRule from './FareRule'
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import PriceBox from './PriceBox'

const SingleFlightResBox = ({ flight, paxinfo, name, handlepid }) => {
    const [view, setView] = React.useState('');
    const [show, setShow] = useState(false);
    const [fairRule, setFairRule] = useState([]);
    const [price_id, setPrice_id] = useState('');
    const [priceindex, setPriceIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const viewDetails = (itm) => {
        setView(itm)
    }
    const handleshow = (id) => {
        setShow(!show);
        getFareRule(id);
        setView('Flight Details');

    }
    const si = flight.sI;
    const pricelist = flight.totalPriceList;
    const stops = si.length - 1;
    const countPrice = (id) => {
        let price = 0;
        const arr = pricelist.find(obj => obj.id == id);
        if (arr) {
            const adult_price = arr.fd.ADULT.fC.TF;
            const child_price = arr.fd?.CHILD?.fC.TF ?? 0;
            const infant_price = arr.fd?.INFANT?.fC.TF ?? 0;
            const adultcount = paxinfo.ADULT;
            const childcount = paxinfo.CHILD;
            const infantcount = paxinfo.INFANT;
            price = adult_price * adultcount + child_price * childcount + infant_price * infantcount;
            return price;
        } else {
            return 0;
        }

    }

    const getFareRule = async (id) => {
        setPrice_id(id);
        const fdx = pricelist.findIndex(obj => obj.id == id);
        if (fdx > -1) {
            setPriceIndex(fdx);
        }
        const data = {
            id: id,
            "flowType": "SEARCH"
        }
        const item = await axios.post(FAIR_RULE, data, {
            headers: {
                'Content-Type': 'application/json',
                'apikey': token
            }
        });
        setFairRule(item.data);
    }

    // useEffect(() => {
    //     setPriceIndex(0);
    //     if (pricelist.length > 0) {
    //         setPrice_id(pricelist[0].id)
    //     }

    // }, []);
    useEffect(() => {
        if (price_id) {
            handlepid(price_id)
        }
    }, [price_id]);


    if (!flight) {
        return false;
    }
    return (
        <>
            <div className="w-full bg-white rounded-lg  p-5 my-3 relative">
                <div className="w-full">
                    <div className="col-span-1">
                        <div className="w-full py-2">
                            <div className="w-full flex items-center gap-2 px-2">
                                <img src={food} alt='image' className='h-[20px]' />
                                <p className="text-black text-sm font-semibold">Enjoy Free Meals</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-cols-6 relative">
                            <div className="absolute text-xs text-center top-[10%] translate-x-[-50%] left-[28%]  w-10 h-1 border-t border-blue-gray-500">
                                {stops} stops
                            </div>
                            <div className="col-span-1">
                                <div className="w-full flex gap-3 items-center">
                                    <div className='icon'>
                                        <img className='size-8' src={BASE_URL + 'logos/' + si[0].fD.aI.code + '.png'} alt='image' />
                                    </div>
                                    <div className='text'>
                                        <p className='text-sm text-black font-light'>{si[0].fD.aI.name}</p>
                                        <p className='text-sm text-gray-400 font-light'>{si[0].fD.aI.code}-{si[0].fD.fN}</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="w-full">
                                    <p className='font-bold text-lg'>{si[0].dt.split('T')[1]}</p>
                                    <p className='text-sm text-black font-light'>
                                        {si[0].da.city}
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="w-full">
                                    <p className='font-bold text-lg'>{si[stops].at.split('T')[1]}</p>
                                    <p className='text-sm text-black font-light'>
                                        {si[stops].aa.city}
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="w-full">
                                    <PriceBox plist={pricelist[0]} name={name} getFareRule={getFareRule} countPrice={countPrice} />
                                    {
                                        pricelist.length > 1 && (
                                            <>
                                                <button onClick={() => setOpen(!open)} className="w-full flex justify-between  py-2 px-2  text-xs border-b border-gray-600 text-black"> 
                                                   <span>
                                                   {
                                                        open ? <>
                                                            Hide 
                                                        </> : <>
                                                        Show All 
                                                        </>
                                                    }
                                                   </span>
                                                   <span>
                                                        {
                                                            open ? <>
                                                                <MinusOutlined/>
                                                            </> : <>
                                                                <PlusOutlined/>
                                                            </>
                                                        }
                                                   </span>


                                                     </button>

                                                {
                                                    pricelist.slice(1).map((plist) => (
                                                        <>
                                                            <Collapse open={open}>
                                                                <PriceBox plist={plist} name={name} getFareRule={getFareRule} countPrice={countPrice} />
                                                            </Collapse>
                                                        </>
                                                    ))
                                                }
                                            </>
                                        )
                                    }


                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="w-full">
                                    {/* <Link to={'/review/'+price_id} className='font-bold text-sm block text-nowrap  text-white bg-orange-800 px-4 py-1 rounded-full'>BOOK NOW</Link> */}
                                    <div className="flex mt-2 gap-2">
                                        <div className='icon'>
                                            <MdOutlineAirlineSeatReclineExtra />
                                        </div>
                                        <div className="text">
                                            <p className='text-xs text-red-500 font-bold'>{pricelist[priceindex ?? 0]?.fd.ADULT.sR ?? 0} Seat Left</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="w-full py-2">
                            <button onClick={() => handleshow(pricelist[priceindex ?? 0].id)} className={`font-bold text-sm  hover:bg-primary hover:text-white px-4 py-1 rounded ${show ? "bg-primary text-white" : "text-black bg-gray-200"}`}>View Details </button>
                            <p className="text-sm mt-2">{si[0].iand && (<>
                                Flight Arrives after 1 Day(s)
                            </>)}</p>

                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="w-full py-2">
                            <p className='bg-yellow-50 text-xs px-2 py-1 inline-block border-l-2 border-yellow-800'>Use Promo Code: EMTSENIOR to get additional Rs.400 instant discount </p>
                        </div>
                    </div>

                </div>
                {
                    show && (
                        <>
                            <div className="relative w-full p-2 bg-gray-100 mt-3">
                                <div className="grid grid-cols-1">
                                    <div className="col-span-1">
                                        <div className=" grid grid-cols-1 justify-between">
                                            <div className="col-span-1">
                                                <div className="w-full flex border-b border-gray-400">
                                                    <div className="w-full">
                                                        {
                                                            ["Flight Details", "Fare Details", "Fare Rules", "Baggage Information"].map((itm) => (
                                                                <>
                                                                    <button onClick={() => viewDetails(itm)} className={`text-black text-sm font-bold px-4 py-2 ${view == itm ? "text-primary" : ""}`}>{itm}</button>
                                                                </>
                                                            ))
                                                        }
                                                    </div>
                                                    <button className="text-gray-700" onClick={handleshow}>
                                                        <CloseOutlined />
                                                    </button>
                                                </div>
                                            </div>
                                            {view === "Flight Details" && <FlightDetails flights={si} />}
                                            {view === "Fare Details" && <FareDetails id={price_id} pricelist={pricelist} paxinfo={paxinfo} rule={fairRule} />}
                                            {view === "Fare Rules" && fairRule && <FareRule rule={fairRule} />}
                                            {view === "Baggage Information" && <BaggageInformation bI={pricelist.find(obj => obj.id == price_id)?.fd.ADULT.bI} />}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

SingleFlightResBox.propTypes = {
    flight: PropTypes.object.isRequired,
    paxinfo: PropTypes.object,
    name: PropTypes.string,
    handlepid: PropTypes.func
}


export default SingleFlightResBox