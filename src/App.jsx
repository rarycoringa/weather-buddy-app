import React from 'react';
import './App.css';
import { FirstCityInput, SecondCityInput, CityNotFound } from './components/Search'
import { Title } from './components/Title'
import { WeatherCard, WeatherCardsList } from './components/Weather'

export class App extends React.Component {
  render() {
    return (
      <div align="center">
        <Title />

        <FirstCityInput />
        <CityNotFound />

        <SecondCityInput />

        <WeatherCard city="Florianópolis" temp="22" weather="Light Rain" />

        <WeatherCardsList />
      </div>
    );
  }
}
