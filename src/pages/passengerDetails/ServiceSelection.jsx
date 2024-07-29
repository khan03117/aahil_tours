import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const ServiceSelection = ({ tripInfos, paxInfo, routeInfos, mealsave }) => {

    const [tripIndex, setTid] = React.useState(0);
    const [segmentIndex, setSid] = React.useState(0);
    const [segment, setSegment] = React.useState(tripInfos[tripIndex].sI[segmentIndex]);
    const handleTindex = (tid, sid) => {
        setTid(tid);
        setSid(sid);
        setSegment(tripInfos[tid].sI[sid]);
    }
    const [meals, setMeals] = React.useState([]);
    const handlemeal = (e) => {
        const code = e.target.value;
        const ptype = e.target.dataset.type;
        const pindex = e.target.dataset.index;
        const found = meals.findIndex(obj => obj.type == ptype && obj.index == pindex && obj.key == segment.id);
        if(found > -1){
            const mrr = [...meals];
            mrr[found].code = code;
            setMeals([...mrr]);
        }else{
            const obj = {
                "type" : ptype,
                "index" : pindex,
                "key": segment.id,
                "code": code
            }
            setMeals([...meals, obj]);
        }
     
    }
    React.useEffect(() => {
        const filtered = meals.map(obj => ({
            "key": obj.key,
            "code": obj.code
        }));
        mealsave(filtered);
    }, [meals]);
    return (
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
            {
                segment?.ssrInfo && (
                    <>
                        {Object.keys(paxInfo).filter(key => key !== "INFANT").map((paxType) => (
                            [...Array(paxInfo[paxType])].map((_, paxIndex) => (

                                <div key={`${tripIndex}-${segmentIndex}-${paxType}-${paxIndex}`} className="w-full flex justify-between py-3">
                                    <div>
                                        <p className="text-black">{paxType.toUpperCase()} {paxIndex + 1}</p>
                                    </div>
                                    <div className="div">
                                        <label htmlFor={`meal-select-${tripIndex}-${segmentIndex}-${paxType}-${paxIndex}`} className="block text-sm text-gray-400 w-full">Select Meal</label>
                                        <select  data-type={paxType} data-index={paxIndex} onChange={handlemeal} id={`meal-select-${tripIndex}-${segmentIndex}-${paxType}-${paxIndex}`} name={`meal-select-${tripIndex}-${segmentIndex}-${paxType}-${paxIndex}`} className="border-b border-gray-600 text-sm outline-none w-full">
                                            {segment.ssrInfo.MEAL ? segment.ssrInfo.MEAL.map((meal, mealIndex) => (
                                                <option key={mealIndex} value={meal.code} selected={meals.find(obj => obj.type == paxType && obj.index == paxIndex && obj.key == segment.id)?.code == meal.code}>{meal.desc}</option>
                                            )) : (
                                                <option value="no-meal">No meal options available</option>
                                            )}
                                        </select>
                                    </div>

                                </div>
                            ))
                        ))}
                    </>
                )
            }

        </div>
    );
};

ServiceSelection.propTypes = {
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
    paxInfo: PropTypes.shape({
        ADULT: PropTypes.number.isRequired,
        CHILD: PropTypes.number.isRequired,
        INFANT: PropTypes.number.isRequired
    }).isRequired,
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
    mealsave : PropTypes.func
};

export default ServiceSelection;
