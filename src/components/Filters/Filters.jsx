import React from "react";
import SortBy from "./SortBy";
import Pagination from "./Pagination";

export default class Filters extends React.Component {
  render() {
    const { onChangeFilters, page, onChangePage } = this.props;
    return (
      <form className="mb-3">
        <SortBy onChangeFilters={onChangeFilters} />
        <Pagination page={page} onChangePage={onChangePage} />
      </form>
    );
  }
}
