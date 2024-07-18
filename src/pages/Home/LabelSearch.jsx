// import React from 'react';
import PropTypes from 'prop-types';

const LabelSearch = ({ label }) => {
  return (
    <>
      <label className="text-xs uppercase text-gray-800" htmlFor="">{label}</label>
    </>
  );
};

LabelSearch.propTypes = {
  label: PropTypes.string.isRequired,
};

export default LabelSearch;
