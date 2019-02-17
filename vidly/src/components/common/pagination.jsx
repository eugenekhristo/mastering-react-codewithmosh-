import React from 'react';
import PropTypes from 'prop-types';
// 3-rd party libraries
import _ from 'lodash';

const Pagination = ({ itemsLength, itemsPerPage, activePage, onPageChange }) => {
  const maxPageNumber = Math.ceil(itemsLength / itemsPerPage);
  const pageNumbers = _.range(1, maxPageNumber + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {maxPageNumber > 1 && pageNumbers.map(pageNum => (
          <li
            className={`page-item ${pageNum === activePage ? 'active' : ''}`}
            key={pageNum}
          >
            <button
              style={{ boxShadow: 'none' }}
              className="page-link"
              href="#"
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// kinda API what PROPS to pass into the component (and also checkes a type correctness)
// - look at console!!!
Pagination.propTypes = {
  itemsLength: PropTypes.number.isRequired, 
  itemsPerPage: PropTypes.number.isRequired, 
  activePage: PropTypes.number.isRequired, 
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
