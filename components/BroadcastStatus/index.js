import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';



const BroadcastStatus = () => {

    const getList = async () => {
        const response = await fetch('http://localhost:8000/api/v1/broadcasts/');
        const list = await response.json();
        console.log(list)
        setList(list)
        return list;
    }

    useEffect(() => {
        getList();
        let mounted = true;
        if(mounted) {
           getList()
        }
        return () => mounted = false;
    }, []);

    const renderEachMessage = (list) => {
        const types = {
            "general": "General",
            "downtime": "Downtime",
            "release": "Release",
            "maintanence": "Maintanence"
        };
        const rows = list.map((item) => (
            <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{types[item.type]}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
            </tr>
        ));
    
        return rows;
    }

    const [list, setList] = useState([]);

    return (
        <React.Fragment>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Message</th>
                        <th>Type</th>
                        <th>Scheduled on</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderEachMessage(list)}
                </tbody>
            </Table>
        </React.Fragment >
    );
};

export default BroadcastStatus;