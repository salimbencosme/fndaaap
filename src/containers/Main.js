import React, {Component} from 'react';
import { Container, Row, Col, Pager } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav';

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
            <div>
                <Nav  classparam="nav-bar-style-blue" />
                <Container>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <br />
                            {childrenWithExtraProp}
                            <br />
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="panelNews">
                                <h1>AQUI PANEL SALIM</h1>
                            </div>
                        </Col>
                    </Row>

                </Container>

            </div>

        );
    }
}

export default Main;