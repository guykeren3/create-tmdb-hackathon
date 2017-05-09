// importing scss
import './homePage.scss'

import React from 'react';
import {NavLink} from "react-router-dom";

export default class Home extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    let mySearch = this.search.value;
    this.props.history.push(`/explore/${mySearch}?search=true`);
  }

  render() {
    return (
      <div className="home-page sign-wrapper">
        <div>
          <NavLink to="/" className="logo-sign-anchor">
            <i className="fa fa-film scale-sign-logo" aria-hidden="true"></i>
            <h2>Into</h2>
          </NavLink>
        </div>
        <div className="sign-form-wrapper">
          <form className="sign-form" onSubmit={this.handleSearch}>
            <h3 className="signin-title">What are you into?</h3>
            <div className="search-container">
              <button className="home-page-search-icon"><i className="fa fa-search" aria-hidden="true"/></button>
            </div>
            <input type="text" placeholder="Math, India, Politics" className="search-box-home"
                   ref={(searchValue) => this.search = searchValue}/>
          </form>
        </div>
      </div>
    )
  }
}
