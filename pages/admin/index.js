

import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem,
   NavLink, Card, Button, CardTitle, CardText, Row, Col, Container, Jumbotron } from 'reactstrap';
import classnames from 'classnames';

import Layout from "layouts";
import BroadcastForm from "components/BroadcastForm";
import BroadcastStatus from "components/BroadcastStatus";
import Header from "components/Header";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('1');

  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql"
  });

  // client.query({ 
  //   query: 
  // })


  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const tabStyle = {
      cursor: "pointer"
  }

  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <div>
        <Jumbotron>
          <Container style={{height:"100vh"}} >
          <h1>Notification Center</h1>
        <Nav tabs>
          <NavItem>
            <NavLink
              style={tabStyle}
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Create Notification
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={tabStyle}
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Notifications Status
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} style={{height:"100%",width:"100%"}}>
          <TabPane tabId="1" style={{backgroundColor:"#5e72e4 !important"}}>
            <Row>
                <Card body>
                  <CardTitle>Notification Message</CardTitle>
                  <CardText>Send message to all the customers</CardText>
                  <BroadcastForm />
                </Card>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
            <Card body>
                <BroadcastStatus/>
            </Card>
            </Row>
          </TabPane>
        </TabContent>
        </Container>
        </Jumbotron>
      </div>
      </React.Fragment>
    </ApolloProvider>
  );
}

AdminDashboard.layout = Layout;

export default AdminDashboard;
