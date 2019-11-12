import React, { Component } from 'react';
import { Link } from "react-router-dom";
import slideone from '../../src/resources/img/banner-slide-1.jpg';
import slidetwo from '../../src/resources/img/banner-slide-2.jpg';
import slidethree from '../../src/resources/img/banner-slide-3.jpg';
import memberone from '../../src/resources/img/28.jpeg'; 
import membertwo from '../../src/resources/img/24.jpeg'; 
import memberthree from '../../src/resources/img/25.jpg'; 
import memberfour from '../../src/resources/img/26.jpg'; 
import memberfive from '../../src/resources/img/29.jpg';
import membersix from '../../src/resources/img/27.jpg'; 

import memberChildrenOne from '../../src/resources/img/30.jpg'; 
import memberChildrenTwo from '../../src/resources/img/31.jpg'; 
import memberChildrenThree from '../../src/resources/img/32.jpg'; 



class Home extends Component {


    componentWillReceiveProps(nextProps) {}

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div>
        
    <div id="myCarousel" class="carousel slide">
  
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

  
        <div class="carousel-inner">
            <div class="item active">
                <div class="fill" style={{ backgroundImage:  `url(${slideone})` }}></div>
                <div class="carousel-caption slide-up">
                    <h1 class="banner_heading">We make a living from what we <span>receive </span> but also</h1>
                    <p class="banner_txt">we make a living from what we give (John Maxwell).</p>
                    <div class="slider_btn">
                    <Link to="/donate" class="btn btn-default slide">Donate <i class="fa fa-caret-right"></i></Link>
                    <Link to="/about" class="btn btn-primary slide">Know more <i class="fa fa-caret-right"></i></Link>
                    </div>
                </div>
            </div>

            <div class="item">
                <div class="fill" style={{ backgroundImage:  `url(${slidetwo})` }}></div>
                <div class="carousel-caption slide-up">
                    <h1 class="banner_heading">We have come to this <span>world </span>as brothers</h1>
                    <p class="banner_txt">let us walk, then, shaking hands and one in front of another (William Shakespeare).</p>
                    <div class="slider_btn">
                    <Link to="/donate" class="btn btn-default slide">Donate <i class="fa fa-caret-right"></i></Link>
                    <Link to="/about" class="btn btn-primary slide">Know more <i class="fa fa-caret-right"></i></Link>
                    </div>
                </div>
            </div>

            <div class="item">
                <div class="fill" style={{ backgroundImage:  `url(${slidethree})` }}></div>
                <div class="carousel-caption slide-up">
                    <h1 class="banner_heading">Be the change <span>you </span>want</h1>
                    <p class="banner_txt">to see in the world (Mahatma Gandhi).</p>
                    <div class="slider_btn">
                    <Link to="/donate" class="btn btn-default slide">Donate <i class="fa fa-caret-right"></i></Link>
                    <Link to="/about" class="btn btn-primary slide">Know more <i class="fa fa-caret-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>

        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"> <i class="fa fa-angle-left blue-special" aria-hidden="true"></i>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"> <i class="fa fa-angle-right blue-special" aria-hidden="true"></i>
            <span class="sr-only">Next</span>
        </a>

    </div>

    <section id="features">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-xs-12 block">
                    <div class="col-md-2 col-xs-2"><i class="fa fa-chevron-circle-right feature_icon"></i></div>
                    <div class="col-md-10 col-xs-10">
                        <h4>Mission</h4>
                        <p>Our main focus is bringing support for the most needed people in the Dominican Republic, 
                                                        being our center of attention education based on Christian values</p>
                        <Link to="/about" class="readmore">Read More <i class="fa fa-caret-right blue-special"></i></Link>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12 block">
                    <div class="col-md-2 col-xs-2"><i class="fa fa-chevron-circle-right feature_icon"></i></div>
                    <div class="col-md-10 col-xs-10">
                        <h4>Vision</h4>
                        <p>Nest of Love Foundation is a major force in transforming and growing individuals and communities showing a way out of the poverty cycle.</p>
                        <Link to="/about" class="readmore">Read More <i class="fa fa-caret-right blue-special"></i></Link>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12 block">
                    <div class="col-md-2 col-xs-2"><i class="fa fa-chevron-circle-right feature_icon"></i></div>
                    <div class="col-md-10 col-xs-10">
                        <h4>Core values</h4>
                        <p>Spiritual Development, Culture of Collaboration, Transparency, Integrity, Accountability...</p>
                        <Link to="/about" class="readmore">Read More <i class="fa fa-caret-right blue-special"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="about">
        <div class="image-holder col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left">
            <div class="background-imgholder">
                <img src="img/1.jpg" alt="about" class="img-responsive" style={{display:'none'}} />
            </div>
        </div>

        <div class="container-fluid">

            <div class="col-md-7 col-md-offset-5 col-sm-8 col-sm-offset-2 col-xs-12 text-inner ">
                <div class="text-block">
                    <div class="section-heading">
                        <h1 class="color-crema">ABOUT <span class="color-crema">US</span></h1>
                        <p class="subheading">Throughout these 12 years the Nest of Love Foundation has contributed to the community of Villa Emmanuel and Villa Esperanza,
                        innumerable benefits to families of very scarce economic resources in Sosúa and Montellano,
                        in the province of Puerto Plata. <br/> <span class="color-crema">We</span> are contributing with: </p>
                    </div>

