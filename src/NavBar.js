import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { withRouter } from "react-router";

class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    this.props.history.push(`/${name.toLowerCase()}`);
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="about"
          active={activeItem === "About"}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          name="services"
          active={activeItem === "services"}
          onClick={this.handleItemClick}
        >
          Services
        </Menu.Item>
      </Menu>
    );
  }
}
export default withRouter(NavBar);
