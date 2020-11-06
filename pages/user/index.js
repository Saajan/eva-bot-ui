

import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem,
   NavLink, Card, Button, CardTitle, CardText, Row, Col, Container, Jumbotron } from 'reactstrap';
import classnames from 'classnames';

import Layout from "layouts";
const UserDashboard = () => {
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
            User
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} style={{height:"100%",width:"100%"}}>
        <TabPane tabId="1">
           <Row>
              <Card body>
                <CardTitle>User List</CardTitle>
                <CardText>Placeholder for the User table.</CardText>
                <Button>Hola</Button>
              </Card>
          </Row>
        </TabPane>
      </TabContent>
      </Container>
      </Jumbotron>
    </div>
    </React.Fragment>
  );
}

UserDashboard.layout = Layout;

export default UserDashboard;
