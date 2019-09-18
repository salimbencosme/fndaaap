import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav as NAVT } from 'react-bootstrap'
import { manageLanguage,closeMenuAfterCliked } from '../common/Utils';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: 'english'
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.language });
  }

  componentDidMount() {
    this.setState({ language: this.props.language });
  }

  render() {
    return (
     <h1>AQUI NAV</h1>
    );
  }
}

export default Nav;