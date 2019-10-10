import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

class Navbar extends Component {
  state = {
    toggle: false
  };

  toggleNav = () => {
    this.setState(prevState => ({ toggle: !prevState.toggle }));
  };

  render() {
    const navClass = cx({
      'is-active': this.state.toggle
    });
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item is-size-4">
              <p>Quick Credit</p>
            </div>
            <a
              className={cx('navbar-burger', navClass)}
              onClick={this.toggleNav}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={cx('navbar-menu', navClass)}>
            <div className="navbar-end">
              {/* <Link
                to="/login"
                className="navbar-item is-size-5 has-background-light"
              >
                Login
              </Link>
              <Link to="/register" className="navbar-item is-size-5">
                Signup
              </Link> */}
              {this.props.children}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
