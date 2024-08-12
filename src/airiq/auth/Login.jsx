import React from 'react'
import { Button, Input } from "@material-tailwind/react"
import { postData } from '../../Utils';

const Login = () => {
    const [fdata, setFdata] = React.useState({ username: "", password: "" });
    const handleFdata = (e) => {
        setFdata((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const login = async (e) => {
        e.preventDefault();
        try {
            const item = await postData('agency/login', fdata);
            const token = item.resp;
            localStorage.setItem('agency', item.data);
            localStorage.getItem('token', token);
            window.location.href = '/agency/dashboard';
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-2">

                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-8">
                            <div className="w-full">
                                <img src="https://5.imimg.com/data5/JU/SF/QE/SELLER-12078893/fly-ticket-500x500.jpg" alt="" className="max-w-full" />
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="w-full  rounded shadow-sm shadow-blue-gray-400 p-4 border border-blue-gray-300">
                                <h2 className="text-2xl text-blue-gray-900 font-bold mb-4">Agency Login</h2>
                                <div className="w-full">
                                    <form onSubmit={login} className="w-full">
                                        <div className="w-full mb-4">
                                            <Input type="text" name='username' onChange={handleFdata} label="Enter Username" required />
                                        </div>
                                        <div className="w-full mb-4">
                                            <Input type="password" name='password' onChange={handleFdata} label="Enter Password" required />
                                        </div>
                                        <div className="w-full">
                                            <Button type="submit" value={'Login'} color="blue" fullWidth variant="gradient" >Login</Button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="w-full p-4 bg-primary text-white">
                                <p className="text-sm">Copyright 2022. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login