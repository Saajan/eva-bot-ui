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
                <h1>Hello</h1>
                <h3>
                    <p>Hope you are enoying our app! </p>
                </h3>
            </Col>
        </Row>
    </Container>
    <ChatWindow/>
    </React.Fragment>
    );
    };

export default Maintanence;
