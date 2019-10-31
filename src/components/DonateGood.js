import React, { Component } from 'react';
import { Link } from "react-router-dom";

class DonateGood extends Component {

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
                    <div class="text-block-dos" >
                        <div class="section-heading">
                            <center><h1 class="color-crema">thanks for your donations</h1></center>
                            <br/>
                            <p class="subheading" style={{textAlign:"center"}}> <i class="fa fa-check blue-special"></i>Without your donations, the children at our schools would not be receiving the support they urgently need. Thank you for considering donating to our cause.</p>
                        </div>
    
                        <center>
                            <Link to="/" class="btn btn-primary slide">Go Home  <i class="fa fa-caret-right"></i> </Link>
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

export default DonateGood;