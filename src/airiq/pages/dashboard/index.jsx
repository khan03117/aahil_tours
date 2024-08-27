import AppCalendar from "../../layout/AppCalendar"
import AppWorldMap from "../../layout/AppWorldMap"
import { FaTicketAlt } from "react-icons/fa";

const Dashboard = () => {
    return (
        <>
            <section>
                <div className="container mb-4">
                    <div className="grid grid-cols-4 gap-5">
                        <div className="col-span-1">
                            <div className="w-full h-full rounded shadow p-5 text-primary bg-primary/10">
                                <h4 className="flex gap-4 mb-3"><FaTicketAlt className="mb-0 text-3xl p-1 border border-white rounded-full shadow" /> Total Booking</h4>
                                <p className="font-bold text-lg">1000</p>
                                <small className="text-xs block">Since This month</small>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full h-full rounded shadow p-5 text-pink-500 bg-pink-200/20">
                                <h4 className="flex gap-4 mb-3"><FaTicketAlt className="mb-0 text-3xl p-1 border border-white rounded-full shadow" /> Total Booking</h4>
                                <p className="font-bold text-lg">1000</p>
                                <small className="text-xs block">Since This month</small>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full h-full rounded shadow p-5 text-yellow-800 bg-yellow-300/10">
                                <h4 className="flex gap-4 mb-3"><FaTicketAlt className="mb-0 text-3xl p-1 border border-white rounded-full shadow" /> Total Booking</h4>
                                <p className="font-bold text-lg">1000</p>
                                <small className="text-xs block">Since This month</small>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full h-full rounded shadow p-5 text-purple-600 bg-purple-300/10">
                                <h4 className="flex gap-4 mb-3"><FaTicketAlt className="mb-0 text-3xl p-1 border border-white rounded-full shadow" /> Total Booking</h4>
                                <p className="font-bold text-lg">1000</p>
                                <small className="text-xs block">Since This month</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="grid grid-cols-12 gap-5">

                        <div className="col-span-6">
                            <div className="w-full shadow">
                                <AppCalendar />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="w-full p-3">
                                <AppWorldMap />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard