// import React from 'react'

import FromField from "./FromField"

const Home = () => {
    return (
        <>
            <section className="bg-primary p-10">


                <div className="container mx-auto">
                    <div className="grid grid-cols-8 *:border-e *:border-blue-gray-100">
                        <div className="col-span-2">
                            <FromField label="From" />
                        </div>
                        <div className="col-span-2">
                            <FromField label="To" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home