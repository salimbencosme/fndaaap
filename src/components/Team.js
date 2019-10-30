import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav as NAVT } from 'react-bootstrap'
import { manageLanguage, closeMenuAfterCliked } from '../common/Utils';
import memberone from '../../src/resources/img/28.jpeg'; 
import membertwo from '../../src/resources/img/24.jpeg'; 
import memberthree from '../../src/resources/img/25.jpg'; 
import memberfour from '../../src/resources/img/26.jpg'; 
import memberfive from '../../src/resources/img/29.jpg';
import membersix from '../../src/resources/img/27.jpg'; 

class Team extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {}

    componentDidMount() {}

    render() {
        return (
              
                    <section id="portfolio">
        <div class="container">
            <div class="row">
                <div class="section-heading text-center">
                    <div class="col-md-12 col-xs-12">
                        <h1>Our <span>Volunteer Team</span></h1>
                        <p class="subheading">Good teams incorporate teamwork into their culture, creating the bricks for success</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <div class="portfolio-img"><img alt="" src={memberone} /></div>
                            <div class="portfolio-hover">
                               <center>
                               <h4 class="title img-team-special">President</h4>
                               </center>
                            </div>
                        </div>
                     
                        <div class="portfolio-content">
                            <h4 class="title">EVELY PENICHE MARTÍNEZ</h4>
                            <p>Evely is also the founder of the organization, in 2006 In her house' garage, she is a tireless woman that loves serving others.</p>
                        </div>
                   
                    </div>
   
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <div class="portfolio-img"><img alt="" src={membertwo}/></div>
                            <div class="portfolio-hover">
                            <center>
                               <h4 class="title img-team-special">Vice-President</h4>
                               </center>
                            </div>
                        </div>
                        
                        <div class="portfolio-content">
                            <h5 class="title">FELIX DARIEL RODRIGUEZ</h5>
                            <p>Felix Dariel is a young Christian that has brought to Nest of Love a fresh perspective and is evident his great desire to help those in need and he believes that the cause we are fighting for, has an impact on our world.</p>
                        </div>
                     
                    </div>
                   
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <div class="portfolio-img"><img alt="" src={memberthree}/></div>
                            <div class="portfolio-hover">
                            <center>
                               <h4 class="title img-team-special">Secretary</h4>
                               </center>
                            </div>
                        </div>
                     
                        <div class="portfolio-content">
                            <h5 class="title">ANA LIDIA DEL PILAR</h5>
                            <p>Ana Lidia has a big heart to serve, she joined the cause with the intention that these children continue to receive the word of God.</p>
                        </div>
                   
                    </div>
                  
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <div class="portfolio-img"><img alt="" src={memberfour}/></div>
                            <div class="portfolio-hover">
                            <center>
                               <h4 class="title img-team-special">Treasurer</h4>
                               </center>
                            </div>
                        </div>
                      
                        <div class="portfolio-content">
                            <h5 class="title">PEDRO VILLAMAN</h5>
                            <p>Pedro is with the school since its beginning. He used to go from Puerto Plata to Sosúa, to teach Bible classes every week to the students, he is a Godly man always ready to serve the Lord wherever he is needed.</p>
                        </div>
                     
                    </div>
                    
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <div class="portfolio-img"><img alt="" src={memberfive}/></div>
                            <div class="portfolio-hover">
                            <center>
                               <h4 class="title img-team-special">Sponsors and Donors <br/>Relations.</h4>
                               </center>
                            </div>
                        </div>
              
                        <div class="portfolio-content">
                            <h5 class="title">KEIRY ATALIA DE GARCIA </h5>
                            <p>Keiry has inherited the love to the needed students and families, even before she was of -legal- age, she was involved in the school related tasks.</p>
                        </div>
                   
                    </div>
                   
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <div class="portfolio-img"><img alt="" src={membersix}/></div>
                            <div class="portfolio-hover">
                            <center>
                               <h4 class="title img-team-special">Vice-All</h4>
                               </center>
                            </div>
                        </div>
                     
                        <div class="portfolio-content">
                            <h5 class="title">PEDRO MARRERO CASTILLO</h5>
                            <p>Pedro has joined this project and is part of this board of directors where our God gives him the wisdom for those moments when great and new ideas are needed.</p>
                        </div>
                    
                    </div>
                 
                </div>
            </div>
         
         </div>
         </section>
        );
    }
}

export default Team;