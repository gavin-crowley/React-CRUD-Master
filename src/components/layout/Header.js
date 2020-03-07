import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
      <div className="container">
        {/* <a className="navbar-brand" href="#!">
          {branding}
        </a> */}
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>

        <div>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
    //   <div className="container">
    //     <a className="navbar-brand" href="#!">
    //       {branding}
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarToggler"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarToggler">
    //       <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    //         {/* Links Here */}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// Show them without the prop
Header.defaultProps = {
  branding: 'My App'
};

export default Header;
