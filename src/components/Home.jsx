import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return(
            <div>
            <Image src="assets/home-page.jpg" className="header-image" />
            <Grid>
                    <Jumbotron>
                        <h2>Welcome to ......</h2>
                        <p>This is how to build a website with react</p>
                        <Link to="/about">
                            <Button bsStyle="primary">About</Button>
                        </Link>
                    </Jumbotron>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="person-wraper">
                            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
                            <h3>Frank</h3>
                            <p>That's crooked tree. we'll send him to washington. These little woried about</p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wraper">
                            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
                            <h3>Vanessa</h3>
                            <p>That's crooked tree. we'll send him to washington. These little woried about</p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wraper">
                            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
                            <h3>Riff</h3>
                            <p>That's crooked tree. we'll send him to washington. These little woried about</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}