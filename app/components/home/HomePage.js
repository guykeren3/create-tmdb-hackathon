// importing scss
import './homePage.scss'

import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class HomePage extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    let mySearch = this.search.value;
    this.props.history.push(`/movies/${mySearch}?search=true`);
  }

  render() {
    return (
      <div className="home-page home-page-wrapper">
        <div>
          <NavLink to="/" className="logo-home-page-anchor">
            <img src="../../assets/styles/images/popcorn.png" alt="popcorn" className="fa fa-film scale-home-page-logo"/>
            <h1>Into.</h1>
          </NavLink>
        </div>
        <div className="home-page-form-wrapper">
          <form className="home-page-form" onSubmit={this.handleSearch}>
            <h3 className="home-page-title"> tell us what you're interested in, we'll tell you what to watch </h3>
            <div className="search-container">
              <button className="home-page-search-icon"><i className="fa fa-search" aria-hidden="true"/></button>

              <input type="text" placeholder="Graphic design, Classical music etc" className="search-box-home"
                     ref={(searchValue) => this.search = searchValue}/>
              <span className="im-into">I'm into.</span>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({movies}) {
  return {
    movies: movies
  };
}


function mapDispatchToProps(dispatch) {
  return {
    setMovies(data) {
      dispatch({
        type: 'SET_MOVIES',
        data: data
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
