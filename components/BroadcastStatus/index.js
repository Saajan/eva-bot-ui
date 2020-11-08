import React from "react";
import { Table } from "reactstrap";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { statusMap, types } from "data/lookups";

const AuditQuery = gql`
  {
    broadcasts   {
        id
        title
        description
        type
        date
        status
    }
  }
`;

function BroadcastStatus() {
  return (
    <Query query={AuditQuery}>
      {({ data }) => {
        if (data && data.broadcasts) {
        return (<Table>
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
            {data.broadcasts.map((item,i) => (
                <tr key={item.id}>
                    <th scope="row">{i+1}</th>
                    <td>{item.title}</td>
                    <td>{types[item.type]}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                </tr>
            ))}
          </tbody>
        </Table>)
        }
        return (<div>No logs found.</div>)
      }}
    </Query>
  );
}

export default React.memo(BroadcastStatus);
