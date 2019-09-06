import React from "react";
import SortBy from "./SortBy";
import Pagination from "./Pagination";
import Years from "./Years";
import Reset from "./Reset";
import Genres from "./Genres";

export default class Filters extends React.Component {
  render() {
    const {
      onChangeFilters,
      pagination,
      onChangePagination,
      totalPages,
      resetFilter,
      filters: { genres, allGenres }
    } = this.props;
    return (
      <form className="mb-3">
        <SortBy onChangeFilters={onChangeFilters} />
        <Years onChangeFilters={onChangeFilters} />
        <Genres
          allGenres={allGenres}
          genres={genres}
          onChangeFilters={onChangeFilters}
        />
        <Pagination
          pagination={pagination}
          onChangePagination={onChangePagination}
          totalPages={totalPages}
        />
        <Reset resetFilter={resetFilter} />
      </form>
    );
  }
}
