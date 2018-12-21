import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import About from "./about";
import Services from "./services";
import Profile from "./Profile";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    return (
      <Router>
        <React.Fragment>
          <NavBar inverted />
          <Route path="/" exact component={Profile} />
          <Route path="/home" exact component={Profile} />
          <Route path="/about/" component={About} />
          <Route path="/services/" component={Services} />
        </React.Fragment>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// if
