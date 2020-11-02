import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  const jsonData = [{
    cardTitle: "Attempts",
    cardValue: "2300",
    cardIcon: "fa-chart-bar",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday"
  }, {
    cardTitle: "Bitrate",
    cardValue: "3.8",
    cardIcon: "fa-bolt",
    insightValue: " 3.48%",
    insightStatus: false,
    insightDuration: "Since yesterday"
  }, {
    cardTitle: "Framerate",
    cardValue: "2.7",
    cardIcon: "fa-chart-line",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday"
  }, {
    cardTitle: "Concurrent Plays",
    cardValue: "350,897",
    cardIcon: "fa-users",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday"
  }, {
    cardTitle: "Plays",
    cardValue: "4,59,845",
    cardIcon: "fa-play",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday"
  }, {
    cardTitle: "Unique Devices",
    cardValue: "32,568",
    cardIcon: "fa-mobile",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday"
  }, {
    cardTitle: "Rebuffering Ratio",
    cardValue: "34%",
    cardIcon: "fa-percent",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday"
  }, {
    cardTitle: "Ended Plays",
    cardValue: "23,456",
    cardIcon: "fa-chart-area",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday"
  }]
  return (
    <React.Fragment>
      <div className="header pb-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {jsonData.map((data, i) => {
                return (<Col lg="6" xl="3" key={i}  className="pb-3">
                  <Card className="card-stats shadow mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            {data.cardTitle}
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {data.cardValue}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className={`fas ${data.cardIcon}`} />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> {data.insightValue}
                        </span>{" "}
                        <span className="text-nowrap">{data.insightDuration}</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>)
              })}
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Header;
