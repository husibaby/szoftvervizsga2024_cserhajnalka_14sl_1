import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar(props) {
  const { leftSide, rightSide, rightSideOthers } = props;
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {leftSide.map((navItem) => (
              <li key={navItem.to} className="nav-item">
                <Link className="nav-link" to={navItem.to}>
                  {navItem.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav">
            {rightSide.map((navItem) => (
              <li key={navItem.to} className="nav-item">
                <Link className="nav-link" to={navItem.to}>
                  {navItem.text}
                </Link>
              </li>
            ))}
            {
              rightSideOthers.map(item => (
                <li key={item} className="nav-item">
                  {item}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  leftSide: PropTypes.array.isRequired,
  rightSide: PropTypes.array.isRequired,
  rightSideOthers: PropTypes.array,
};

Navbar.defaultProps = {
  rightSideOthers: []
}

export default Navbar;