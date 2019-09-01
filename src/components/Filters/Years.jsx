import React from "react";

export default class Years extends React.Component {
  static defaultProps = {
    options: [
      {
        value: "1144"
      },
      {
        value: "2011"
      },
      {
        value: "2012"
      },
      {
        value: "2013"
      },
      {
        value: "2018"
      }
    ]
  };
  render() {
    const { onChangeFilters, options } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="year">Сортировать по году:</label>
        <select className="form-control" name="year" onChange={onChangeFilters}>
          <option value="">Select year</option>
          {options.map((option, key) => (
            <option key={key} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
