import React from 'react';
import logo from './logo.svg';
import './App.css';


class Title extends React.Component {
  render() {
    return (
      <div class="title">
        <h1>WEATHER BUDDY</h1>
      </div>
    )
  }
}

class CityInput extends React.Component {
  render() {
    return (
      <div>
        <h2>How is the weather in <u>Florianópolis</u> now?</h2>
      </div>
    );
  }
}

class OtherCityInput extends React.Component {
  render() {
    return (
      <div>
        <h3>How is the weather in <u>Florianópolis</u> now?</h3>
      </div>
    );
  }
}

class WeatherCard extends React.Component {
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

class CityNotFound extends React.Component {
  render() {
    return (
      <div>
        <h2 class="error">Sorry. We couldn't find the specified city.</h2>
      </div>
    );
  }
}

class SearchedCities extends React.Component {
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

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />

        <CityInput />
        <CityNotFound />

        <OtherCityInput />

        <WeatherCard city="Florianópolis" temp="22" weather="Light Rain" />

        <SearchedCities />
      </div>
    );
  }
}

export default App;
