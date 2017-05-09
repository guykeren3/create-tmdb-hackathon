import './root.scss';

import React from 'react';
import {connect} from 'react-redux';
import SimpleSlider from '../carousel'
import Movies from '../movies/movies';
import TMDB from '../../core/tmdb';

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

    TMDB.get('/discover/movie?sort_by=popularity.desc')
      .then((data) => {
        // log `data` here to inspect the fetched data
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
        <SimpleSlider/>
        {/*<Movies />*/}
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
