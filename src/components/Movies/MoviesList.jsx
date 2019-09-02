import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../../api/api";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  getMovies = page => {
    const {
      filters: { sortBy, year, genres },
      onChangeTotalPage
    } = this.props;
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sortBy}&page=${page}&primary_release_year=${year}&with_genres=${genres}`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results
        });
        onChangeTotalPage(data.total_results);
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps) {
    const { page, onChangePage, filters } = this.props;
    if (filters !== prevProps.filters) {
      onChangePage(1);
      this.getMovies(1);
    }

    if (page !== prevProps.page) {
      this.getMovies(page);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="row">
        {movies.map(movie => {
          return (
            movie && (
              <div key={movie.id} className="col-6 mb-4">
                <MovieItem item={movie} />
              </div>
            )
          );
        })}
      </div>
    );
  }
}
