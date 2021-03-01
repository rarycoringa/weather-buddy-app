import React from 'react';

export class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
      temp: props.temp,
      weather: props.weather
    };
  }

  render() {
    return (
      <div class="card">
        <h3>{this.state.city}</h3>
        <h2 class="temperature">{this.state.temp}ºC</h2>
        <h4>{this.state.weather}</h4>
      </div>
    );
  }
}

export class WeatherCardsList extends React.Component {
  render() {
    return (
      <div class="cities">
        <WeatherCard city="Nottingham" temp="5" weather="Strong Winds" />
        <WeatherCard city="Bergen" temp="2" weather="Light Rain" />
        <WeatherCard city="Toronto" temp="-6" weather="Snow Storm" />
        <WeatherCard city="Califórnia" temp="21" weather="Sun" />
        <WeatherCard city="London" temp="0" weather="Light Snow" />
      </div>
    );
  }
}
