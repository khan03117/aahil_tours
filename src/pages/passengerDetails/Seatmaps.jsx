import React from 'react'
import PropTypes from 'prop-types';
import { ArrowRightOutlined } from '@ant-design/icons';
const Seatmaps = ({tripInfos, routeInfos}) => {
    const [tripIndex, setTid] = React.useState(0);
    const [segmentIndex, setSid] = React.useState(0);
    const [segment, setSegment] = React.useState(tripInfos[tripIndex].sI[segmentIndex]);
    const handleTindex = (tid, sid) => {
        setTid(tid);
        setSid(sid);
        setSegment(tripInfos[tid].sI[sid]);
    }
    console.log(segment);
    return (
        <>
            <div className="container">
                <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <div className="w-full">
                            <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                <p className="text-black text-md border-b border-gray-400">Add Baggage, Meal & other services to your Travel</p>
                                <div className="flex gap-4 my-3">
                                    {tripInfos.map((trip, tindex) => (
                                        trip.sI.map((segment, sindex) => (
                                            <>
                                                <button onClick={() => handleTindex(tindex, sindex)} className={`text-black  p-2 ${(tindex == tripIndex && sindex == segmentIndex) ? 'bg-primary text-white' : 'bg-gray-300 text-black'} rounded  text-start text-sm`}>
                                                    <p>
                                                        {segment?.da.city} <ArrowRightOutlined /> {segment?.aa.city}
                                                    </p>
                                                    <span className={`text-sm block text-black/40`}> on {new Date(routeInfos[tindex].travelDate).toDateString()}</span>
                                                </button>
                                            </>
                                        ))
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
Seatmaps.propTypes = {
    tripInfos: PropTypes.arrayOf(
        PropTypes.shape({
            sI: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    fD: PropTypes.shape({
                        aI: PropTypes.shape({
                            code: PropTypes.string.isRequired,
                            name: PropTypes.string.isRequired,
                            isLcc: PropTypes.bool.isRequired
                        }).isRequired,
                        fN: PropTypes.string.isRequired,
                        eT: PropTypes.string.isRequired
                    }).isRequired,
                    stops: PropTypes.number.isRequired,
                    so: PropTypes.arrayOf(PropTypes.any).isRequired,
                    duration: PropTypes.number.isRequired,
                    da: PropTypes.shape({
                        code: PropTypes.string.isRequired,
                        name: PropTypes.string.isRequired,
                        cityCode: PropTypes.string.isRequired,
                        city: PropTypes.string.isRequired,
                        country: PropTypes.string.isRequired,
                        countryCode: PropTypes.string.isRequired,
                        terminal: PropTypes.string
                    }).isRequired,
                    aa: PropTypes.shape({
                        code: PropTypes.string.isRequired,
                        name: PropTypes.string.isRequired,
                        cityCode: PropTypes.string.isRequired,
                        city: PropTypes.string.isRequired,
                        country: PropTypes.string.isRequired,
                        countryCode: PropTypes.string.isRequired
                    }).isRequired,
                    ssrInfo: PropTypes.shape({
                        MEAL: PropTypes.arrayOf(
                            PropTypes.shape({
                                code: PropTypes.string.isRequired,
                                amount: PropTypes.number.isRequired,
                                desc: PropTypes.string.isRequired
                            })
                        )
                    }).isRequired,
                    ac: PropTypes.arrayOf(PropTypes.any).isRequired
                }).isRequired
            ).isRequired
        }).isRequired
    ).isRequired,
    routeInfos: PropTypes.arrayOf(
        PropTypes.shape({
            fromCityOrAirport: PropTypes.shape({
                code: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                cityCode: PropTypes.string.isRequired,
                city: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
                countryCode: PropTypes.string.isRequired
            }).isRequired,
            toCityOrAirport: PropTypes.shape({
                code: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                cityCode: PropTypes.string.isRequired,
                city: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
                countryCode: PropTypes.string.isRequired
            }).isRequired,
            travelDate: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    
};
export default Seatmaps