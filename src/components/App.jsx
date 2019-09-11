import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        sortBy: "popularity.desc",
        year: "",
        genres: []
      },
      pagination: {
        page: 1,
        totalPages: null
      }
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

  onChangePagination = ({ name, value }) => {
    this.setState(state => ({
      pagination: {
        ...state.pagination,
        [name]: value
      }
    }));
  };

  resetFilter = () => {
    this.setState({
      filters: {
        sortBy: "popularity.desc",
        year: "",
        genres: []
      },
      pagination: {
        page: 1,
        totalPages: null
      }
    });
  };

  render() {
    const { filters, pagination, totalPages } = this.state;
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
                  onChangePagination={this.onChangePagination}
                  pagination={pagination}
                  totalPages={totalPages}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              onChangePagination={this.onChangePagination}
              filters={filters}
              pagination={pagination}
            />
          </div>
        </div>
      </div>
    );
  }
}
