import React from 'react';
import { MainWeatherForm, SecondaryWeatherForm } from '../components/Forms';
import { WeatherCard, WeatherCardsList, WeatherNotFound } from '../components/Weather';

class Title extends React.Component {
  render() {
    return (
      <div class="title">
        <h1>WEATHER BUDDY</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render () {
    return (
      <div>
        <SecondaryWeatherForm />
        <WeatherNotFound />
        <WeatherCardsList />
      </div>
    );
  }
}

export class IndexPage extends React.Component {
  render() {
    return (
      <div align="center">
        <Title />
        <Content />
      </div>
    );
  }
}
