import axios from 'axios';
import React from 'react'
import { useLocation } from 'react-router-dom'
import { AIRIQ, AIRIQKEY } from '../../../Utils';

const SearchResult = () => {
    const { state } = useLocation();
    console.log(state);
    const token = localStorage.getItem('token');
    const getFlights = async () => {

        const data = JSON.stringify({
            "origin": "DEL",
            "destination": "DXB",
            "departure_date": "2024/10/15",
            "adult": 1,
            "child": 1,
            "infant": 0
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://omairiq.azurewebsites.net/search/', // Use relative URL when proxying
            headers: {
                'api-key': 'NTMzNDUwMDpBSVJJUSBURVNUIEFQSToxODkxOTMwMDM1OTk2OlFRYjhLVjNFMW9UV05RY1NWL0Vtcm9UYXFKTSs5dkZvaHo0RzM4WWhwTDhsamNqR3pPN1dJSHhVQ2pCSzNRcW0=',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJqdGkiOiJlZmUxMjdiMS0zZGY1LTQ3ZDktOTc2ZS0xNjUyYjM5NTY1NmMiLCJ1c2VyTmFtZSI6Ijk1NTUyMDIyMDIiLCJhcGlrZXkiOiJOVE16TkRVd01EcEJTVkpKVVNCVVJWTlVJRUZRU1RveE9Ea3hPVE13TURNMU9UazJPbEZSWWpoTFZqTkZNVzlVVjA1UlkxTldMMFZ0Y205VVlYRktUU3M1ZGtadmFIbzBSek00V1dod1REaHNhbU5xUjNwUE4xZEpTSGhWUTJwQ1N6TlJjVzA9IiwiZXhwIjoxNzIzODE3OTQ2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjU2MTczLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTYxNzMvIn0.ay0TeRxg5j3HiycQXnwq4ThXmnkiSG-5NQ1WNJ_WEuo',
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            console.log(JSON.stringify(response.data));
        } catch (error) {
            console.error(error);
        }




    }
    React.useEffect(() => {
        getFlights();
    }, [])
    return (
        <>
        </>
    )
}

export default SearchResult