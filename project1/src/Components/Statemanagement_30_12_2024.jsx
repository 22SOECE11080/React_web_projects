import React from "react";

export class Statemanagement_30_12_2024 extends React.Component {
  state = {
    first: "loading....",
    second: "loading....",
    third: "loading....",
    fourth: "loading....",
    cmpmsg: "loading done",
  };

  constructor(props) {
    super(props); // Always pass `props` to the constructor when using React.Component
    setTimeout(() => this.setState({ first: "done" }), 2000);
    setTimeout(() => this.setState({ second: "done" }), 4000);
    setTimeout(() => this.setState({ third: "done" }), 6000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        first: state.cmpmsg,
        second: state.cmpmsg,
        third: state.cmpmsg,
        fourth: state.cmpmsg,
      }));
    }, 8000);
  }

  render() {
    return (
      <div>
        <h2>State Values:</h2>
        <ul>
          {Object.keys(this.state)
            .filter((key) => key !== "cmpmsg") // Exclude 'cmpmsg' from the list
            .map((key) => (
              <li key={key}>
                <strong>{key}</strong>: {this.state[key]}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Statemanagement_30_12_2024;
