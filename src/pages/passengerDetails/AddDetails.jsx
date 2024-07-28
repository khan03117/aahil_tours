import React, { useEffect } from 'react'
import DatePicker from "react-datepicker";
import { classes, formatDate } from '../../Utils';
import PropTypes from 'prop-types';
import { EditOutlined } from '@ant-design/icons';
const AddDetails = ({ onsubmit, type, show, id }) => {
    const tis = ['Mr', 'Master', 'Ms'];
    const [startDate, setStartDate] = React.useState(new Date());
    const handleDate = (date) => {
        setStartDate(date);
    }
    const [pdata, setPdata] = React.useState({});
    const handleData = (e) => {
        const { value, name } = e.target;
        setPdata((prevData) => ({ ...prevData, [name]: value }));
    }
    const handleSubmit = () => {
        const obj = { ...pdata };
        obj['pt'] = type;
        obj['dob'] = formatDate(startDate);
        onsubmit(obj);
    }
    useEffect(() => {
        console.log(pdata)
    }, [pdata])


    return (
        <>
            <div className="container groupDetails">
                <div className="grid grid-cols-4 gap-4 *:text-sm ">
                    <div className="col-span-1">
                        <label htmlFor="ti">Select Title</label>
                        <select onChange={handleData} name="ti" id="ti" className={classes}>
                            <option value="">--Select---</option>
                            {
                                tis.map(ti => (
                                    <>
                                        <option value={ti}>{ti}.</option>
                                    </>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="fN">Enter First Name</label>
                        <input type="text" onChange={handleData} name="fN" id="fN" className={classes} />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="lN">Enter Last Name</label>
                        <input type="text" onChange={handleData} name="lN" id="lN" className={classes} />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="lN">Enter Date of Birth</label>
                        <DatePicker showYearDropdown className={classes} selected={startDate} monthsShown={1} onChange={(date) => handleDate(date)} />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="pNat">Passport Nationality</label>
                        <select name="pNat" onChange={handleData} id="pNat" className={classes}>
                            <option value="">--Select---</option>

                        </select>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="pNum">Passport Number</label>
                        <input type="text" onChange={handleData} name="pNum" id="pNum" className={classes} />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="eD">Passport Expiring at</label>
                        <input type="date" onChange={handleData} name="eD" id="eD" className={classes} />
                    </div>
                    <div className="col-span-1">
                        {
                            show ? (
                                <>
                                    <button onClick={handleSubmit} data-id={id} className="w-full bg-primary rounded text-white px-4 py-2 text-sm block mt-8">
                                        Save & Next
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button data-id={id} className="w-full bg-primary rounded text-white px-4 py-2 text-sm block mt-8">
                                      <EditOutlined/>  Edit
                                    </button>
                                </>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
AddDetails.propTypes = {
    tis: PropTypes.arrayOf(PropTypes.string),
    handleData: PropTypes.func,
    onsubmit: PropTypes.func,
    type: PropTypes.string,
    show: PropTypes.bool,
    id: PropTypes.number

}
export default AddDetails