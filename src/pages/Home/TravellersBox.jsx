import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Radio } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { cabinclasses, travellerarr } from '../../Utils';
// import React from 'react';
const TravellersBox = ({ travellers, handleIncrement, handleDecrement, handleCabinClass, c_bin }) => {
  return (
    <div className="w-full bg-white p-2 shadow shadow-blue-gray-900">
      {travellerarr.map((itm) => (
        <div className="flex justify-between py-2" key={itm.key}>
          <div className="w-1/2">
            <p className="text-sm font-bold">{itm.title}</p>
            <p className="text-[10px]">({itm.para})</p>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="inline-flex border border-blue-gray-200">
              <button
                className="size-8 text-xs leading-8 outline-none bg-white"
                onClick={() => handleDecrement(itm.key)}
              >
                <MinusOutlined />
              </button>
              <input
                type="text"
                value={travellers[itm.key]}
                readOnly
                className="size-8 text-center outline-none text-xs leading-8"
              />
              <button
                className="size-8 text-xs leading-8 outline-none bg-white"
                onClick={() => handleIncrement(itm.key)}
              >
                <PlusOutlined />
              </button>
            </div>
          </div>
        </div>
      ))}
      <ul className="list-none ps-0">
        {cabinclasses.map((itm) => (
          <li className="text-sm" key={itm.key}>
            <Radio name="cabinClass" color="blue" checked={c_bin == itm.key} onChange={() => handleCabinClass(itm.key)} label={itm.title} />
          </li>
        ))}
      </ul>    
    </div>
  );
};

TravellersBox.propTypes = {
  travellers: PropTypes.object.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleTravellerBox: PropTypes.func.isRequired,
  handleCabinClass: PropTypes.func.isRequired,
  c_bin: PropTypes.string,
  closeTravelBox: PropTypes.func
};

export default TravellersBox;
