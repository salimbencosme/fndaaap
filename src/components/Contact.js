import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav as NAVT } from 'react-bootstrap'
import { manageLanguage, closeMenuAfterCliked } from '../common/Utils';

import emailjs from 'emailjs-com';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            phone: '',
            companyName: '',
            title: '',
            content: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {}

    componentDidMount() {}

    
    handleChange(event) {
        this.setState(
            {
                fullname: (event.target.id === 'fullname') ? event.target.value : this.state.fullname,
                email: (event.target.id === 'email') ? event.target.value : this.state.email,
                phone: (event.target.id === 'phone') ? event.target.value : this.state.phone,
                companyName: (event.target.id === 'company') ? event.target.value : this.state.companyName,
                title: (event.target.id === 'title') ? event.target.value : this.state.title,
                content: (event.target.id === 'content') ? event.target.value : this.state.content
            }
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(this.state);

        const templateParams = {
            from_name: 'Salim Bencosme REacje',
            to_name: 'James',
            message_html: 'Check this out! Salim'
        };
         
        emailjs.send( 'outlook','template_UR8MLG1o', templateParams, 'user_iE9jg5rjjd6xsbKUB2PoF')
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            });


/*
        let info = {
            content: this.state.content,
            date_created: currentDateWithFormat(),
            email: this.state.email,
            fullname: this.state.fullname,
            title: this.state.title
        }

        try {
            saveContact(info);
            this.setState(
                {
                    fullname: '',
                    email: '',
                    title: '',
                    content: ''
                }
            );
            NotificationManager.success(manageLanguage(this.state.language, 'Mensaje enviado con éxito', 'Message sent succesfully'));
        } catch (e) {
            NotificationManager.error(manageLanguage(this.state.language, 'No se pudo guardar la información.', 'Could not save the information'));
        }
*/

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
                                    <h4>Contact</h4>
                                </div>
           
                            </div>
                        </div>
                    </div>
            </section>

            <section id="contact-page">
                <div class="container">
                    <div class="section-heading text-center">
                        <h2>Drop your <span>Message</span></h2>
                        <p class="subheading">If you have any questions or concerns, do not limit yourself. Contact us we are with the best desire to clarify anything.</p>
                    </div>
                    <div class="row contact-wrap">
                        <div class="status alert alert-success" style={{display:"none"}}></div>
                        <center style={{width:"100%"}}>
                        <div id="mc_embed_signup">
<form  action="https://outlook.us20.list-manage.com/subscribe/post?u=985ea8f79230596ba75fbf177&amp;id=8e3fb7cdc3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate contact-form" target="_blank" novalidate>
   

    <div id="mc_embed_signup_scroll">
	<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
    <div class="col-sm-5 col-sm-offset-1">
        <div class="form-group">
            <label style={{float:'left'}} for="mce-FNAME">Name  <span class="asterisk">*</span></label>
            <input type="text"  name="FNAME" class="form-control" id="mce-FNAME" required/>
        </div>

        <div class="form-group">
            <label style={{float:'left'}} for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
            <input type="email"  name="EMAIL" class="form-control email" id="mce-EMAIL" required />
        </div>

        <div class="form-group">
            <label style={{float:'left'}} for="mce-PHONE">Phone Number </label>
            <input type="number" name="PHONE" class="form-control"  id="mce-PHONE" />
        </div>

        <div class="form-group">
            <label style={{float:'left'}} for="mce-LCOMPANY">Company Name </label>
            <input type="text"  name="LCOMPANY" class="form-control" id="mce-LCOMPANY" />
            
        </div>
                  
    </div>

    <div class="col-sm-5">
        <div class="form-group">
            <label style={{float:'left'}} for="mce-LSUBJECT">Subject  <span class="asterisk">*</span></label> 
            <input type="text"  name="LSUBJECT" class="form-control" id="mce-LSUBJECT" required />                         
        </div>

        <div class="form-group">
            <label style={{float:'left'}} for="mce-LMESSAGE">Message  <span class="asterisk">*</span></label>
            <textarea name="LMESSAGE" class="form-control" id="mce-LMESSAGE" rows="8"  required></textarea>
        </div>

        <div class="form-group">
           <button type="submit" name="submit" class="btn btn-default submit-button float-right">Submit Message <i class="fa fa-caret-right"></i></button>
         </div>
    
            </div></div>
    

</form>
</div>
</center>




                    </div>
                </div>
            </section>


            <section id="contact">
                <div class="overlay">
                    <div class="gmap-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-5">
                                    <div class="gmap">
                                    
                                        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Colegio%20Espacio%20de%20Amor.%20Nest%20Of%20Love%20School&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-sm-7 map-content">
                                    <ul class="row">
                                        <li class="col-sm-12">
                                            <address>
                                            <h5>Address</h5>
                                            <p>Carretera Bella Vista, Villa Emmanuel, Sosua, Puerto Plata, Dominican Republic 57000 </p>
                                                <p>Phone:+1 809 739 2105 <br/>
                                            Email Address:nestoflovefoundation@outlook.com</p>
                                        </address>

                                        </li>
                                      
                                    </ul>
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

export default Contact;