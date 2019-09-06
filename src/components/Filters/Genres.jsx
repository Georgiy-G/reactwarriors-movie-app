import React from "react";
import { API_KEY_3, API_URL } from "../../api/api";

export default class Genres extends React.Component {
  state = {
    allGenres: []
  };

  getGenres = () => {
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          allGenres: data.genres
        });
      });
  };

  componentDidMount() {
    this.getGenres();
  }

  onChangeGenres = e => {
    const value = +e.target.value;
    const name = e.target.name;
    const { genres, onChangeFilters } = this.props;
    onChangeFilters({
      target: {
        name,
        value: genres.includes(value)
          ? genres.filter(item => item !== value)
          : [...genres, value]
      }
    });
  };

  render() {
    const { genres } = this.props;
    const { allGenres } = this.state;
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
                checked={genres.includes(genre.id)}
                onChange={this.onChangeGenres}
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
