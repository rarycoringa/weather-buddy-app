import React from 'react';
import { Title } from '../components/Title';
import { FirstCityForm, SecondCityForm} from '../components/Forms';
import { WeatherCard, WeatherCardsList, WeatherNotFound } from '../components/Weather';

export class IndexPage extends React.Component {
  render() {
    return (
      <div align="center">
        <Title />
        <FirstCityForm />
      </div>
    );
  }
}
