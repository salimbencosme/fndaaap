import React, { Component } from 'react';
import { Link } from "react-router-dom";

class DonateFail extends Component {

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

<section id="features-page">
           
    </section>
            <section id="about" style={{marginTop:"14px"}}>
    
            <div class="container-fluid">
    
                <div class="col-md-12 col-sm-12 col-xs-12 text-inner ">
                    <div class="text-block" >
                        <div class="section-heading">
                            <center><h1 class="color-crema">something went wrong with the donation</h1></center>
                            <br/>
                            <p class="subheading" style={{textAlign:"center"}}> <i class="fa fa-check blue-special"></i>We are interested in knowing what happened at the time of making the donation. Please do not hesitate to tell us what happened.</p>
                        </div>
    
                        <center>
                            <Link to="/contact" class="btn btn-primary slide">Please tell us  <i class="fa fa-caret-right"></i> </Link>
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

export default DonateFail;