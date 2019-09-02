import React from "react";
import { API_KEY_3, API_URL } from "../../api/api";

export default class Genres extends React.Component {
  getGenres = () => {
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.props.onChangeAllGenres(data.genres);
      });
  };

  componentDidMount() {
    this.getGenres();
  }
  render() {
    const { allGenres, onChangeGenres } = this.props;
    return (
      <div>
        {allGenres.map((genre, key) => {
          return (
            <div key={key} className="">
              <input
                id={genre.name}
                name="genres"
                value={genre.id}
                type="checkbox"
                onChange={onChangeGenres}
              />
              <label htmlFor={genre.name} className="ml-2">
                {genre.name}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
