import * as React from 'react';
import * as PropTypes from 'prop-types';
import { createPagesHelper } from '../../../helpers/createPagesHelper/createPagesHelper';

/**
 * PageNumbers component will render page numbers
 *
 * @param {*} props - required numberOfPages, onClick, currentPage, showPages
 * @returns {*} a pageNumbes component
 */
export const PageNumbers = ({
  numberOfPages, onClick, currentPage, showPages,
}) => {
  const pages = createPagesHelper(
    numberOfPages,
    currentPage,
    showPages
    );
  return (
    <ul style={{ cursor: 'pointer' }}>
      {pages.map((page, i) =>
        (<li
          className={currentPage === page ? 'selected' : ''}
          key={i}
          value={page}
          onClick={onClick}
        >
          {page + 1}
        </li>),
      )}
    </ul>
  );
}

PageNumbers.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  showPages: PropTypes.number,
};

PageNumbers.defaultProps = {
  numberOfPages: 10,
  onClick: () => {},
  currentPage: 0,
  showPages: 10,
};
