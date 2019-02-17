import React from 'react';
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

export default Pagination;
