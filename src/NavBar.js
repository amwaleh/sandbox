import React, { Component } from "react";
import { Menu, Image, Grid } from "semantic-ui-react";
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
      <Menu
        as={Grid}
        style={{ position: "fixed", zIndex: "999", width: "100%" }}
      >
        <Menu.Item
          name="home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
          as={Grid.Column}
          tablet={3}
          only="computer tablet"
        >
          <Image src="http://www.courierint.com/images/logo.png" avatar />
        </Menu.Item>
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
        <Menu.Item
          name="contacts"
          active={activeItem === "Contacts"}
          onClick={this.handleItemClick}
        >
          Contacts
        </Menu.Item>
      </Menu>
    );
  }
}
export default withRouter(NavBar);
