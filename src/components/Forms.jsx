import React from 'react';

export class FirstCityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('City: ' + this.state.value);

  }

  render() {
    return (
      <form class="first" onSubmit={this.handleSubmit}>
        <h2>How is the weather in</h2>
        <input type="text" value={this.state.value} name="city" onChange={this.handleChange}/>
        <h2>now?</h2>
      </form>
    );
  }
}

export class SecondCityForm extends React.Component {
  render() {
    return (
      <form class="second">
        <h3>How is the weather in</h3>
        <input type="text" name="city" />
        <h3>now?</h3>
      </form>
    );
  }
}
