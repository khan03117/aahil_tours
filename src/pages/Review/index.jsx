import axios from 'axios';
import React from 'react'
import { REVIEW, token } from '../../Utils';
import { Link, useParams } from 'react-router-dom';
import defaultreview from './review.json';
import FareDetailsTable from './FareDetailsTable';
import Steps from './Steps';
import FlightDetailsReview from './FlightDetailsReview';
const Review = () => {
    const { id } = useParams();
    const searchdata = localStorage.getItem('search');
    const { data } = JSON.parse(searchdata);
    const [reviews, setReview] = React.useState(defaultreview);
    const allids = id.split(',');
    console.log(allids);
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
        console.log(resp)
        setReview(resp.data);
    }
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
                        {
                            reviews && reviews.tripInfos && reviews.tripInfos.length > 0 && reviews.tripInfos.map((infos) => (
                                <>
                                    <div className="grid grid-cols-12 gap-5">
                                        <div className="col-span-8">
                                            <FlightDetailsReview totalPriceList={infos.totalPriceList} flights={infos.sI} />
                                        </div>
                                        <div className="col-span-4">
                                            <FareDetailsTable totalPriceList={infos.totalPriceList} passengerCount={data.searchQuery.paxInfo} />
                                            <div className="w-full">
                                                <div className="w-full my-2">
                                                    <h4 className="text-md font-bold text-primary mb-2 ">Note:-</h4>
                                                    <ul className='list-inside *:pb-1  *:ps-3 *:text-sm list-disc'>
                                                        <li>
                                                            Adult passenger date of birth is  {conditions.dob.adobr ? 'required' : 'not required'}
                                                        </li>
                                                        <li>
                                                            Child passenger date of birth is  {conditions.dob.cdobr ? 'required' : 'not required'}
                                                        </li>
                                                        <li>
                                                            Infant passenger date of birth is  {conditions.dob.idobr ? 'required' : 'not required'}
                                                        </li>
                                                        <li>
                                                            GST details is {conditions.gst?.gstappl ? 'applicable and not mandatory information' : 'not required'}
                                                        </li>
                                                        <li>
                                                            Emergency contact number is {conditions.iecr ? 'mandatory' : 'not required'}
                                                        </li>
                                                        <li>
                                                            Passport number is {conditions?.pcs ? 'mandatory' : 'not required'}
                                                        </li>
                                                        <li>
                                                            {conditions.isa ? 'Seat Map Available' : 'Seat Map Not Available'}
                                                        </li>
                                                        <li>
                                                            {conditions.st / 60} minutes to Book
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </section>
            <section className='fixed p-2 w-full bg-gray-300 bottom-0 start-0 z-[10599]'>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1">
                            <div className="w-full flex justify-between">
                                <span></span>
                                <Link state={{reviews : reviews}} to={'/passenger-details/'+reviews.bookingId} className="bg-primary text-white px-3 text-nowrap py-2">Add passenger</Link>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Review