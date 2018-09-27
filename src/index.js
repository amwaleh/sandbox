import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import Card from "./Card";
import Profile from "./Profile";

class App extends Component {
  state = {
    indicator: 0
  };
  // static propType ={

  // }

  onMouseMove = () => {
    this.setState(prevState => ({
      indicator: prevState.indicator + 1
    }));
  };
  render() {
    return <Profile />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// if
