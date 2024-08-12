import React, { useState } from 'react'
import { formatDate, postData } from '../../../Utils'
import FromField from '../../../pages/Home/FromField'
import DateField from '../../../pages/Home/DateField'
import { useNavigate } from 'react-router-dom'

const SearchPage = () => {

    const boxRef = React.useRef(null);

    const [trip, setTrip] = useState(1)

    const [rows, setRows] = useState(1);
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


    const handletrip = (itm) => {
        setTrip(itm)
        if (itm == 3) {
            setRows((prev) => (prev > 2 ? prev : 2));
        } else {
            setRows(1);
        }
    }
    const navigate = useNavigate();
    const searchFlight = async () => {
        try {


            let routeInfos = [];


            routeInfos = fdata.map((itm) => {
                return {
                    origin: { code: itm.From },
                    destination: { code: itm.To },
                    departure_date: formatDate(itm?.DepartureDate ?? new Date()),
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
            const appid = localStorage.getItem('appId');
            await postData('search-query', { ...data, appId: appid, }).then((resp) => {
                if (resp.success == "1") {
                    localStorage.setItem('search_id', resp.data._id);
                    localStorage.setItem('search', JSON.stringify({ data: data, trip: trip }));
                    navigate('/search-flight')
                }

            })
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
                                <div key={a} className="grid mb-2 border-b border-blue-gray-100 last:border-none lg:grid-cols-6 grid-cols-3  *:border-e *:border-blue-gray-100">
                                    <div className="lg:col-span-2 col-span-1 rounded-s">
                                        <FromField handleFdata={handleFdata} id={index} open={open} label="From" />
                                    </div>
                                    <div className="lg:col-span-2 col-span-1">
                                        <FromField handleFdata={handleFdata} id={index} open={open} label="To" />
                                    </div>
                                    <div className="lg:col-span-1 col-span-1">
                                        <DateField handleFdata={handleFdata} id={index} handletrip={handletrip} disabled={false} label={"Departure Date"} />
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