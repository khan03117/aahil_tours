import axios from 'axios';
import React from 'react'
import { REVIEW, token } from '../../Utils';
import { useParams } from 'react-router-dom';
// import defaultreview from './review.json';
import FlightDetails from '../SearchFlightResult/FlightDetails';
import FareDetails from '../SearchFlightResult/FareDetails';
const Review = () => {
    const { id } = useParams();
    console.log(id);
    const searchdata = localStorage.getItem('search');
    const { data } = JSON.parse(searchdata);
    const [reviews, setReview] = React.useState({})
    const validateSearch = async () => {
        const data = {
            "priceIds"  : [id]
        }
        const resp = await axios.post(REVIEW, data, {
            headers: {
                'Content-Type': 'application/json',
                'apikey': token
            },
        });
        setReview(resp.data);
    }
    React.useEffect(() => {
        validateSearch();
    }, []);
    return (
        <>
            <section>
                <div className="container">
                    <div className="w-full">
                        {
                            reviews.tripInfos.map((infos) => (
                                <>
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-8">
                                        <FlightDetails flights={infos.sI} />
                                        </div>
                                        <div className="col-span-4">
                                            <FareDetails id={id} pricelist={infos.totalPriceList}  paxinfo={data.searchQuery.paxInfo} />
                                        </div>
                                    </div>
                                    
                                </>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Review