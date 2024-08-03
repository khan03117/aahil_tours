//import React from 'react'

import { Checkbox } from "@material-tailwind/react"
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
const Filter = ({ handleStops }) => {
    const [stops, setStops] = useState([0,1,2,3,4,5,6,7,8,9]);
    const fltrr = [
        {
            title: "Nonstop",
            value: 0
        },
        {
            title: "1 Stop",
            value: 1
        },
        {
            title: "2 Stop",
            value: 2
        },
        {
            title: "2+ Stop",
            value: 3
        }
    ];
    const addToStopFilter = (id) => {
        if (stops.includes(id)) {
            setStops(stops.filter((stop) => stop !== id));
        } else {
            setStops([...stops, id]);
        }
    }
    useEffect(() => {
        handleStops(stops);
    }, [stops]);
    return (
        <>
            <div className="w-full border border-gray-400 p-3 bg-white rounded-lg">
                <div className="w-full border-b border-gray-400">
                    <h1 className="text-black text-lg font-bold">Filter</h1>
                </div>
                <h1 className="text-black text-sm font-bold py-2">Popular Filter</h1>
                <ul className="*:py-1 *:text-sm">
                    {
                        [...fltrr].map((itm) => (
                            <>
                                <li>
                                    <Checkbox checked={stops.includes(itm.value)} onClick={() => addToStopFilter(itm.value)} label={itm.title} />
                                </li>
                            </>
                        ))
                    }
                </ul>
                <div>
                    {
                        [""]
                    }
                </div>
            </div>
        </>
    )
}
Filter.propTypes = {
    fltrr: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    })).isRequired,
    handleStops: PropTypes.func

}
export default Filter