import axios from 'axios';
import React from 'react'
import { BASE_URL, REVIEW, token } from '../../Utils';
import { Link, useParams } from 'react-router-dom';
import defaultreview from './review.json';
import FareDetailsTable from './FareDetailsTable';
import Steps from './Steps';
import FlightDetailsReview from './FlightDetailsReview';
import Conditions from './Conditions';
import ReviewLoading from './ReviewLoading';
const Review = () => {
    const { id } = useParams();
    const [reviews, setReview] = React.useState(defaultreview);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const allids = id.split(',');
    const save_price_id = async () => {
        await axios.post(BASE_URL + "api/v1/price-id", {travel_id : localStorage.getItem('search_id'),  "priceIds": allids }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
    }
    const save_review = async () => {
        await axios.post(BASE_URL + "api/v1/review", {travel_id : localStorage.getItem('search_id'),  "review": reviews }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })

    }
    
    const validateSearch = async () => {
        try {
            setLoading(true)
            const data = {
                "priceIds": allids
            }
            const resp = await axios.post(REVIEW, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': token
                },
            });
            if (resp.status != 400) {
                console.log(resp)
                setReview(resp.data);
                setLoading(false);             
               
            } else {
                setError('Request flight is not longer available.Please try different flight')
            }
        } catch (err) {
            setError('Request flight is not longer available.Please try different flight')
            if (err.response.data) {
                setError(err.response.data.errors[0].message);
            }
        }
    }
    // const totalcount = Object.values(reviews.searchQuery.paxInfo).reduce((total, count) => total + count, 0);
    React.useEffect(() => {
        validateSearch();
        save_price_id();
      
    }, []);
    React.useEffect(() => {
        save_review();
    }, [reviews]);
    const conditions = reviews.conditions;
    return (
        <>

            <Steps />
            {
                loading ? (<>
                    <ReviewLoading />
                </>) : (<>
                    {
                        error ? (
                            <>
                                <section>
                                    <div className="container mx-auto">
                                        <div className="grid grid-cols-5">
                                            <div className="col-span-2"></div>
                                            <div className="col-span-1">
                                                <div className="w-full rounded bg-gray-300 p-5">
                                                    <div className="text-center text-md">
                                                        <p>
                                                            {error}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        ) : (
                            <>
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
                                                                    <td>₹ {reviews.totalPriceInfo.totalFareDetail.fC.TF} </td>
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

                </>)
            }
        </>
    )
}

export default Review