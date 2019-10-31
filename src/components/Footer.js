import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {}

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div >

    <section id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-12 block">
                    <div class="footer-block">
                        <h4>Address</h4>
                        <hr/>
                        <p>
                                Carretera Bella Vista, Villa Emmanuel, 
                                Sosua, Puerto Plata,
                                Dominican Republic
                                57000
                        </p>
                        <a href="#" class="learnmore"><Link to="/about">Know More <i class="fa fa-caret-right"></i></Link></a>
                    </div>
                </div>

                <div class="col-md-3 col-sm-3 col-xs-12 block">
                    <div class="footer-block">
                        <h4>Useful Links</h4>
                        <hr/>
                        <ul class="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">Our History</Link></li>
                            <li><Link to="/team">Volunteer Team</Link></li>
                            <li><Link to="/donate">Donate</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-1 col-sm-1 col-xs-12 block">

                   
                </div>

                <div class="col-md-5 col-sm-5 col-xs-12 <block></block>">
                <form action="https://facebook.us14.list-manage.com/subscribe/post?u=e5ae0910ebab0bff1a5fd7db1&amp;id=1f9d171bf7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                        <h2>Subscribe</h2>
                        <br/>
                    <div class="mc-field-group">
                        <label for="mce-EMAIL">Email Address </label>
                        <input type="email"  name="EMAIL" class="required email input-subscribe" id="mce-EMAIL" required/>
                    </div>
                    <div class="mc-field-group">
                        <label style={{display:'none'}} for="mce-MMERGE3">Name/s  <span class="asterisk">*</span>
                    </label>
                        <input style={{display:'none'}} type="text" value="Web page subscriber" name="MMERGE3" class="required" id="mce-MMERGE3" />
                    </div>

                        <div style={{float:'right'}} class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button input-subscribe-button"/></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    </section>

    <section id="bottom-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12 btm-footer-links">
                
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 copyright">
                    Developed by <a href="#">Salim Software Developer</a>                </div>
            </div>
        </div>
    </section>

    <div id="panel"></div>
            </div>
        );
    }
}

export default Footer;