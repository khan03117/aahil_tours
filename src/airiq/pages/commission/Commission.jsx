import React from 'react'
import FormLabel from './FormLabel';
import ErrorSpan from '../../../layout/ErrorSpan';
import { BASE_URL, formcontrol,  btn } from '../../../Utils';
import axios from 'axios';
import AlertBox from '../../../components/AlertBox';

const Commission = () => {
    const [errors, setErrors] = React.useState([]);
    const itinial = { type: "", adult: 0, child: 0, infant: 0 }
    const [fdata, setFdata] = React.useState(itinial);
    const [list, setList] = React.useState([]);
    const [msg, setMsg] = React.useState('');
    const [status, setStatus] = React.useState('');
    const token = localStorage.getItem('agency');
    const inputhandler = (e) => {
        const { value, name } = e.target;
        setFdata((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const validation = () => {
        const err = [];
        if (!fdata?.type) {
            err.push({
                path: "type",
                msg: "Type is required"
            });
        }
        if (!fdata?.adult) {
            err.push({
                path: "adult",
                msg: "adult is required"
            });
        }
        if (!fdata?.child) {
            err.push({
                path: "child",
                msg: "child is required"
            });
        }
        if (!fdata?.infant) {
            err.push({
                path: "infant",
                msg: "infant is required"
            });
        }
        setErrors(err);
        if (err.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    const savedata = async () => {
        if (validation()) {
            const data = { ...fdata };
            await axios.post(BASE_URL + 'api/v1/commission', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then((resp) => {
                setStatus(resp.data.status);
                setMsg(resp.data.message);
            })
            getdata();
            setFdata(itinial)
        }

    }
    const getdata = async () => {
        const item = await axios.get(BASE_URL + 'api/v1/commission', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        setList(item.data.data);
    }
    React.useEffect(() => {
        getdata();
    }, [])
    return (
        <>
            <section className='py-5'>
                <div className="container mx-auto">

                    <div className="w-full">
                        {
                            msg && (
                                <>
                                    <AlertBox message={msg} status={status} />
                                </>
                            )
                        }
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label='Select Trip Type' />
                                <select name="type" onChange={inputhandler} className={formcontrol}>
                                    <option value="">---Select Trip Type---</option>
                                    <option value="Domestic">Domestic</option>
                                    <option value="International">International</option>
                                </select>
                                <ErrorSpan errors={errors} path={'type'} />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Adult" />
                                <input type="text" name="adult" id="adult" className={formcontrol} onChange={inputhandler} />
                                <ErrorSpan errors={errors} path={'adult'} />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Child" />
                                <input type="text" name="child" id="child" className={formcontrol} onChange={inputhandler} />
                                <ErrorSpan errors={errors} path={'child'} />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Infant" />
                                <input type="text" name="infant" id="infant" className={formcontrol} onChange={inputhandler} />
                                <ErrorSpan errors={errors} path={'infant'} />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full mt-5">
                                <button onClick={savedata} className={btn}>Save</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-1 mt-5">
                    <div className="col-span-1">
                        <div className="w-full">
                            <table className="w-full">
                                <thead>
                                    <tr className='*:text-start *:text-sm *:border *:border-gray-500 *:p-2' >
                                        <th>Sr No</th>
                                        <th>Type</th>
                                        <th>Adult</th>
                                        <th>Child</th>
                                        <th>Infant</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list.map((litm, index) => (
                                            <>
                                                <tr className='*:text-start *:text-sm *:border *:border-gray-500 *:p-2' >
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        {litm.type}
                                                    </td>
                                                    <td>
                                                    {litm.adult}
                                                    </td>
                                                    <td>
                                                    {litm.child}
                                                    </td>
                                                    <td>
                                                    {litm.infant}
                                                    </td>
                                                    <td>
                                                        <button className={btn + ' bg-red-800'}>Delete</button>
                                                    </td>
                                                    
                                                </tr>
                                            </>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Commission