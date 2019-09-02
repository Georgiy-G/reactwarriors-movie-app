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
      page,
      onChangePage,
      onChangeAllGenres,
      onChangeGenres,
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
          onChangeAllGenres={onChangeAllGenres}
          onChangeGenres={onChangeGenres}
          onChangeFilters={onChangeFilters}
        />
        <Pagination
          page={page}
          onChangePage={onChangePage}
          totalPages={totalPages}
        />
        <Reset resetFilter={resetFilter} />
      </form>
    );
  }
}
