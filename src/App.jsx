import React from 'react';
import './App.css';
import { FirstCityForm, SecondCityForm} from './components/Forms'
import { Title } from './components/Main'
import { WeatherCard, WeatherCardsList, WeatherNotFound } from './components/Weather'

export class App extends React.Component {
  render() {
    return (
      <div align="center">
        <Title />

        <FirstCityForm />
        
        <WeatherNotFound />

        <SecondCityForm />

        <WeatherCard city="Florianópolis" temp="22" weather="Light Rain" />

        <WeatherCardsList />
      </div>
    );
  }
}
