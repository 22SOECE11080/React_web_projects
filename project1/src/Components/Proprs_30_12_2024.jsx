import React from "react";

export class Proprs_30_12_2024 extends React.Component {
  state = {
    first: true,
    second: 2.45,
    third: "hello",
    statestate: "This is a new state variable",
  };

  constructor() {
    super();
    setTimeout(
      () =>
        this.setState({
          first: false,
          second: 2.45 + 10,
          third: "Hello, React!",
          statestate: "This state variable has been updated!",
        }),
      5000
    );
  }

  render() {
    const { first, second, third, statestate } = this.state;
    return (
      <div className="container">
        <button type="button">First {first.toString()}</button>
        <br />
        <p>Value of the floating is {second}</p>
        <br />
        <p>Value {third}</p>
        <br />
        <p>{statestate}</p>
      </div>
    );
  }
}

export default Proprs_30_12_2024;