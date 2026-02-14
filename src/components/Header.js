import React from "react";

export default function Header() {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <a href="/">
            <img
              src="https://tiger365.pro/tiger365.pro/images/logo-text.png"
              alt="Tiger365"
              className="img-fluid"
            />
          </a>
        </div>

        <nav className="navbar">
          <ul>
            <li><a className="active" href="/">Home</a></li>
            <li>
              <a href="#" data-bs-toggle="modal" data-bs-target="#LoginHome">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
