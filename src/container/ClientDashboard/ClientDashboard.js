import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import styles from './ClientDashboard.module.css';
import SideNav from './SideNav/SideNav';
import { getClientLoans } from '../../redux/actions/loanActions/loanActions';
import Loans from '../../component/Loans/Loans';
import Loader from '../../component/Loader/Loader';

class ClientDashboard extends Component {
  state = {
    toggle: false
  };

  componentDidMount() {
    this.props.getClientLoans();
  }

  toggleNav = () => {
    this.setState(prevState => ({ toggle: !prevState.toggle }));
  };

  render() {
    const { loading } = this.props;
    return (
      <>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <div className="navbar-item is-size-4">
                <p>Quick Credit</p>
              </div>
              <a className="navbar-burger" onClick={this.toggleNav}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </nav>
        <div className={styles.wrapper}>
          <SideNav toggle={this.state.toggle} />
          <main className={styles.mainPanel}>
            {loading ? (
              <Loader />
            ) : (
              <Route
                path="/"
                render={props => <Loans loans={this.props.loans} {...props} />}
              />
            )}
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ auth, clientLoans }) => {
  return {
    loading: clientLoans.loading,
    loans: clientLoans.loans,
    isAuthenticated: auth.isAuthenticated
  };
};

const mapDispatchToProps = {
  getClientLoans
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientDashboard);
