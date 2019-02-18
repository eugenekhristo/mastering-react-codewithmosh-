import React from 'react';
import PropTypes from 'prop-types';

///////////////// HELPERS
//////////////////////////////////////
function getClassesForListGroupItems(actualId, activeFilterId) {
  return `list-group-item ${actualId === activeFilterId ? 'active' : ''}`;
}

///////////////// COMPONENT
//////////////////////////////////////
const FilterList = ({ items, activeFilterId, textProperty, valueProperty, onChooseFilter }) => {
  return (
    <ul className="list-group" style={{cursor: 'pointer'}}>
      <li 
        className={getClassesForListGroupItems(null, activeFilterId)}
        onClick={() => onChooseFilter(null)}
      >
        All genres
      </li>
      {items.map(item => (
        <li
          className={getClassesForListGroupItems(item[valueProperty], activeFilterId)}
          key={item[valueProperty]}
          onClick={() => onChooseFilter(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

///////////////// DEFAULT TYPES
//////////////////////////////////////
FilterList.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

///////////////// PROP TYPES
//////////////////////////////////////
FilterList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  textProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  activeFilterId: PropTypes.any,
  onChooseFilter: PropTypes.func.isRequired
};

export default FilterList;
