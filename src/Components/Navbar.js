// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Navbar extends Component {
  static propTypes = {}
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <a className="navbar-brand" href="http:Bontinie">NewsMonkey</a>
          <button className="navbar-toggler btn-info" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="http:Bontinie">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http:Bontinie">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http:Bontinie">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http:Bontinie" role="button" data-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="http:Bontinie">Action</a>
                  <a className="dropdown-item" href="http:Bontinie">Another action</a>
                  <a className="dropdown-item" href="http:Bontinie">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
