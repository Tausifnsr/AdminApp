import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Pagination({ currentPage, totalPages, onPageChange, containerClassName, buttonClassName, activeButtonClassName }) {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const visiblePages = 3; // Number of visible pages

    // Calculate the start and end page numbers
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    // Ensure three pages are always visible at the beginning
    if (endPage - startPage + 1 < visiblePages && endPage < totalPages) {
      endPage = Math.min(totalPages, endPage + (visiblePages - (endPage - startPage + 1)));
    }

    // Ensure three pages are always visible at the end
    if (endPage - startPage + 1 < visiblePages && startPage > 1) {
      startPage = Math.max(1, startPage - (visiblePages - (endPage - startPage + 1)));
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`mx-1 px-2 py-1 ${buttonClassName} ${currentPage === i ? `${activeButtonClassName} bg-blue-500 rounded-full` : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={`flex ${containerClassName}`}>
      <button
        className={`mx-1 px-2 py-1 ${buttonClassName}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>
      {renderPageNumbers()}
      <button
        className={`mx-1 py-1 ${buttonClassName}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Pagination;
