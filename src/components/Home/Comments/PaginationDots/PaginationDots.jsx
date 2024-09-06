import React from 'react';
import styles from './PaginationDots.module.scss';

const PaginationDots = ({ currentPage, totalPages }) => {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={`${styles.dot} ${currentPage === index + 1 ? styles.active : ''}`}
        />
      ))}
    </div>
  );
};

export default PaginationDots;
