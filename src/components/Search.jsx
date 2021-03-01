import React from 'react';

export class FirstCityInput extends React.Component {
  render() {
    return (
      <div>
        <h2>How is the weather in <u>Florianópolis</u> now?</h2>
      </div>
    );
  }
}

export class SecondCityInput extends React.Component {
  render() {
    return (
      <div>
        <h3>How is the weather in <u>Florianópolis</u> now?</h3>
      </div>
    );
  }
}

export class CityNotFound extends React.Component {
  render() {
    return (
      <div>
        <h2 class="error">Sorry. We couldn't find the specified city.</h2>
      </div>
    );
  }
}
