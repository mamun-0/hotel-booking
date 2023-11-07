import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { connect } from "react-redux";
class Navbar extends React.Component {
  userEmail() {
    try {
      if (this.props.storeSignIn) {
        return this.props.storeSignIn.email;
      } else if (this.props.storeSignUp) {
        return this.props.storeSignUp.email;
      } else {
        return null;
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  badgeUI() {
    if (
      ["/standard", "/executive", "/deluxe"].includes(window.location.pathname)
    ) {
      return (
        <button
          type="button"
          className="btn btn-sm btn-primary position-relative mx-2"
        >
          {`Available ${window.location.pathname.slice(1)} Room`}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {this.props.remainingRoom}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      );
    } else {
      return null;
    }
  }
  render() {
    const signOutUI = (
      <div className="d-flex justify-content-center align-items-center mx-3">
        <em className="text-white">{this.userEmail()}</em>
        <li className="nav-item">
          <a className="nav-link" href="/">
            SignOut
          </a>
        </li>
      </div>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Hotel-Booking.com
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Choose Room
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/standard">
                      Standard Room
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/deluxe">
                      Deluxe Room
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/executive">
                      Exclusive Suite
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav d-flex justify-content-center align-items-center ">
              <li className="nav-item">
                <b className="text-white">{this.badgeUI()}</b>
              </li>
              {this.props.storeSignIn || this.props.storeSignUp ? (
                signOutUI
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Navbar);
