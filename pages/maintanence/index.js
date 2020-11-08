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
                <h1>Maintanence Alert</h1>
                <h3>Please be noted that our application will be under maintanence on 15th November from 12PM to 3PM</h3>
            </Col>
        </Row>
    </Container>
    <ChatWindow/>
    </React.Fragment>
    );
    };

export default Maintanence;
