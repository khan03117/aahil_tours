//import React from 'react'

import { Checkbox } from "@material-tailwind/react"

const Filter = () => {
    return (
        <>
            <div className="w-full border border-gray-400 p-3 bg-white rounded-lg">
                <div className="w-full border-b border-gray-400">
                    <h1 className="text-black text-lg font-bold">Filter</h1>
                </div>
                <h1 className="text-black text-sm font-bold py-2">Popular Filter</h1>
                <ul className="*:py-1 *:text-sm">
                    {
                        ["Nonstop", "Morning Departure", "Indigo", "Spicejet", "Air India", "Vistara"].map((itm) => (
                            <>
                                <li>
                                    <Checkbox label={itm} />
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

export default Filter