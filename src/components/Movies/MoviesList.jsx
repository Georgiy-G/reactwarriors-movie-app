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

  getMovies = (page = 1) => {
    const {
      filters: { sortBy, year, genres },
      onChangePagination
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
        onChangePagination({ name: "totalPages", value: data.total_results });
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps) {
    const {
      pagination: { page },
      onChangePagination,
      filters
    } = this.props;
    if (filters !== prevProps.filters) {
      onChangePagination({ name: "page", value: 1 });
      this.getMovies(1);
    }

    if (page !== prevProps.pagination.page) {
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
