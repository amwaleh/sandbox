import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import About from "./About";
import Services from "./Services";
import Profile from "./Profile";
import NavBar from "./NavBar";
import Contacts from "./Contacts";
import Footer from "./footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  state = {
    indicator: 0
  };
  // static propType ={
  // https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css
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
          <Route path="/contacts/" component={Contacts} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// if
