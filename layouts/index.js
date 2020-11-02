import React from "react";
// reactstrap components
import { Container } from "reactstrap";
// core components
import Navbar from "components/Navbar";
import Footer from "components/Footer";

function Layout(props) {
  return (
    <>
      <div className="main-content">
        <Navbar {...props} brandText="Conviva" />
        {props.children}
        <Container fluid>
          <Footer />
        </Container>
      </div>
    </>
  );
}

export default Layout;
