import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <h2 className={styles.navHeader}>Quick Credit</h2>

          <div className={styles.navLinks}>
            <Link to="" className={styles.navItem}>
              Home
            </Link>
            <Link to="" className={styles.navItem}>
              Login
            </Link>
            <Link to="" className={styles.navItem}>
              Signup
            </Link>
          </div>
        </nav>
        <main className={styles.mainContent}>
          <p className={styles.heading}>PERSONAL LOANS MADE EASY</p>
          <p className={styles.subHeading}>
            The faster and smarter way to get loans. Approval in minutes, low
            rates and long payback duration
          </p>
          <button className={styles.btn}>Get Started</button>
        </main>
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Made with
{' '}
            <FaHeart
              size="1.2em"
              style={{ verticalAlign: 'text-top', color: 'red' }}
            />
{' '}
            by Maxwellington
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
