import './root.scss';

import React from 'react';
import {connect} from 'react-redux';

import Movies from '../movies/movies';
import TMDB from '../../core/tmdb';

import Topbar from '../topbar/Topbar'
import HomePage from "../home/HomePage";

class Root extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.getMostPopularMovies = this.getMostPopularMovies.bind(this);

    this.state = {
      loading: false
    }
  }

  getMostPopularMovies() {
    this.setState({
      loading: true
    });

    TMDB.get('/movie/52622/videos?api_key=<<api_key>>&language=en-US')
      .then((data) => {
        console.info(data);
        this.setState({
          loading: false
        });

        this.props.setMovies(data.results);
      });
  }

  handleClick(e) {
    this.getMostPopularMovies();
  }

  render() {
    return (
      <div className="root">

        <Topbar />

        <HomePage />

        {/*<h1 className="root-heading"*/}
            {/*onClick={ this.handleClick }>*/}
          {/*TMDB Hackathon!*/}
        {/*</h1>*/}

        {/*<p>Click the heading to see some action!</p>*/}
        {/*<p>Fetched movies: { this.props.movies.length }</p>*/}

        {/*{ this.state.loading && 'Loading...' }*/}

        <Movies />
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Root);
