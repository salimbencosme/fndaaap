import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav as NAVT } from 'react-bootstrap'
import { manageLanguage, closeMenuAfterCliked } from '../common/Utils';
import photo from '../../src/resources/img/55.jpg'; 
import membertwo from '../../src/resources/img/24.jpeg'; 
import memberthree from '../../src/resources/img/25.jpg'; 
import memberfour from '../../src/resources/img/26.jpg'; 
import memberfive from '../../src/resources/img/29.jpg';
import membersix from '../../src/resources/img/27.jpg'; 

class Donate extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {}

    componentDidMount() {}

    render() {
        return (
            <div>

<section id="features-page">
    
        <div class="subsection2">
            <div class="container">
                <div class="col-xs-12 col-sm_12 col-md-12 col-lg-12 left">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 wpb_column">
                        <div class="wpb_wrapper">
                            <center>
                                <h3>"Nothing releases our greatness as the desire to help and serve"</h3>
                                <hr class="special-hr"/>
                            </center>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>



       
    </section>


            <section id="about">
            <div class="image-holder col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left">
                <div>
                    <img src={photo} alt="about" class="img-responsive background-imgholder-dos"  />
                </div>
            </div>
    
            <div class="container-fluid">
    
                <div class="col-md-7 col-md-offset-5 col-sm-8 col-sm-offset-2 col-xs-12 text-inner ">
                    <div class="text-block">
                        <div class="section-heading">
                            <center><h1 class="color-crema">DONATE</h1></center>
                            <br/>
                            <p class="subheading"> <i class="fa fa-check blue-special"></i>Your donations and sponsorships can have a huge impact on the life of +500 children, their families, the country and the world. This is a way to keep the schools operating. Most of the parents of our students don’t have a formal job or are underpaid.
 Sometimes children do not have or live with their parents, school tuition is too much for their low income and public schools are normally overcrowded or too far from home…
<br/> <i class="fa fa-check blue-special"></i>Most of our students come from the houses that Samaritan Foundation donate to families in destitute conditions; normally they are a family of 3, 4 or even 5 children, so, you get the picture… 
<br/>  <i class="fa fa-check blue-special"></i> Your support makes it possible for us to keep our doors open to the children, it also helps them to have a better future, so they are able to break the poverty cycle, and certainly this quality of education may bring along better job opportunities, hope and self-growth. <br/> <span class="color-crema">We</span> are contributing with: </p>
                        </div>
    
                        <center>
                            <Link style={{display:"none"}} to="/about" class="btn btn-primary slide">make my contribution  <i class="fa fa-caret-right"></i> </Link>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="hosted_button_id" value="ZNSN5B8KRLJTE" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" border="0" src="https://www.paypal.com/en_DO/i/scr/pixel.gif" width="1" height="1" />
                            </form>


                        </center>
                        
    
                    </div>
                </div>
            </div>
        </section>
        <br/>
        <br/>
                </div>
        
        );
    }
}

export default Donate;