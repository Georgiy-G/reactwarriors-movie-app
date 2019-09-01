import React from "react";

export default class Pagination extends React.Component {
  render() {
    const { page, onChangePage } = this.props;
    return (
      <div className="btn-group">
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
    );
  }
}
