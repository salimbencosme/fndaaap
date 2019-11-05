import React, { Component } from 'react'; 
import slideone from '../../src/resources/img/1.jpg';
import slidetwo from '../../src/resources/img/bg.jpg';
class About extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {}

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div>
                <section id="top_banner">
                    <div class="banner">
                        <div class="inner text-center">
                            <h2>FUNDACIÓN NIDITO DE AMOR (FNDA)</h2>
                        </div>
                    </div>
                    <div class="page_info">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 col-sm-8 col-xs-6">
                                    <h4>FNDA</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section id="about-page-section-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-7 text-align">
                            <div class="section-heading">
                                <h2>Our <span>history</span></h2>
                            </div>
                            <p>
                            It was not the original idea
founding an organization or a
school, when in 2006 the founder,
Evely Peniche, teaching Bible
classes she realized that many
children were not attending school,
so she started teaching
six children from the community
to read and write.That way, in
the garage of her house and in a disinterested way, began the
journey of holding hands with the most needed ones in the
community of Villa Emmanuel, ending that school year with
 twelve students.
                                <br/><br/> 
                                As the number of students grew, it was necessary to register the organization and so we did, but when we saw how the children felt in a valuble and lovely environment the name "Nidito de Amor" was born, which means a small nest of love.
                                <br/><br/>
                                Currently under the responsibility of Nidito de Amor foundation, is not only Colegio Cristiano Espacio de Amor (which was what the small group of students became into) but also responsible for Escuela Cristiana Juan Calvino since 2014.
                                <br/><br/>
                                Throughout these 12 years the Nest of Love Foundation has contributed to the communities of Villa Emmanuel and Villa Esperanza,
 countless benefits to families of very scarce economic resources in Sosúa and Montellano, in the province of Puerto Plata
 that transcends beyond the classroom education, providing development, jobs, medical assistance, psychological assistance, nutrition, among other contributions.

                            </p>
                            <button type="button" class="btn btn-primary slide">Learn More <i class="fa fa-caret-right"></i></button>
                        </div>
            
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-5">
                            <img height="" width="auto" src={slideone} class="attachment-full img-responsive img-about" alt="" />
                            <br/>
                            <img height="" width="auto" src={slidetwo} class="attachment-full img-responsive img-about" alt="" />
                        </div>
                    </div>
                    </div>
    
                </section>



    <section id="team-member">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 xol-md-12 col-sm-12 col-xs-12">
                    <div class="section-heading text-center">
                    <h1>Our <span>Standards</span></h1>
                        <p class="subheading">This foundation is based on the following standards</p>
                    </div>
                    <div class="wpb_column vc_column_container col-md-3 col-sm-6 col-xs-6 block mybox">
                        <div class="vc_column-inner">
                            <div class="wpb_wrapper">
                                <div class="our-team main-info-below-image">
                                    <div class="our-team-inner">
                                 
                                        <div class="our-team-info">
                                            <div class="our-team-title-holder">
                                                <h5 class="our-team-name">Mission</h5>
                                            </div>
                                            <div class='our-team-text-inner'>
                                                <div class='our-team-description'>
                                                    <p>Our main focus is bringing support for the most needed people in the Dominican Republic, 
                                                        being our center of attention education based on Christian values in order to help vulnerable
                                                         people to have a better life not only while here on earth but also in the eternal life.
                                                         </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wpb_column vc_column_container col-md-3 col-sm-6 col-xs-6 block mybox">
                        <div class="vc_column-inner">
                            <div class="wpb_wrapper">
                                <div class="our-team main-info-below-image">
                                    <div class="our-team-inner">
                                   
                                        <div class="our-team-info">
                                            <div class="our-team-title-holder">
                                                <h5 class="our-team-name">Vision</h5>
                                            </div>
                                            <div class='our-team-text-inner'>
                                                <div class='our-team-description'>
                                                    <p>Nest of Love Foundation is a major force in transforming and growing individuals and communities showing a way out of the poverty cycle.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wpb_column vc_column_container col-md-6 col-sm-12 col-xs-12 block mybox 
box-b">
                        <div class="vc_column-inner ">
                            <div class="wpb_wrapper">
                                <div class="our-team main-info-below-image">
                                    <div class="our-team-inner">
                                   
                                        <div class="our-team-info">
                                            <div class="our-team-title-holder">
                                                <h5 class="our-team-name title-box">Core values</h5>
                                            </div>
                                            <div class='our-team-text-inner'>
                                                <div class='our-team-description'>
                                                    <div class="col-md-6 col-sm-12 col-xs-12">
                                                        <div class="about-box">
                                                            <h6 class="title-core title-box">Spiritual Development</h6>
                                                            <p> We strive to be a support spiritual development for each person we reach.</p>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6 col-sm-12 col-xs-12">
                                                    <div class="about-box">
                                                        <h6 class="title-core title-box">Culture of Collaboration and Excellence</h6>
                                                        <p> Working with cooperation as a team to achieve our goals, we challenge each other to reach the highest levels of excellence.</p>
                                                    </div>
                                                    </div>

                                                    <div class="col-md-6 col-sm-12 col-xs-12">
                                                    <div class="about-box">
                                                        <h6 class="title-core title-box">Transparency</h6>
                                                        <p> We are open with our associates and sponsors that trust in our work and those who, like us, believe that the change we are fighting for matters in our world.</p>
                                                    </div>
                                                    </div>

                                                    <div class="col-md-6 col-sm-12 col-xs-12">
                                                    <div class="about-box">
                                                        <h6 class="title-core title-box">Integrity</h6>
                                                        <p>We will adhere to moral and ethical principles.</p>
                                                    </div>
                                                    </div>

                                                    <div class="col-md-6 col-sm-12 col-xs-12">
                                                    <div class="about-box">
                                                        <h6 class="title-core title-box">Accountability</h6>
                                                        <p> Carry out all our work with the greatest responsibility and deliver high quality outcomes.</p>
                                                    </div>
                                                    </div>
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default About;