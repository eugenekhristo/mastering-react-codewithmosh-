import React from 'react';
import PropTypes from 'prop-types';

function getClassesForListGroupItems(item, selectedItem) {
  return `list-group-item ${item === selectedItem ? 'active' : ''}`;
}

const FilterList = ({ items, selectedItem, textProperty, valueProperty, onChooseFilter }) => {
  return (
    <ul className="list-group" style={{cursor: 'pointer'}}>
      {items.map(item => (
        <li
          className={getClassesForListGroupItems(item, selectedItem)}
          key={item[textProperty]}
          onClick={() => onChooseFilter(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

FilterList.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

FilterList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  textProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  selectedItem: PropTypes.any,
  onChooseFilter: PropTypes.func.isRequired
};

export default FilterList;
