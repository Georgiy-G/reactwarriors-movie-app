import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.initialStateFilter = {
      filters: {
        sortBy: "popularity.desc",
        year: ""
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
      filters: {
        ...newFilters
      }
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
                  resetFilter={this.resetFilter}
                  onChangeFilters={this.onChangeFilters}
                  onChangePage={this.onChangePage}
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
