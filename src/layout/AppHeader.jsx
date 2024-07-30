// import React from 'react'
import { Link } from 'react-router-dom'

const AppHeader = () => {
    return (
        <>
            <section className="bg-white p-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="w-full">
                            <nav className='flex items-center justify-between'>
                                <Link to={'/'} >
                                    <img src="https://aahiltours.com/public/assets/img/1024x1024_edited.webp" alt="" className="size-16" />
                                </Link>
                                <div className="inline-flex mx-auto items-center gap-3">
                                    <ul className="list-none flex items-center gap-5">
                                        <li className="text-sm font-light text-gray-800 hover:text-primary transition duration">
                                            <a href="">Home</a>
                                        </li>
                                        <li className="text-sm font-light text-gray-800 hover:text-primary transition duration">
                                            <a href="">Flights</a>
                                        </li>
                                        <li className="text-sm font-light text-gray-800 hover:text-primary transition duration">
                                            <a href="">Hotels</a>
                                        </li>
                                        <li className="text-sm font-light text-gray-800 hover:text-primary transition duration">
                                            <a href="">Customize Trip</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppHeader