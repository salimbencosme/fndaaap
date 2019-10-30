import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav as NAVT } from 'react-bootstrap'
import logo from '../../src/resources/img/logo.png'; 

class Nav extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {}

    componentDidMount() {}

    render() {
        return (
            <div >

<section id="top-header">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-sm-7 col-xs-7 top-header-links">
                    <ul class="contact_links">
                        <li><i class="fa fa-phone"></i><Link to="/contact">+1 809 739 2105</Link></li>
                        <li><i class="fa fa-envelope"></i><Link to="/contact">nestoflovefoundation@outlook.com</Link></li>
                    </ul>
                </div>
                <div class="col-md-5 col-sm-5 col-xs-5 social">
                    <ul class="social_links">
                        <li><a href="https://www.facebook.com/nestoflovef/"><i class="fa fa-facebook"></i></a></li>
                        <li style={{display:'none'}}><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li style={{display:'none'}}><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li style={{display:'none'}}><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        <li style={{display:'none'}}><a href="#"><i class="fa fa-skype"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    

    </section>
                
    <header>
        <nav class="navbar navbar-inverse">
            <div class="container">
                <div class="row">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>

              <Link class="navbar-brand" to="/">
                   <span> <img src={logo} alt="user" class="img-responsive logo" /></span>
                 
              </Link>

                    </div>
                    <div id="navbar" class="collapse navbar-collapse navbar-right">
                        <ul class="nav navbar-nav">
                            <li ><Link to="/">Home</Link></li>
                            <li><Link to="/about">Our history</Link></li>
                            <li><Link to="/team">Volunteer team</Link></li>
                            <li><Link to="/donate">Donate</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
               
                </div>
            </div>
        </nav>
    </header>


            </div>
        );
    }
}

export default Nav;