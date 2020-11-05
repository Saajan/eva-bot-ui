import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
const metricsData = require("../../data/metrics.json");

const getQueryParams = () => {
  console.log(window)
  console.log(document.URL)
  let urlString = document.URL;
  if(urlString && urlString.includes('?')){
    //console.log(urlString.split('?'))
    let paramString = urlString.split('?')[1]; 
    let queryString = paramString.split('&'); 
    const params = {
      id: (queryString[0]).replace("id=", ""),
      date: (queryString[1]).replace("date=", "")
    };
    return params;
  }

  return {
    id: 1,
    date:"2020-11-28"
  }
}

export const getMetricData = () => {
  const queryParams = getQueryParams();
  const data = metricsData.find(item => (item.id == queryParams.id && item.date == queryParams.date));
  return data;
}


const Header = () => {
  const metricData = getMetricData();
  
  const jsonData = [{
    cardTitle: "Attempts",
    cardValue: metricData.attempts,
    cardIcon: "fa-chart-bar",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: new Date(metricData.date)
  }, {
    cardTitle: "Bitrate",
    cardValue: metricData.bitrate,
    cardIcon: "fa-bolt",
    insightValue: " 3.48%",
    insightStatus: false,
    insightDuration: "Since yesterday",
    selectedDate: new Date(metricData.date)
  }, {
    cardTitle: "Framerate",
    cardValue: metricData.framerate,
    cardIcon: "fa-chart-line",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: new Date(metricData.date)
  }, {
    cardTitle: "Concurrent Plays",
    cardValue: metricData.concurrentplay,
    cardIcon: "fa-users",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: new Date(metricData.date)
  }, {
    cardTitle: "Plays",
    cardValue: metricData.plays,
    cardIcon: "fa-play",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: new Date(metricData.date)
  }, {
    cardTitle: "Unique Devices",
    cardValue: metricData.uniquedevice,
    cardIcon: "fa-mobile",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: new Date(metricData.date)
  }, {
    cardTitle: "Rebuffering Ratio",
    cardValue: metricData.rebuffering,
    cardIcon: "fa-percent",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: new Date(metricData.date)
  }, {
    cardTitle: "Ended Plays",
    cardValue: metricData.endedplay,
    cardIcon: "fa-chart-area",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: new Date(metricData.date)
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
