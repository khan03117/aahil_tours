import React, { useEffect } from 'react'
import { classes } from '../../Utils'
import PropTypes from 'prop-types';
import ErrorSpan from '../../layout/ErrorSpan';

const GstDetails = ({ errors,  setGstDetails }) => {

    const [fdata, setFdata] = React.useState({});
    const handleFdata = (e) => {
        setFdata({ ...fdata, [e.target.name]: e.target.value });
    }
    // const [gerrors, setGerrors] = useState(errors);

    // const validation = () => {
    //     const err = [];
    //     if (!fdata?.registeredName) {
    //         err.push({ msg: "registeredName is required", path: "registeredName" });
    //     }
    //     if (!fdata?.gstNumber) {
    //         err.push({ msg: "gstNumber is required", path: "gstNumber" });
    //     }
    //     if (!fdata?.email) {
    //         err.push({ msg: "email is required", path: "email" });
    //     }
    //     if (!fdata?.mobile) {
    //         err.push({ msg: "mobile is required", path: "mobile" });
    //     }
    //     if (!fdata?.address) {
    //         err.push({ msg: "address is required", path: "address" });
    //     }
    //     if (err.length > 0) {
    //         setGerrors(err);
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    useEffect(() => {
        
            setGstDetails(fdata);
        
    }, [fdata]);

    return (
        <>
            <div className="container">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <label htmlFor="gstNumber">GST Number</label>
                        <input type="text" onChange={handleFdata} name="gstNumber" id="gstNumber" className={classes} />
                        <ErrorSpan errors={errors} path='gstNumber' />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="registeredName">Company Name</label>
                        <input type="text" onChange={handleFdata} name="registeredName" id="registeredName" className={classes} />
                        <ErrorSpan errors={errors} path='registeredName' />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="email">Company Email</label>
                        <input type="email" onChange={handleFdata} name="email" id="email" className={classes} />
                        <ErrorSpan errors={errors} path='email' />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="mobile">Company Mobile</label>
                        <input type="tel" onChange={handleFdata} name="mobile" id="mobile" className={classes} />
                        <ErrorSpan errors={errors} path='mobile' />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="address">Enter Address</label>
                        <input type="text" onChange={handleFdata} name="address" id="address" className={classes} />
                        <ErrorSpan errors={errors} path='address
                        ' />
                    </div>
                </div>
            </div>
        </>
    )
}
GstDetails.propTypes = {
    setGstDetails: PropTypes.func,
    errors : PropTypes.array
}

export default GstDetails