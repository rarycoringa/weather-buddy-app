import React from 'react';

export class FirstCityForm extends React.Component {
  render() {
    return (
      <form class="first">
        <h2>How is the weather in</h2><input type="text" name="city" /><h2>now?</h2>
      </form>
    );
  }
}

export class SecondCityForm extends React.Component {
  render() {
    return (
      <form class="second">
        <h3>How is the weather in</h3><input type="text" name="city" /><h3>now?</h3>
      </form>
    );
  }
}
