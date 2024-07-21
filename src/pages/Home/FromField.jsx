import PropTypes from 'prop-types';
import LabelSearch from './LabelSearch';

const FromField = ({ label, handleopen, id, handleFdata }) => {

  return (
    <div onClick={() => handleopen(id, label)} className="w-full group p-3 cursor-pointer relative bg-white">
      <LabelSearch label={label} />
      <div className="w-full">
        <h4 className="text-xl font-bold">Delhi</h4>
        <p className="text-sm font-light">Indira Gandhi International Airport</p>
      </div>

      <div className="absolute group-hover:block hidden w-full z-50 bg-white top-16 p-1 start-0 border border-blue-gray-200">
        <input
          type="text"
          placeholder="Search country"
          className="w-full p-2 text-sm outline-none border border-blue-gray-200"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="w-full">
          <ul className="*:p-1 *:text-sm">
            <li>
              <button onClick={() => handleFdata(id, label, 'Del')} className="w-full text-start">
                Delhi (Indira Gandhi Airport)
              </button>
            </li>
            <li>
              <button className="w-full text-start">Delhi (Indira Gandhi Airport)</button>
            </li>
            <li>
              <button className="w-full text-start">Delhi (Indira Gandhi Airport)</button>
            </li>
            <li>
              <button className="w-full text-start">Delhi (Indira Gandhi Airport)</button>
            </li>
          </ul>
        </div>
      </div>

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
