import React from "react";
import { useRouter } from 'next/router'
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
const metricsData = require("../../data/metrics.json");
import subDays from 'date-fns/subDays';
import format from 'date-fns/format'

const getQueryParams = (query) => {
  const { range } = query;
  let date = '';
  switch (range) {
    case 'today':
      date = format(new Date(), 'yyyy-MM-dd');
      break;
    case 'yesterday':
      let yResult = subDays(new Date(), 1)
      date = format(yResult, 'yyyy-MM-dd');
      break;
    case 'week':
      let wResult = subDays(new Date(), 7)
      date = format(wResult, 'yyyy-MM-dd');
      break;
    case 'month':
      let mResult = subDays(new Date(), 30)
      date = format(mResult, 'yyyy-MM-dd');
      break;
    default:
      date = format(new Date(), 'yyyy-MM-dd');
      break;
  }
  const obj = metricsData.find(o => o.date === String(date));
  return {
    date: date,
    data: obj
  };
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
    selectedDate: metricData.date
  }, {
    cardTitle: "Bitrate",
    cardValue: metricData.data.bitrate,
    cardIcon: "fa-bolt",
    insightValue: " 3.48%",
    insightStatus: false,
    insightDuration: "Since yesterday",
    selectedDate: metricData.date
  }, {
    cardTitle: "Framerate",
    cardValue: metricData.data.framerate,
    cardIcon: "fa-chart-line",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: metricData.date
  }, {
    cardTitle: "Concurrent Plays",
    cardValue: metricData.data.concurrentplay,
    cardIcon: "fa-users",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: metricData.date
  }, {
    cardTitle: "Plays",
    cardValue: metricData.data.plays,
    cardIcon: "fa-play",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: metricData.date
  }, {
    cardTitle: "Unique Devices",
    cardValue: metricData.data.uniquedevice,
    cardIcon: "fa-mobile",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: metricData.date
  }, {
    cardTitle: "Rebuffering Ratio",
    cardValue: metricData.data.rebuffering,
    cardIcon: "fa-percent",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: metricData.date
  }, {
    cardTitle: "Ended Plays",
    cardValue: metricData.data.endedplay,
    cardIcon: "fa-chart-area",
    insightValue: " 3.48%",
    insightStatus: true,
    insightDuration: "Since yesterday",
    selectedDate: metricData.date
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
