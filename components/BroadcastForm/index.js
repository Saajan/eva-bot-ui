import React, { useState } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Col,
} from "reactstrap";
import ConfirmationModal from "components/Confirmation";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import moment from "moment";

const BroadcastForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [date, setDate] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDropdownVal, setDropDownVal] = useState(null);

  const types = {
    general: "General",
    downtime: "Downtime",
    release: "Release",
    maintanence: "Maintanence",
  };

  const toggle = (key) => {
    setDropDownVal(key);
    setDropdownOpen((prevState) => !prevState);
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    console.log("here");
    setModal(!modal);
  };

  const onChange = (e) => {
    setName(e.target.value);
  };
  const onDescChange = (e) => {
    setMessage(e.target.value);
  };

  const onDateChange = (e) => {
    setDate(e.target.value);
  };

  const addBroadcastMutation = gql`
    mutation addBroadcast($message: NewBroadcast!) {
      addBroadcast(message: $message) {
        title
        description
        type
        date
      }
    }
  `;

  const resetState = () => {
    setName("");
    setMessage("");
    setDate("");
    toggleModal();
  };

  return (
    <React.Fragment>
      <div>
        <Mutation mutation={addBroadcastMutation}>
          {(addBroadcast, { loading, error }) => (
            <Form>
              <FormGroup row>
                <Label for="Title" sm={2}>Title</Label>
                <Col sm={10}>
                <Input
                  type="text"
                  value={name}
                  onChange={onChange}
                  placeholder="What is the subject? This field is required"
                />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Description" sm={2}>Description</Label>
                <Col sm={10}>
                <Input
                  type="text"
                  value={message}
                  onChange={onDescChange}
                  placeholder="What is the message?"
                
                />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Type" sm={2}>Type of Broadcast </Label>
                <Col sm={3}>
                <div
                  className=""
                  style={{
                    cursor: "pointer",
                    background: "#5e72e4",
                    padding: "10px",
                    color: "white",
                    borderRadius: "10px",
                    width: "250px",
                    textAlign: "center",
                  }}
                >
                  <Dropdown isOpen={dropdownOpen} toggle={() => toggle(null)}>
                    <DropdownToggle
                      caret
                      style={{ cursor: "pointer" }}
                      tag="span"
                      data-toggle="dropdown"
                      aria-expanded={dropdownOpen}
                    >
                      {dropdownOpen || !selectedDropdownVal
                        ? "Select Type"
                        : types[selectedDropdownVal]}
                    </DropdownToggle>
                    <DropdownMenu>
                      <div
                        style={{
                          padding: "8px",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onClick={() => toggle("general")}
                      >
                        Release Notification
                      </div>
                      <div
                        style={{
                          padding: "8px",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onClick={() => toggle("downtime")}
                      >
                        Downtime
                      </div>
                      <div
                        style={{
                          padding: "8px",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onClick={() => toggle("maintanence")}
                      >
                        Maintanence
                      </div>
                      <div
                        style={{
                          padding: "8px",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onClick={() => toggle("general")}
                      >
                        General Message
                      </div>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleDate" sm={2}>Date</Label>
                <Col sm={3}>
                <Input
                  type="datetime-local"
                  name="date"
                  id="sheduledDate"
                  placeholder="When you want this message delievered?"
                  onChange={onDateChange}
                  value={date}
                />
                </Col>
              </FormGroup>
              <div style={{ cente: "center" }}>
                <Button
                  style={{
                    color: "white",
                    background: "#5e72e4",
                    textAlign: "center",
                    left: "40%",
                  }}
                  onClick={(evt) => {
                    addBroadcast({
                      variables: {
                        message: {
                          title: name,
                          description: message,
                          type: selectedDropdownVal,
                          date: moment(date).format(),
                        },
                      },
                    });
                    resetState();
                  }}
                >
                  Submit
                </Button>
              </div>
              {loading && <p>Loading</p>}
              {error && <p>Error. Pleasr try again.</p>}
            </Form>
          )}
        </Mutation>
        <ConfirmationModal toggleModal={toggleModal} setModal={modal} />
      </div>
    </React.Fragment>
  );
};

export default BroadcastForm;
