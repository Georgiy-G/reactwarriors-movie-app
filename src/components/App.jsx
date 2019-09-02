import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.initialStateFilter = {
      filters: {
        sortBy: "popularity.desc",
        year: "",
        allGenres: [],
        genres: []
      }
    };
    this.state = {
      ...this.initialStateFilter,
      page: 1,
      totalPages: null
    };
  }

  onChangeFilters = e => {
    const newFilters = {
      ...this.state.filters,
      [e.target.name]: e.target.value
    };
    this.setState({
      filters: newFilters
    });
  };

  onChangePage = page => {
    this.setState({
      page
    });
  };

  onChangeTotalPage = totalPages => {
    this.setState({
      totalPages
    });
  };

  onChangeAllGenres = data => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        allGenres: data
      }
    }));
  };

  onChangeGenres = e => {
    const {
      filters: { genres }
    } = this.state;
    const value = e.target.value;
    const isAvailableGenre = genres.includes(value);

    let newArray;
    if (isAvailableGenre) {
      newArray = genres.filter(item => Number(item) !== Number(value));
    } else {
      newArray = [...genres, e.target.value];
    }

    const newFilters = {
      ...this.state.filters,
      genres: newArray
    };

    this.setState({
      filters: newFilters
    });
  };

  resetFilter = () => {
    this.setState(prevState => ({
      ...prevState,
      ...this.initialStateFilter
    }));
  };

  render() {
    const { filters, page, totalPages } = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                <h3>Фильтры:</h3>
                <Filters
                  filters={filters}
                  resetFilter={this.resetFilter}
                  onChangeFilters={this.onChangeFilters}
                  onChangePage={this.onChangePage}
                  onChangeAllGenres={this.onChangeAllGenres}
                  onChangeGenres={this.onChangeGenres}
                  page={page}
                  totalPages={totalPages}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              onChangeTotalPage={this.onChangeTotalPage}
              filters={filters}
              page={page}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
      </div>
    );
  }
}
