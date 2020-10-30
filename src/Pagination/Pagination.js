import React from 'react';
import '../main.css';
import './Pagination.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Pagination = ({ page, setPage, total }) => {
  const handlePagination = (num) => {
    const newPage = page + num;
    if (total > newPage && newPage > 0) {
      setPage(newPage);
      document.documentElement.scrollTop = 0;
    } else {
      console.log('OUT OF BOUNDS');
    }
  };
  return (
    <div className="pagination">
      <ArrowLeftIcon
        style={{ fontSize: '5.5rem' }}
        className="pagination__arrow"
        onClick={() => handlePagination(-1)}
      />
      <ArrowRightIcon
        style={{ fontSize: '5.5rem' }}
        className="pagination__arrow"
        onClick={() => handlePagination(1)}
      />
    </div>
  );
};

export default Pagination;
