import React from "react";
import ChatWindow from "components/ChatWindow";
import { Container, Row, Col } from 'reactstrap';


const Maintanence = () => {
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
                <h1>Downtime Alert</h1>
                <h3>
                    <p>Our apllication is down due to an power outrage issue. We are actively working on this. </p>
                    <p>The issue is expected to be resolved within an hour. </p>
                      <p>  You will be receiving a notification once the application is up.</p>
                </h3>
            </Col>
        </Row>
    </Container>
    <ChatWindow/>
    </React.Fragment>
    );
    };

export default Maintanence;
