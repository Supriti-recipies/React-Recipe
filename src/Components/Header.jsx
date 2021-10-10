import React, { useEffect, useState } from "react";
import logo from "../static/images/logo.png";
import "../css/Header.scss";

export default function Header({ setSearch }) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setSearch(searchInput);
  }, [searchInput, setSearch]);

  const setSearchInputValue = (event) => {
    setSearchInput(event.target.value);
  };

  return <HeaderComponent {...{ setSearchInputValue, searchInput }} />;
}

const HeaderComponent = React.memo(({ searchInput, setSearchInputValue }) => {
  return (
    <div className="NavBar">
      {/* navbar start */}
      <div className="bg-img">
        <nav className="navbar navBg navbar-expand-lg">
          <div className="container-fluid">
            <a href="/">
              <img className="img-responsive2 navLogo" src={logo} alt="Logo" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>

            <div id="navbarCollapse">
              <ul
                style={{
                  paddingLeft: "1.8rem",
                }}
              >
                <li>
                  <span className="social-number">
                    <i className="fa fa-phone" aria-hidden="true">
                      : +91 95566 69666
                    </i>
                  </span>
                </li>
                <ul
                  style={{
                    paddingLeft: "3px",
                    width: "232px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <li>
                    <a
                      href="https://www.facebook.com/supritispices"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="social-icon social-facebook">
                        <i className="fa fa-facebook"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/supritispices/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="social-icon social-instagram">
                        <i className="fa fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/supritispices"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="social-icon social-twitter">
                        <i className="fa fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCvuiBlcTTSGjcy2AgfK4ylg"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="social-icon social-youtube">
                        <i className="fa fa-youtube"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/supritispices/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="social-icon social-linkedin">
                        <i className="fa fa-linkedin"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </ul>

              <br />
              <form className="form-inline ml-auto">
                <div className="input-group">
                  <div id="google_translate_element"></div>

                  <div className="inputGroup-search">
                    <input
                      type="text"
                      className="form-control border-dark btn-sm posRecipe"
                      placeholder="RECIPE"
                      value={searchInput}
                      onChange={setSearchInputValue}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary btn-sm rdd"
                        type="button"
                      >
                        <i className="fa fa-search btn-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* <!--Second navbar--> */}
      <div className="navbar2 navbar-expand-lg ">
        <div className="container-md navContainer">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item nav-Link" href="#">
              <a href="/">HOME</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- navbar ended --> */}
    </div>
  );
});
