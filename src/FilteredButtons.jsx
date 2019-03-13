import React from 'react';

/* eslint-disable react/prop-types */
const FilteredButtons = ({ children, onClick }) => (
  <button
    className="filter-buttons"
    type="button"
    onClick={() => onClick(children)}
  >
    { children }
  </button>
);


export default FilteredButtons;
