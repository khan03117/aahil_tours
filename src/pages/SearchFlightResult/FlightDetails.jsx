import { ArrowRightOutlined } from '@ant-design/icons';
// import vistara from '../../assets/vistara.png'; // Replace with a dynamic source if needed
import alarm from '../../assets/alarm-clock.png'; // Replace with a dynamic source if needed
import PropTypes from 'prop-types';
import FlightInfo from './FlightInfo';

const FlightDetails = ({ flights }) => {
    return (
        <div className="w-full">
            {flights.map((flight, index) => {
                const { fD, da, aa, dt, at, duration } = flight;
                return (
                    <div key={index} className="w-full mb-4">
                        <div className="py-2">
                            <span className="text-xs">
                                {da.city} <ArrowRightOutlined /> {aa.city}
                            </span>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-1">
                                <FlightInfo code={fD.aI.code} fN={fD.fN} name={fD.aI.name} />
                            </div>
                            <div className="col-span-1">
                                <div className="w-full">
                                    <p className='font-bold text-lg'>{dt.split('T')[1]}</p>
                                    <p className='text-sm text-black font-light'>{da.city}</p>
                                    <p className='text-sm text-black font-light'>{new Date(dt).toLocaleDateString()}</p>
                                    <p className='text-sm text-black font-light'>Terminal - {da.terminal}</p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="w-full">
                                    <img src={alarm} alt="flight duration" className="h-[30px]" />
                                    <span className="text-sm text-black font-light">{Math.floor(duration / 60)}h {duration % 60}m</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="w-full">
                                    <p className='font-bold text-lg'>{at.split('T')[1]}</p>
                                    <p className='text-sm text-black font-light'>{aa.city}</p>
                                    <p className='text-sm text-black font-light'>{new Date(at).toLocaleDateString()}</p>
                                    <p className='text-sm text-black font-light'>Terminal - {aa.terminal}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
FlightDetails.propTypes = {
   
    flights: PropTypes.array
}


export default FlightDetails;
