import './movies.scss';
import React from 'react';
import { connect } from 'react-redux';

import TMDB from '../../core/tmdb';

class Movies extends React.Component {

  constructor() {
    super();

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

  componentDidMount() {
    this.getMostPopularMovies();
  }

  renderMoviesList() {
    return <ul>
      { this.props.movies.map((movie) => {
        return <li key={ movie.id } className="movie-card">{ movie.title }
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`poster of ${movie.title}`}/></li>
      }) }
    </ul>
  }

  render() {
    return (<div className="movies">
you are into {this.props.uInto}
        <h2>Most Popular Movies</h2>
        { this.renderMoviesList() }
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
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

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