                    <ul class="aboutul">
                        <li> <i class="fa fa-check blue-special"></i>Classroom education.</li>
                        <li> <i class="fa fa-check blue-special"></i>Providing development.</li>
                        <li> <i class="fa fa-check blue-special"></i>Jobs.</li>
                        <li> <i class="fa fa-check blue-special"></i>Psychological assistance.</li>
                    </ul>

                    <Link to="/about" class="btn btn-primary slide">Know More  <i class="fa fa-caret-right"></i> </Link>

                </div>
            </div>
        </div>
    </section>


    <section id="process">
        <div class="container">
            <div class="section-heading text-center">
                <div class="col-md-12 col-xs-12">
                    <h1>Our <span>Team</span></h1>
                    <p class="subheading">We use the talents and resources of our donors to change the future of every child that knocks on our door.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3 col-sm-6 block process-block">
                    <div class="process-icon-holder">
                        <div class="process-border">
                            <span class="process-icon"><Link to="/team"><img src={memberone} alt="user" class="img-responsive img-team" /></Link></span></div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="process-text-block">
                    <h4><a class="anchor-blue" href="#">President</a></h4>
                        <p>EVELY PENICHE MARTÍNEZ</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 block process-block">
                    <div class="process-icon-holder">
                        <div class="process-border">
                            <span class="process-icon"><Link to="/team"><img src={membertwo} alt="user" class="img-responsive img-team" /></Link></span></div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="process-text-block">
                        <h4><a class="anchor-blue" href="#">Vice-President</a></h4>
                        <p>FELIX DARIEL RODRIGUEZ GARCIA</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 block process-block">
                    <div class="process-icon-holder">
                        <div class="process-border">
                            <span class="process-icon"><Link to="/team"><img src={memberthree} alt="user" class="img-responsive img-team" /></Link></span></div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="process-text-block">
                        <h4><a class="anchor-blue" href="#">Secretary</a></h4>
                        <p>ANA LIDIA DEL PILAR RODRIGUEZ</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 block process-block lastchild">
                    <div class="process-icon-holder">
                        <div class="process-border">
                            <span class="process-icon"><Link to="/team"><img src={memberfour} alt="user" class="img-responsive img-team" /></Link></span></div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="process-text-block">
                        <h4><a class="anchor-blue" href="#">Treasurer</a></h4>
                        <p>PEDRO VILLAMAN</p>
                    </div>
                </div>
            </div>

            <div class="row">

            <div class="col-md-3 col-sm-6 block process-block">
                   
                   </div>

                <div class="col-md-3 col-sm-6 block process-block">
                    <div class="process-icon-holder">
                        <div class="process-border">
                            <span class="process-icon"><Link to="/team"><img src={memberfive} alt="user" class="img-responsive img-team" /></Link></span></div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="process-text-block">
                        <h4><a class="anchor-blue" href="#">Sponsors and Donors Relations</a></h4>
                        <p>KEIRY ATALIA ALONZO DE GARCIA</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 block process-block lastchild">
                    <div class="process-icon-holder">
                        <div class="process-border">
                            <span class="process-icon"><Link to="/team"><img src={membersix} alt="user" class="img-responsive img-team" /></Link></span></div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="process-text-block">
                        <h4><a class="anchor-blue" href="#">Vice-All</a></h4>
                        <p>PEDRO MARRERO CASTILLO</p>
                    </div>
                </div>
            
                <div class="col-md-3 col-sm-6 block process-block lastchild">
                    
                </div>
            </div>


        </div>
    </section>


    <section id="testimonial">
        <div class="container">
            <div class="section-heading text-center">
                <div class="col-md-12 col-xs-12">
                    <h1>Our <span>Children</span></h1>
                    <p class="subheading new-box">"Within each social group a feeling of solidarity prevails,
                     an urgent need to work together and enjoy doing so, which represents a high moral value" (Christian Lous Lange)</p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 col-sm-12 block ">
                    <div class="testimonial_box">
                        <p>I want to thank you with all my heart for everything you have sacrificed for me. </p>
                    </div>
                    <div class="arrow-down"></div>
                    <div class="testimonial_user">
                        <div class="user-image"><img src={memberChildrenOne} alt="user" class="img-responsive img-children img-children-dois" /></div>
                        <div class="user-info">
                            <h5>Yaniel Vasquez</h5>
                            <p><Link class="a-special" to="/donate">Donate to others</Link></p>
                        </div>
                    </div>
                </div>


                <div class="col-md-4 col-sm-12 block">
                    <div class="testimonial_box">
                        <p>Thank you for your trust in me when nobody wanted to do it. </p>
                    </div>
                    <div class="arrow-down"></div>
                    <div class="testimonial_user">
                        <div class="user-image"><img src={memberChildrenTwo} alt="user" class="img-responsive img-children img-children-dois" /></div>
                        <div class="user-info">
                            <h5>Soraily Martinez</h5>
                            <p><Link class="a-special" to="/donate">Donate to others</Link></p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-sm-12 block">
                    <div class="testimonial_box">
                        <p>Thank you so much for all the good things you have done for me. </p>
                    </div>
                    <div class="arrow-down"></div>
                    <div class="testimonial_user">
                        <div class="user-image"><img src={memberChildrenThree} alt="user" class="img-responsive img-children img-children-dois" /></div>
                        <div class="user-info">
                            <h5>Vikace Morfe</h5>
                            <p><Link class="a-special" to="/donate">Donate to others</Link></p>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </section>

            </div>
        );
    }
}

export default Home;