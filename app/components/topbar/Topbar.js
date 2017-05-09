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
            <h1>Into</h1>
          </NavLink>
          <nav className="nav-bar">
            {/*<ul>*/}
              {/*<li><NavLink to="/explore" className="nav-links">Explore</NavLink></li>*/}
              {/*<li><NavLink to="/playlists" className="nav-links">Playlists</NavLink></li>*/}
            {/*</ul>*/}
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


