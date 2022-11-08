import React, { Component } from 'react'

export default class Nav extends Component {
  render = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Padawans Instagram</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#"><i class="fa-solid fa-house"/>&nbsp;&nbsp;Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Log In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><i class="fa-solid fa-user"></i>&nbsp;&nbsp;Profile</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success searchButton" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
