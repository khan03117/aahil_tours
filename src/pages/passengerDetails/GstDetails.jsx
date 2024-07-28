// import React from 'react'
import { classes } from '../../Utils'

const GstDetails = () => {

    return (
        <>
            <div className="container">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <label htmlFor="gstNumber">GST Number</label>
                        <input type="text" name="gstNumber" id="gstNumber" className={classes} />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="registeredName">Company Name</label>
                        <input type="text" name="registeredName" id="registeredName" className={classes} />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="email">Company Email</label>
                        <input type="email" name="email" id="email" className={classes} />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="mobile">Company Mobile</label>
                        <input type="tel" name="mobile" id="mobile" className={classes} />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="address">Enter Address</label>
                        <input type="text" name="address" id="address" className={classes} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GstDetails