import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { FaUserTie } from 'react-icons/fa';
import styles from './SideNav.module.css';

const SideNav = ({ toggle }) => {
  const sideNavClass = cx(styles.sidePanel, {
    [styles.responsive]: toggle
  });
  return (
    <div className={sideNavClass}>
      <h3 className={styles.heading}>CLIENT</h3>
      <div className={styles.avatar}>
        <FaUserTie style={{ width: '100%', height: '100%', color: 'white' }} />
      </div>
      <p className={styles.name}>Sneakymaxy</p>
      <hr />
      <Link to="/dashboard" className={styles.loanLink}>
        <span className="loanItem all_loans">Loan overview</span>
      </Link>
      <Link to="" className={styles.loanLink}>
        <span className="loanItem">Request loan</span>
      </Link>
      <Link to="" className={styles.loanLink}>
        <span className="loanItem">Logout</span>
      </Link>
    </div>
  );
};

export default SideNav;
