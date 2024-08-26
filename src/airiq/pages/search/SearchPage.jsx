import React, { useState } from 'react'
import { formatDate } from '../../../Utils'
import FromField from '../../../pages/Home/FromField'
import DateField from '../../../pages/Home/DateField'
import { useNavigate } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons'
import LabelSearch from '../../../pages/Home/LabelSearch'
import TravellersBox from '../../../pages/Home/TravellersBox'
import moment from 'moment'

const SearchPage = () => {
    const [travellers, setTravellers] = useState({
        ADULT: 1,
        CHILD: 0,
        INFANT: 0,
    });
    const boxRef = React.useRef(null);
    const [rows] = useState(1);
    const [fdata, setFdata] = useState([]);
    const [tbox, setTbox] = useState(false);
    const [errors, setErrors] = useState([]);
    const handleClickOutside = (event) => {
        if (boxRef.current && !boxRef.current.contains(event.target)) {
            setTbox(false);
        }
    };

    React.useEffect(() => {
        if (tbox) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [tbox]);
    const handleTravellerBox = () => {
        setTbox(true);
    }
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
    const navigate = useNavigate();
    const searchFlight = async () => {
        try {
            let routeInfos = [];
            routeInfos = fdata.map((itm) => {
                return {
                    origin: itm.From,
                    destination: itm.To,
                    departure_date: moment(formatDate(itm?.DepartureDate ?? new Date())).format('YYYY/MM/DD'),
                    "adult": travellers.ADULT,
                    "child": travellers.CHILD,
                    "infant": travellers.INFANT
                };
            });
            const searchModifiers = {};
            const data = {
                searchQuery: {
                    routeInfos: routeInfos,
                }
            };
            if (Object.keys(searchModifiers).length > 0) {
                data.searchQuery.searchModifiers = searchModifiers;
            }
            navigate('/agency/search-result', { state: { data: routeInfos } });

        } catch (error) {
            setErrors([error])
            console.log(error)
        }
    };

    return (
        <>
            <section className="bg-primary p-10">
                <div className="container mx-auto">

                    <div className="w-full text-white text-xs">
                        {errors.length > 0 && '*' + errors[0]}
                    </div>
                    {
                        [...Array(rows)].map((a, index) => (
                            <>
                                <div key={a} className="grid mb-2 border-b border-blue-gray-100 last:border-none lg:grid-cols-7 grid-cols-3  *:border-e *:border-blue-gray-100">
                                    <div className="lg:col-span-2 col-span-1 rounded-s">
                                        <FromField handleFdata={handleFdata} id={index} open={open} label="From" />
                                    </div>
                                    <div className="lg:col-span-2 col-span-1">
                                        <FromField handleFdata={handleFdata} id={index} open={open} label="To" />
                                    </div>
                                    <div className="lg:col-span-1 col-span-1">
                                        <DateField handleFdata={handleFdata} id={index} disabled={false} label={"Departure Date"} />
                                    </div>
                                    <div className="col-span-1">
                                        <div onClick={handleTravellerBox} className="w-full p-3 bg-white h-full relative">
                                            <LabelSearch label={"Traveller & Class"} />
                                            <h4>
                                                <span className="text-xl font-bold me-1">{travellers.ADULT + travellers.CHILD + travellers.INFANT}</span>
                                                <span className="text-sm me-1">Traveller(s)</span>
                                                <span><DownOutlined /></span>
                                            </h4>

                                            {
                                                tbox && (
                                                    <>
                                                        <div ref={boxRef} className="absolute top-full start-0 w-full min-w-[250px]">
                                                            <TravellersBox
                                                                travellers={travellers}
                                                                handleIncrement={handleIncrement}
                                                                handleDecrement={handleDecrement}
                                                            />
                                                        </div>
                                                    </>
                                                )
                                            }

                                        </div>
                                    </div>
                                    <div className={`col-span-1`}>
                                        <button onClick={searchFlight} className="w-full h-full bg-deep-orange-500 text-white rounded">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </>
                        ))
                    }

                </div>
            </section>
        </>
    )
}

export default SearchPage