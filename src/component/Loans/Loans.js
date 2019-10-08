import React from 'react';
import Loan from '../Loan/Loan';
import styles from './Loans.module.css';

const Loans = ({ loans }) => {
  return (
    <>
      <h2 className={styles.mainHeading}>LOANS</h2>
      <div className={styles.loanContainer}>
        {loans.map(loan => (
          <Loan key={loan.id} loan={loan} />
        ))}
      </div>
    </>
  );
};

export default Loans;
