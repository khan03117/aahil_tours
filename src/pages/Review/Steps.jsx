// import React from 'react'
import { IoIosAirplane } from "react-icons/io";
import { TfiWheelchair } from "react-icons/tfi";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import Step from "./Step";
const Steps = () => {
    return (
        <section className="p-4 bg-gray-200 mb-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-4">
                    <div className="col-span-1 last:border-none border-e border-blue-gray-600">
                        <Step icon={<IoIosAirplane />} title="First Step" desc="Flight Itinerary" />
                    </div>
                   <div className="col-span-1 last:border-none border-e border-blue-gray-600">
                        <Step icon={<TfiWheelchair />} title="Second Step" desc="Passenger Details" />
                    </div>
                   <div className="col-span-1 last:border-none border-e border-blue-gray-600">
                        <Step icon={<MdOutlineRateReview />} title="Third Step" desc="Review Details" />
                    </div>
                   <div className="col-span-1 last:border-none border-e border-blue-gray-600">
                        <Step icon={<MdOutlinePayment />} title="Final Step" desc="Make Payment" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps