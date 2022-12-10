import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="row my-3">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="navbar-brand ">
              <h1 id="v">V.Shop</h1>
              </div>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

            <div
              className="collapse navbar-collapse mb-2"
              id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active h5" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active h5" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active h5" aria-current="page" to="/vegetable">
                    Vegetable
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active h5" aria-current="page" to="/testomonial">
                    Testomonial
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active h5" aria-current="page" to="/contact us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
