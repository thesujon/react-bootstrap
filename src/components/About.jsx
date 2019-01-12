import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return(
            <div>
                
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
                        <h3>Frank The Tank</h3>
                        <p>Thats a croked tree. well send him to washington. These little son of a guns hide in your</p>
                        <p>Anyone can paint. You can do anything here. so sont warry about it. Life is to short to be do anyting</p>
                        <p>Thats a croked tree. well send him to washington. These little son of a guns hide in your</p>
                        <p>Thats what makes life fun. That you can make these decision. that you can create the workld.</p>
                    </Col>
                </Grid>
            </div>
        )
    }
}