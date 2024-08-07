import React, { useEffect } from 'react'
import DatePicker from "react-datepicker";
import { classes, formatDate, getData, tis } from '../../Utils';
import PropTypes from 'prop-types';
import { EditOutlined } from '@ant-design/icons';
const AddDetails = ({ onsubmit, type, show, id, conditions }) => {
    const [errors, setErrors] = React.useState([]);
    const [countries, setCountries] = React.useState([]);
    const [keyword, setKeyword] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [country, setCountry] = React.useState({});
    const handleOpen = () => {
        setOpen(!open);
    }
    const handleSetCountry = (obj) => {
        setCountry(obj);
        setPdata((prevData) => ({ ...prevData, ['pNat']: obj._id }));
        handleOpen();
    }
    const handleCountrySearch = (e) => {
        const val = e.target.value;
        setKeyword(val);
    }
    const searchCountry = async () => {
        const items = await getData('country?key=' + keyword);
        setCountries(items.data);
    }
    useEffect(() => {
        searchCountry();
    }, [keyword]);
    const tarr = [
        {
            type: "ADULT",
            dob_key: "adobr"
        },
        {
            type: "CHILD",
            dob_key: "cdobr"
        },
        {
            type: "INFANT",
            dob_key: "idobr"
        }
    ];
    const dk = tarr.find(obj => obj.type == type)?.dob_key;

    const [startDate, setStartDate] = React.useState();
    const handleDate = (date) => {
        setStartDate(date);
    }
    const [pdata, setPdata] = React.useState({});
    const handleData = (e) => {
        const { value, name } = e.target;
        setPdata((prevData) => ({ ...prevData, [name]: value }));
    }
    const validation = () => {
        const err = [];
        if (!pdata.ti) {
            err.push({ path: "ti", message: "Title is required." })
        }
        if (!pdata.fN) {
            err.push({ path: "fN", message: "First Name is required." })
        }
        if (!pdata.lN) {
            err.push({ path: "lN", message: "Last Name is required." })
        }
        if (conditions.dob[dk]) {
            if (!startDate) {
                err.push({ path: "dob", message: "Date of Birth is required." })
            }
        }
        setErrors(err);
        if (err.length > 0) {
            return false;
        } else {
            return true;
        }

    }
    const handleSubmit = () => {
        if (!validation()) {
            return;
        }
        const obj = { ...pdata };
        obj['pt'] = type;
        if (conditions.dob[dk]) {
            obj['dob'] = formatDate(startDate);
        }

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
                        <span className="text-red-600 text-xs block">
                            {
                                errors.find(obj => obj.path == "ti")?.message
                            }
                        </span>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="fN">Enter First Name</label>
                        <input type="text" onChange={handleData} name="fN" id="fN" className={classes} />
                        <span className="text-red-600 text-xs block">
                            {
                                errors.find(obj => obj.path == "fN")?.message
                            }
                        </span>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="lN">Enter Last Name</label>
                        <input type="text" onChange={handleData} name="lN" id="lN" className={classes} />
                        <span className="text-red-600 text-xs block">
                            {
                                errors.find(obj => obj.path == "lN")?.message
                            }
                        </span>
                    </div>

                    {
                        conditions.dob[dk] && (
                            <>
                                <div className="col-span-1">
                                    <label htmlFor="lN">Enter Date of Birth</label>
                                    <DatePicker showYearDropdown className={classes} selected={startDate} monthsShown={1} onChange={(date) => handleDate(date)} />
                                    <span className="text-red-600 text-xs block">
                                        {
                                            errors.find(obj => obj.path == "dob")?.message
                                        }
                                    </span>
                                </div>

                            </>
                        )
                    }


                    {
                        conditions?.pcs && (
                            <>
                                <div className="col-span-1 relative">
                                    <label htmlFor="pNat">Passport Nationality</label>
                                    <div onClick={handleOpen} className={classes + ' cursor-pointer'}>{country?.country ?? "Select"}</div>
                                    {
                                        open && (
                                            <>
                                                <div className="absolute top-full w-full start-0 bg-white border border-blue-gray-200">
                                                    <input type="text" placeholder='Search country' name="searchcountry" onChange={handleCountrySearch} id="searchcountry" className={classes} />
                                                    <ul className='list-none max-h-72 overflow-y-auto overflow-x-hidden'>
                                                        {
                                                            countries.map((itm) => (
                                                                <>
                                                                    <li>
                                                                        <button onClick={() => handleSetCountry(itm)} className='text-start w-full text-sm p-2  bg-gray-200'>{itm.country}</button>
                                                                    </li>
                                                                </>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </>
                                        )
                                    }


                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="pNum">Passport Number</label>
                                    <input type="text" onChange={handleData} name="pNum" id="pNum" className={classes} />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="eD">Passport Expiring at</label>
                                    <input type="date" onChange={handleData} name="eD" id="eD" className={classes} />
                                </div>
                            </>
                        )
                    }

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
                                        <EditOutlined />  Edit
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
    id: PropTypes.number,
    conditions: PropTypes.shape({
        ffas: PropTypes.arrayOf(PropTypes.string).isRequired,
        isa: PropTypes.bool.isRequired,
        dob: PropTypes.shape({
            adobr: PropTypes.bool.isRequired,
            cdobr: PropTypes.bool.isRequired,
            idobr: PropTypes.bool.isRequired
        }).isRequired,
        iecr: PropTypes.bool.isRequired,
        dc: PropTypes.shape({
            ida: PropTypes.bool.isRequired,
            idm: PropTypes.bool.isRequired
        }).isRequired,
        pcs: PropTypes.shape({
            ida: PropTypes.bool.isRequired,
            idm: PropTypes.bool.isRequired
        }).isRequired,
        ipa: PropTypes.bool.isRequired,
        addOns: PropTypes.shape({
            isbpa: PropTypes.bool.isRequired
        }).isRequired,
        isBA: PropTypes.bool.isRequired,
        st: PropTypes.number.isRequired,
        sct: PropTypes.string.isRequired,
        gst: PropTypes.shape({
            gstappl: PropTypes.bool.isRequired,
            igm: PropTypes.bool.isRequired
        }).isRequired
    }).isRequired
}
export default AddDetails