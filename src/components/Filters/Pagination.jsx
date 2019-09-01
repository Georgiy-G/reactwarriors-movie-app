import React from "react";

export default class Pagination extends React.Component {
  render() {
    const { page, onChangePage, totalPages } = this.props;
    return (
      <div className="row mb-3">
        <div className="btn-group col-12 mb-3">
          <button
            type="button"
            className="btn btn-light"
            disabled={page === 1}
            onClick={onChangePage.bind(null, page - 1)}
          >
            Назад
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={onChangePage.bind(null, page + 1)}
          >
            Вперед
          </button>
        </div>
        <span className="col-12">
          {page} из {totalPages}
        </span>
      </div>
    );
  }
}
