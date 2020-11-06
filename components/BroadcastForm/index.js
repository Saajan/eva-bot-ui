import React, { useState } from 'react';
import {
    Dropdown, DropdownMenu, DropdownToggle, Form, FormGroup, Input,
    Button, Label
} from 'reactstrap';

const types = {
    0: "Select Type",
    1: "General Announcement",
    2: "Downtime",
    3: "Release Notification",
}

const BroadcastForm = () => {
    const [name, setName] = useState('Broadcast Name');
    const [message, setMessage] = useState('Please Enter message here');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedDropdownVal, setDropDownVal] = useState(0);
    const toggle = (id) => {
        console.log(id)
        setDropDownVal(id)
        console.log(selectedDropdownVal)
        setDropdownOpen(prevState => !prevState)
    };
    console.log(selectedDropdownVal)

    const onChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const onDescChange = (e) => {
        console.log(e.target.value);
        setMessage(e.target.value);
    }
    const onSubmit = (e) =>{
        console.log(e.target.value);
    }
    return (
        <React.Fragment>
            <div>
                <Form>
                    <FormGroup>
                        <Label for="Title">Title</Label>
                        <Input type="text" value={name} onChange={onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Description">Description</Label>
                        <Input type="text" value={message} onChange={onDescChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Type">Type of Broadcast </Label>
                        <div style={{ cursor: "pointer", background: "#ababba", padding: "10px", color: "white", borderRadius: "10px", width: "250px", textAlign: "center" }}>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
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
                                    <div style={{ padding: "8px", textAlign: "center", cursor: "pointer" }} onClick={() => toggle(1)}>General Announcement</div>
                                    <div style={{ padding: "8px", textAlign: "center", cursor: "pointer" }} onClick={() => toggle(2)}>Downtime</div>
                                    <div style={{ padding: "8px", textAlign: "center", cursor: "pointer" }} onClick={() => toggle(3)}>Release Notification</div>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleDate">Date</Label>
                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                        />
                    </FormGroup>
                    <div style={{cente: 'center'}}>
                    <Button 
                    style={{color: 'white', background: '#ababba', textAlign: 'center', left: '40%'}}                    
                    onClick={onSubmit}> Submit Request </Button>
                    </div>
                </Form>
            </div>

        </React.Fragment >
    );
};

export default BroadcastForm;