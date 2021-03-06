import './movies.scss';
import React from 'react';
import {connect} from 'react-redux';

import TMDB from '../../core/tmdb';
import Topbar from "../topbar/Topbar";

import ReactSlick from "../reactSlick";

class Movies extends React.Component {

  constructor() {
    super();

    this.getMovies = this.getMovies.bind(this);

    this.state = {
      loading: false,
      ytKey: ''
    }
  }

  getMovies() {
    this.setState({
      loading: true
    });

    TMDB.get(`/search/keyword?query=${this.props.uInto}`)
      .then((keywordList) => {
        // log `data` here to inspect the fetched data
        console.info(keywordList);
        const keywordIds = keywordList.results.map(keyword => keyword.id).join('|')
        TMDB.get(`/discover/movie?with_keywords=${keywordIds}`).then(movies => {
          this.props.setMovies(movies.results);
          console.info(movies.results);
          this.setState({
            loading: false
          });
        });
      });
  }

  getTrailer(movieId) {
    TMDB.get(`/movie/${movieId}/videos`)
      .then((data) => {

        console.info(data);
        const ytKey = data.results[0].key;
        console.info(ytKey);
        this.setState({ytKey: ytKey})
      });
  }

  componentDidMount() {
    this.getMovies();
  }

  renderMoviesList() {
    return <ul className="list-of-movies">
      { this.props.movies.map((movie) => {
        let backImg = {backgroundImage:`url(https://image.tmdb.org/t/p/w500${movie.poster_path})`};
        return <li key={ movie.id } className="movie-card"

                   onClick={() => {
                     this.getTrailer(movie.id)
                   }}
                   style={backImg}>
          <div >
            { movie.title }
            </div>


        </li>
      }) }
    </ul>
  }

  handleBlur() {
    this.setState({ytKey: ''})
  }

  render() {
    const url = `https://www.youtube.com/embed/${this.state.ytKey}?rel=0&amp;controls=0&amp;showinfo=0?ecver=1`;

    return (<div className="movies" onClick={() => this.handleBlur()}>
        <Topbar />

        <div className="accordion">
          { this.renderMoviesList() }
        </div>

        { !!this.state.ytKey && <iframe src={url} className="trailer"
        /> }
      </div>
    );
  }
}

function mapStateToProps({movies, uInto}) {
  return {
    movies: movies,
    uInto: uInto
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
