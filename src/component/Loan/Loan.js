import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { format } from 'date-fns';
import styles from './Loan.module.css';

const Loan = ({ loan }) => {
  const { amount, balance, paymentInstallment, status, createdOn } = loan;
  const loanStatusClasses = cx(styles['loan-status'], {
    [styles.approved]: status === 'approved',
    [styles.rejected]: status === 'rejected'
  });
  return (
    <div className={styles.loanWrapper}>
      <div className={styles.loanDate}>
        <p className="has-text-grey-light">
          {format(new Date(createdOn), 'MMM')}
{' '}
          {format(new Date(createdOn), 'dd')}
        </p>
        <p className={cx('has-text-grey-light', styles.year)}>
          {format(new Date(createdOn), 'yyyy')}
        </p>
      </div>
      <div className={styles.loanDetails}>
        <div className={styles.loanDetailsRow}>
          <div className={styles['loan-amount']}>
            <p className="has-text-grey-light">Loan Amount</p>
            <p className="is-size-5">
              &#8358;
              {amount}
            </p>
          </div>
          <div className={styles['loan-balance']}>
            <p className="has-text-grey-light ">Balance</p>
            <p className="is-size-5 has-text-weight-bold has-text-danger">
              &#8358;
              {balance}
            </p>
          </div>
        </div>
        <div className={styles.loanDetailsRow}>
          <div className={styles['loan-installment']}>
            <p className="has-text-grey-light">Installment</p>
            <p className="is-size-5">
              &#8358;
              {paymentInstallment}
            </p>
          </div>
          <div className={styles.action}>
            <span className={loanStatusClasses}>{status}</span>
          </div>
          <div className={styles.action}>
            <Link to="" className={styles['btn-details']}>
              History
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Loan.propTypes = {
  loan: PropTypes.shape({}).isRequired
};

export default Loan;
