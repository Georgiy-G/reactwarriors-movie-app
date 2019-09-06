import React from "react";

export default class Pagination extends React.Component {
  render() {
    const {
      pagination: { page, totalPages },
      onChangePagination
    } = this.props;
    return (
      <div className="row mb-3">
        <div className="btn-group col-12 mb-3">
          <button
            type="button"
            className="btn btn-light"
            disabled={page === 1}
            onClick={onChangePagination.bind(null, {
              name: "page",
              value: page - 1
            })}
          >
            Назад
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={onChangePagination.bind(null, {
              name: "page",
              value: page + 1
            })}
          >
            Вперед
          </button>
        </div>
        {totalPages && (
          <span className="col-12">
            {page} из {totalPages}
          </span>
        )}
      </div>
    );
  }
}
