import './root.scss';

import React from 'react';
import {connect} from 'react-redux';
<<<<<<< HEAD
import SimpleSlider from '../carousel'
=======

>>>>>>> 9fb063961ca39c54d2707b2711395dbd5a3b0258
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
<<<<<<< HEAD
        // log `data` here to inspect the fetched data
=======
>>>>>>> 9fb063961ca39c54d2707b2711395dbd5a3b0258
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
<<<<<<< HEAD
        <SimpleSlider/>
        {/*<Movies />*/}
=======

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
>>>>>>> 9fb063961ca39c54d2707b2711395dbd5a3b0258
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
