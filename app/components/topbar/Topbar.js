import './topbar.scss'

import React from 'react';
import { connect } from 'react-redux';

import {NavLink} from "react-router-dom";

class Topbar extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <header className="top-bar">
        <div className="top-bar-left-wrapper">
          <NavLink to="/" className="logo-homepage-anchor">
            <i className="fa fa-mixcloud scale-topbar" aria-hidden="true"/>
            <h1>you are into {this.props.uInto}</h1>
          </NavLink>
          <nav className="nav-bar">

          </nav>
        </div>
          <button type="button"> Wishlist </button>
      </header>
    );
  }
}

function mapStateToProps({ movies }) {
  return {
    movies: movies
  };
}

export default connect(mapStateToProps)(Topbar);


