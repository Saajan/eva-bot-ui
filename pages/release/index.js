import React from "react";
import ChatWindow from "components/ChatWindow";
import { Container, Row, Col } from 'reactstrap';


const Header = () => {
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };   
    return (
    <React.Fragment>
    <Container style={{...style,height: "100vh", width: "100vw", backgroundColor: "white"}}>
        <Row>
            <Col className=".col-sm-12 .col-md-6 .offset-md-3">
                <h1>Release Notes</h1>
                <h2>Latest Release V1.0.0 on November 9th,2020</h2>
                <h3>Fearures / bugfixes in this release</h3>
                <ul>
                    <li><h4>Eva:</h4></li>
                        <ul>
                            <li>Q&A</li>
                            <li>Integration of alerts - create</li>
                            <li>Integration of reports</li>
                            <li>Added support to open dashboards on request</li>
                        </ul>
                    <li><h4>User Mode:</h4></li>
                        <ul>
                            <li>Added metrics dashboards that shows all the metric data and chart </li>
                            <li>Added compare dashboard that compares metrics</li>
                            <li>Integration of Eva</li>
                        </ul> 
                    <li><h4>Admin mode:</h4></li>
                        <ul>
                            <li>Added forms to send broadcast messages</li>
                            <li>Added table that shows all message status </li>
                            <li>Added audit logs of all the user alerts</li>
                        </ul>
                </ul>
            </Col>
        </Row>
    </Container>
    <ChatWindow/>
    </React.Fragment>
    );
    };

export default Header;
