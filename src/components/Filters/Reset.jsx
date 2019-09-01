import React from "react";

export default class Reset extends React.Component {
  render() {
    const { resetFilter } = this.props;
    return (
      <div className="btn-group" onClick={resetFilter}>
        <button className="btn btn-primary">Reset</button>
      </div>
    );
  }
}
