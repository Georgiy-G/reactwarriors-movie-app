import React from "react";
import SortBy from "./SortBy";
import Pagination from "./Pagination";
import Years from "./Years";
import Reset from "./Reset";

export default class Filters extends React.Component {
  render() {
    const {
      onChangeFilters,
      page,
      onChangePage,
      totalPages,
      resetFilter
    } = this.props;
    return (
      <form className="mb-3">
        <SortBy onChangeFilters={onChangeFilters} />
        <Years onChangeFilters={onChangeFilters} />
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
