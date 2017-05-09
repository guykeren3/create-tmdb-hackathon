import './topbar.scss'

import React from 'react';
import {connect} from 'react-redux';

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
            <h1>Into.{this.props.uInto}</h1>
          </NavLink>
        <form className="top-bar-search-wrapper" onSubmit={this.handleSearch}>
          <button><i className="fa fa-search" aria-hidden="true"/></button>
          <input type="text" placeholder="Classical Music" className="search-box-in-topbar"
                 ref={(searchValue) => this.search = searchValue}/>
        </form>
        </div>
        <button type="button"> Wishlist </button>
      </header>
    );
  }
}

function mapStateToProps({movies}) {
  return {
    movies: movies
  };
}

export default connect(mapStateToProps)(Topbar);


