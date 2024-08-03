import PropTypes from 'prop-types';
import LabelSearch from './LabelSearch';
import { useRef, useState } from 'react';
import React from 'react';
import { getData } from '../../Utils';
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
const FromField = ({ label, id, handleFdata }) => {
  const [keyword, setKeyword] = React.useState('');
  const [open, setOpen] = useState(false);
  const [cities, setCities] = React.useState([]);
  const [code, setCode] = React.useState({ name: "", code: "" });
  const handleOpen = () => {
    setOpen(!open);
  }
  const handleKeyWord = (e) => {
    const val = e.target.value;
    setKeyword(val);
  }
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };
  const getdata = async () => {
    const items = await getData(`airports?key=${keyword}`);
    setCities(items.data);
  }
  React.useEffect(() => {
    getdata();
  }, [keyword]);
  const handleCode = (obj) => {
    setCode(obj);
    setOpen(false);
    handleFdata(id, label, obj.code);
  }

  React.useEffect(() => {
    if (ref) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <div onClick={handleOpen} className="w-full h-full group p-3 cursor-pointer relative bg-white">
      <LabelSearch label={label} />
      <div className="w-full">
        <h4 className="text-xl font-bold">{cities.find(obj => obj.code == code.code)?.code}</h4>
        <p className="text-sm font-light">{cities.find(obj => obj.code == code.code)?.name}</p>
      </div>
      {
        open && (
          <>

            <div ref={ref} className="absolute  w-full z-50 bg-white top-16 p-1 start-0 border border-blue-gray-200">
              <input
                type="text"
                placeholder="Search country"
                className="w-full p-2 text-sm outline-none border border-blue-gray-200"
                onChange={handleKeyWord}
                value={keyword}
                onClick={(e) => e.stopPropagation()}
              />
              <div className="w-full">
                <ul className="*:p-1 *:text-sm">
                  {
                    cities.length > 0 && cities.map((cit) => (
                      <>
                        <li className='border-b border-dashed border-blue-gray-200 last:border-b-0'>
                          <button onClick={() => handleCode(cit)} className=" gap-2 text-xs w-full text-start">
                            <div className="flex items-center gap-3">
                              {
                                label.toLowerCase() == 'from' &&  (
                                  <span><GiAirplaneDeparture className='size-4' /></span>
                                )
                              }
                              {
                                label.toLowerCase() == 'to' &&  (
                                    <span className="size-4"><GiAirplaneArrival/></span>
                                )
                              }
                             <span> {cit.code} {cit.name}</span>
                            </div>
                            <p className='font-bold'>{cit.city} {cit.country}</p>
                          </button>
                        </li>
                      </>
                    ))
                  }


                </ul>
              </div>
            </div>
          </>
        )
      }

    </div>
  );
};

FromField.propTypes = {
  label: PropTypes.string.isRequired,
  handleopen: PropTypes.func.isRequired,
  // open: PropTypes.shape({
  //   id: PropTypes.string,
  //   type: PropTypes.string,
  // }).isRequired,
  id: PropTypes.string.isRequired,
  handleFdata: PropTypes.func.isRequired,
};

export default FromField;
