import React, { Component } from "react";
import ReactDOM from "react-dom";
import 
import "./styles.css";

const sine = x => Math.sin(x);

const annoying_loop = () => {
  for (let i = 0; i < 100; i++) {
    sine(i);
  }
};

class App extends Component {
  state = {
    indicator: 0,
  };
  onMouseMove = () => {
    this.setState(prevState => ({
      indicator: prevState.indicator + 1
    }));
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2 onMouseMove={this.onMouseMove}>
          Start editing to see some magic happen!
        </h2>
        hello {this.state.indicator}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// if 