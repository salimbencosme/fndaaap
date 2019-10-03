import React, {Component} from 'react';
import { Container, Row, Col, Pager } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../resources/framework/scss/main.css';
import '../resources/framework/scss/skin.css';

class Main extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const childrenWithExtraProp = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
             
            });
          });

        return (
            <div id="body">
                <Nav  />
                {childrenWithExtraProp}
                <Footer />
            </div>

        );
    }
}

export default Main;