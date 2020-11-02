/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Col, Nav } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="container-fluid d-flex justify-content-end">
            <div className="copyright">
                © {new Date().getFullYear()}{" "}
            </div>
        </Row>
      </footer>
    );
  }
}

export default Footer;
