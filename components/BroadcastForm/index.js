import React, { useState } from 'react';
import {
    Dropdown, DropdownMenu, DropdownToggle, Form, FormGroup, Input,
    Button, Label
} from 'reactstrap';

import { Mutation } from "react-apollo";
import gql from  "graphql-tag"
import moment from 'moment';

const BroadcastForm = () => {
    
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
   
    const [date, setDate] = useState('');

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedDropdownVal, setDropDownVal] = useState(null);
    console.log(dropdownOpen, selectedDropdownVal)

    const types = {
        "general": "General",
        "downtime": "Downtime",
        "release": "Release",
        "maintanence": "Maintanence"
    }
    
    const toggle = (key) => {
        console.log(key, types[key])
        setDropDownVal(key)
        setDropdownOpen(prevState => !prevState)
    };

    
    const onChange = (e) => {
        setName(e.target.value);
    }
    const onDescChange = (e) => {
        setMessage(e.target.value);
    }

    const onDateChange = (e) => {
        console.log(e.target.value)
        console.log(moment(e.target.value).format('DD-MM-YYYY HH:mm:ss'))
        setDate(e.target.value);
    }

    const addaddBroadcastMutation = gql`
        mutation addBroadcast($message: NewBroadcast!) {
            addBroadcast(message: $message) {
            title,
            description,
            type, 
            date
        }}`;

    const resetState = () => {
        setName("")
        setMessage("")
        setDate("")
    }

    return (
        <React.Fragment>
            <div>
                <Mutation mutation={addaddBroadcastMutation}>
                    {(addBroadcast, {loading, error}) => (
                    <Form>
                        <FormGroup>
                            <Label for="Title">Title</Label>
                            <Input type="text" value={name} onChange={onChange} placeholder="What is the subject?"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Description">Description</Label>
                            <Input type="text" value={message} onChange={onDescChange} placeholder="What is the message?" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Type">Type of Broadcast </Label>
                            <div className="" style={{ cursor: "pointer", background: "#ababba", padding: "10px", color: "white", borderRadius: "10px", width: "250px", textAlign: "center" }}>
                                <Dropdown isOpen={dropdownOpen} toggle={() => toggle(null)}>
                                    <DropdownToggle
                                        caret
                                        style={{ cursor: "pointer" }}
                                        tag="span"
                                        data-toggle="dropdown"
                                        aria-expanded={dropdownOpen}
                                    >
                                        {(dropdownOpen || !selectedDropdownVal) ? "Select Type" : types[selectedDropdownVal]}
                                    </DropdownToggle>
                                    <DropdownMenu >
                                        <div style={{ padding: "8px", textAlign: "left", cursor: "pointer" }} onClick={() => toggle("general")}>Release Notification</div>
                                        <div style={{ padding: "8px", textAlign: "left", cursor: "pointer" }} onClick={() => toggle("downtime")}>Downtime</div>
                                        <div style={{ padding: "8px", textAlign: "left", cursor: "pointer" }} onClick={() => toggle("maintanence")}>Maintanence</div>
                                        <div style={{ padding: "8px", textAlign: "left", cursor: "pointer" }} onClick={() => toggle("general")}>General Message</div>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleDate">Date</Label>
                            <Input
                                type="datetime-local"
                                name="date"
                                id="sheduledDate"
                                placeholder="When you want this message delievered?"
                                onChange={onDateChange}
                                value={date}
                            />
                        </FormGroup>
                        <div style={{cente: 'center'}}>
                        <Button 
                        style={{color: 'white', background: '#ababba', textAlign: 'center', left: '40%'}}                    
                            onClick={ evt => {
                                addBroadcast({
                                    variables: {
                                        message: {
                                            title: name,
                                            description: message,
                                            type: types[selectedDropdownVal],
                                            date: moment(date).format('MMMM Do YYYY, h:mm:ss')
                                        }
                                    }
                                })
                                resetState()
                            }}> Send Message to All Customers
                        
                        </Button>
                        </div>
                        { loading && <p>Loading</p>}
                        {error && <p>Error. Pleasr try again.</p>}
                    </Form>
                    
                    )}
                </Mutation>
            </div>

        </React.Fragment >
    );
};

export default BroadcastForm;