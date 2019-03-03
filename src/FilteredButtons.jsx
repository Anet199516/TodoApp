import React from 'react';

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
