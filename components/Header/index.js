import React from "react";
import { useRouter } from 'next/router'
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
const metricsData = require("../../data/metrics.json");
import subDays from 'date-fns/subDays';
import format from 'date-fns/format'

const getQueryParams = (query) => {
  const { id, range } = query;
  
  switch (range) {
    case 'today':
      retun 1;
    case 'yesterday':
      return 2;
    case 'week':
      return 3;
    case 'month':
      return 4;
    default:
      return 1;
  }
  
  return {
    id, 
    range
  };
}

export const getMetricData = () => {
  const queryParams = getQueryParams();
  const data = metricsData.find(item => (item.id == queryParams.id && item.range == queryParams.selectedRange));
  return data;
}
}

const Header = () => {
  const { query } = useRouter();
  const metricData = getQueryParams(query);
  const jsonData = [{
    cardTitle: "Attempts",
    cardValue: metricData.data.attempts,
    cardIcon: "fa-chart-bar",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    //selectedDate: new Date(metricData.date)
    selectedRange: metricData.selectedRange

  }, {
    cardTitle: "Bitrate",
    cardValue: metricData.data.bitrate,
    cardIcon: "fa-bolt",
    insightValue: " 3.48%",
    insightStatus: false,
    insightDuration: "Since yesterday",
    //selectedDate: new Date(metricData.date)
    selectedRange: metricData.selectedRange
  }, {
    cardTitle: "Framerate",
    cardValue: metricData.data.framerate,
    cardIcon: "fa-chart-line",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    //selectedDate: new Date(metricData.date)
    selectedRange: metricData.selectedRange
  }, {
    cardTitle: "Concurrent Plays",
    cardValue: metricData.data.concurrentplay,
    cardIcon: "fa-users",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    //selectedDate: new Date(metricData.date)
    selectedRange: metricData.selectedRange
  }, {
    cardTitle: "Plays",
    cardValue: metricData.data.plays,
    cardIcon: "fa-play",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    //selectedDate: new Date(metricData.date)
    selectedDate: metricData.date
  }, {
    cardTitle: "Unique Devices",
    cardValue: metricData.data.uniquedevice,
    cardIcon: "fa-mobile",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    //selectedDate: new Date(metricData.date)
    selectedRange: metricData.selectedRange
  }, {
    cardTitle: "Rebuffering Ratio",
    cardValue: metricData.data.rebuffering,
    cardIcon: "fa-percent",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    //selectedDate: new Date(metricData.date)
    selectedRange: metricData.selectedRange

  }, {
    cardTitle: "Ended Plays",
    cardValue: metricData.data.endedplay,
    cardIcon: "fa-chart-area",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    //selectedDate: new Date(metricData.date)
    selectedRange: metricData.selectedRange
  }]
  return (
    <React.Fragment>
      <div className="header pb-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {jsonData.map((data, i) => {
                return (<Col lg="6" xl="3" key={i} className="pb-3">
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
