import React, {useState} from "react";
import { useRouter } from 'next/router'
import { Card, CardBody, CardTitle, Container, Row, Col,
  Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
const metricsData = require("../../data/metrics.json");
import subDays from 'date-fns/subDays';
import format from 'date-fns/format'
import { Button } from 'reactstrap';

const getQueryParams = (query) => {
  const { range ="today"} = query;
  let date = '';
  let toggle_id = 1;
  switch (range) {
    case 'today':
      date = format(new Date(), 'yyyy-MM-dd');
      toggle_id
      break;
    case 'yesterday':
      let yResult = subDays(new Date(), 1)
      date = format(yResult, 'yyyy-MM-dd');
      toggle_id = 2;
      break;
    case 'week':
      let wResult = subDays(new Date(), 7)
      date = format(wResult, 'yyyy-MM-dd');
      toggle_id = 3;
      break;
    case 'month':
      let mResult = subDays(new Date(), 30)
      date = format(mResult, 'yyyy-MM-dd');
      toggle_id = 4;
      break;
    default:
      date = format(new Date(), 'yyyy-MM-dd');
      toggle_id = 1;
      break;
  }
  const obj = metricsData.find(o => o.range === range);
  
  return {
    date: date,
    data: obj,
    range: toggle_id
  };
}

const getCompareItems = () => {
  const { query } = useRouter();
  let {metrics =""} = query;
  if(metrics){
    metrics = metrics.split(",");
    const metricsItems = metrics.map(item => (
      <div style={{margin:"5px"}}>
        <Button color="secondary" style={{backgroundColor:"#5e72e4",color:"white"}}>{item.toUpperCase()}</Button>{' '}
      </div>));
    return metricsItems;
  }
  return metrics;
}

const ranges = {
  1 : "Today",
  2: "Yesterday",
  3: "This week",
  4: "This month"
}

const Header = () => {
  const { query } = useRouter();
  const metricData = getQueryParams(query);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDropdownVal, setDropDownVal] = useState(metricData.range);
  const toggle = (id) => {
    setDropDownVal(id)
    setDropdownOpen(prevState => !prevState)
  };
  

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
      <div className="d-md-flex pb-4 pt-5 pt-md-7">
        <div className="container-fluid d-flex justify-content-between align-tems-center" style={{height:"50px"}}>
          <div style={{cursor: "pointer",background: "#5e72e4",padding: "10px",color: "white",borderRadius: "10px",width:"150px",textAlign:"center"}}>
            <Dropdown isOpen={dropdownOpen} toggle={() => toggle(null)}>
                <DropdownToggle
                caret
                style={{cursor: "pointer"}}
                tag="span"
                data-toggle="dropdown"
                aria-expanded={dropdownOpen}
                >
                    { (dropdownOpen || !selectedDropdownVal) ? "Select range" : ranges[selectedDropdownVal]}
              </DropdownToggle>
              <DropdownMenu >
              <div style={{padding: "8px",textAlign: "center", cursor: "pointer"}} onClick={() =>toggle(1)}>Today</div>
              <div style={{padding: "8px", textAlign: "center", cursor: "pointer"}} onClick={() =>toggle(2)}>Yesterday</div>
              <div style={{padding: "8px", textAlign: "center", cursor: "pointer"}} onClick={() =>toggle(3)}>This week</div>
              <div style={{padding: "8px", textAlign: "center", cursor: "pointer"}} onClick={() =>toggle(4)}>This month</div>
              </DropdownMenu>
            </Dropdown>
          </div>
          {
            getCompareItems() ? 
            <div className="d-flex justify-content-between"><h1>Comparing </h1>{getCompareItems()}</div>
            : null
          }
          
          <div>
            <h2>Dashboard</h2>
          </div>
        </div>
      </div>
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
