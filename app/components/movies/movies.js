import './movies.scss';
import React from 'react';
import { connect } from 'react-redux';

import TMDB from '../../core/tmdb';
import Topbar from "../topbar/Topbar";

import ReactSlick from "../reactSlick";

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

    TMDB.get(`/search/keyword?query=cat`)
      .then((keywordList) => {
        // log `data` here to inspect the fetched data
        console.info(keywordList);
        const keywordIds = keywordList.results.map(keyword => keyword.id).join('|')
        TMDB.get(`/discover/movie?with_keywords=${keywordIds}`).then(movies => {
          this.props.setMovies(movies.results);
          this.setState({
            loading: false
          });
        });
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
        <Topbar/>

        <h2>Most Popular Movies</h2>
        { this.renderMoviesList() }

        <ReactSlick/>

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
