

import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem,
   NavLink, Card, Button, CardTitle, CardText, Row, Col, Container, Jumbotron } from 'reactstrap';
import classnames from 'classnames';

import Layout from "layouts";
import BroadcastForm from "components/BroadcastForm";
import BroadcastStatus from "components/BroadcastStatus";
import Header from "components/Header";

import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ChatWindow from "components/ChatWindow";
import UserTable from "components/Users";
import AuditTable from "components/Audit";


const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('1');
  
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_SERVER}/graphql`,
    cache: new InMemoryCache(),
  });

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
          <h1>Admin Panel</h1>
        <Nav tabs>
          <NavItem>
            <NavLink
              style={tabStyle}
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Create Notifications
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
          <NavItem>
          <NavLink
            style={tabStyle}
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Manager Users
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink
          style={tabStyle}
          className={classnames({ active: activeTab === '4' })}
          onClick={() => { toggle('4'); }}
        >
            Logs
          </NavLink>
        </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} style={{height:"100%",width:"100%"}}>
          <TabPane tabId="1" style={{backgroundColor:"#5e72e4 !important"}}>
            <Row>
                <Card body>
                  <CardTitle>Schedule and send messsages to all users</CardTitle>
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
          <TabPane tabId="3">
            <Row>
            <Card body>
                <UserTable />
            </Card>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
            <Card body>
                <AuditTable />
            </Card>
            </Row>
          </TabPane>
        </TabContent>
        </Container>
        </Jumbotron>
      </div>
      <div style={{visibility:"hidden"}}>
        <ChatWindow/>
      </div>
      </React.Fragment>
    </ApolloProvider>
  );
}

AdminDashboard.layout = Layout;

export default AdminDashboard;
