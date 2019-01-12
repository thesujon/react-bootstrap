import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
    render() {
        return(
            <div>
                <Image src="assets/newsroom-overview.jpg" className="header-image" />
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                         <p>Thai immigration officials had tried to return Rahaf Mohammed al-Qunun, 18, to Kuwait, where her family is.
                            But she refused to board a flight on Monday and barricaded herself into her airport hotel room.
                            She said she feared her family would kill her as she had renounced Islam.
                            "My brothers and family and the Saudi embassy will be waiting for me in Kuwait," Ms Mohammed al-Qunun told Reuters.
                            "My life is in danger. My family threatens to kill me for the most trivial things."
                            Her relatives have not commented on her claims.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/news.jpg" />
                            <p>Thai immigration officials had tried to return Rahaf Mohammed al-Qunun, 18, to Kuwait, where her family is.
                            But she refused to board a flight on Monday and barricaded herself into her airport hotel room.
                            She said she feared her family would kill her as she had renounced Islam</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}