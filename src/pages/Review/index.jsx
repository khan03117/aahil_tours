import axios from 'axios';
import React from 'react'
import { REVIEW, token } from '../../Utils';
import { Link, useParams } from 'react-router-dom';
import defaultreview from './review.json';
import FareDetailsTable from './FareDetailsTable';
import Steps from './Steps';
import FlightDetailsReview from './FlightDetailsReview';
import Conditions from './Conditions';
const Review = () => {
    const { id } = useParams();
    const [reviews, setReview] = React.useState(defaultreview);
    const allids = id.split(',');
    const validateSearch = async () => {
        const data = {
            "priceIds": allids
        }
        const resp = await axios.post(REVIEW, data, {
            headers: {
                'Content-Type': 'application/json',
                'apikey': token
            },
        });
        console.log(resp)
        setReview(resp.data);
    }
    // const totalcount = Object.values(reviews.searchQuery.paxInfo).reduce((total, count) => total + count, 0);
    React.useEffect(() => {
        validateSearch();
    }, []);
    const conditions = reviews.conditions;
    return (
        <>

            <Steps />

            <section>
                <div className="container mx-auto">


                    <div className="w-full">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-8">
                                {
                                    reviews && reviews.tripInfos && reviews.tripInfos.length > 0 && reviews.tripInfos.map((infos) => (
                                        <>
                                            <FlightDetailsReview totalPriceList={infos.totalPriceList} flights={infos.sI} />
                                        </>
                                    ))
                                }
                            </div>
                            <div className="col-span-4">
                                <div className="w-full">
                                    <table border="1" cellPadding="10" cellSpacing="0" className='w-full text-start table-fixed'>
                                        <thead>
                                            <tr className='*:p-2 *:text-sm *:border *:border-blue-gray-200 *:border-b-0 *:text-start'>
                                                <th>Passenger Type</th>
                                                <th>Fare</th>
                                            </tr>
                                        </thead>
                                    </table>
                                    {
                                        reviews && reviews.tripInfos && reviews.tripInfos.length > 0 && reviews.tripInfos.map((infos) => (
                                            <>
                                                <FareDetailsTable totalPriceList={infos.totalPriceList} passengerCount={reviews.searchQuery.paxInfo} />
                                            </>
                                        ))
                                    }
                                    <table border="1" cellPadding="10" cellSpacing="0" className='w-full table-fixed text-start'>
                                        <tbody>
                                           
                                            <tr className='*:p-2 *:text-sm *:border *:border-blue-gray-200 *:border-b-0 *:text-start'>
                                                <td>Total  Fare</td>
                                                <td>₹ {reviews.totalPriceInfo.totalFareDetail.fC.TF  } </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="w-full border-t border-blue-gray-200"></div>
                                </div>
                                <div className="w-full">
                                    <Conditions conditions={conditions} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='fixed p-2 w-full bg-gray-300 bottom-0 start-0 z-[10599]'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="w-full flex justify-between">
                            <span></span>
                            <Link state={{ reviews: reviews }} to={'/passenger-details/' + reviews.bookingId} className="bg-primary text-white px-3 text-nowrap py-2">Add passenger</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review