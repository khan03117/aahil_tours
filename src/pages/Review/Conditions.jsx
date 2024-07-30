// import React from 'react'
import PropTypes from 'prop-types';
const Conditions = ({conditions}) => {
    return (
        <>
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
        </>
    )
}

Conditions.propTypes = {
    conditions: PropTypes.object.isRequired
}
export default Conditions