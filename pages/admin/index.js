

import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem,
   NavLink, Card, Button, CardTitle, CardText, Row, Col, Container, Jumbotron } from 'reactstrap';
import classnames from 'classnames';

import Layout from "layouts";
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <React.Fragment>
      <div>
      <Jumbotron>
        <Container style={{height:"100vh"}}>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Send out messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Message Status
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} style={{height:"100%",width:"100%"}}>
        <TabPane tabId="1">
           <Row>
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
              Message status table to come here
          </Row>
        </TabPane>
      </TabContent>
      </Container>
      </Jumbotron>
    </div>
    </React.Fragment>
  );
}

AdminDashboard.layout = Layout;

export default AdminDashboard;
