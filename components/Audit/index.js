import React from "react";
import { Table } from "reactstrap";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { statusMap } from "data/lookups";

const AuditQuery = gql`
  {
    audit {
      id
      type
      type_id
      status
      updated_at
    }
  }
`;

function AuditTable() {
  return (
    <Query query={AuditQuery}>
      {({ data }) => {
        if (data && data.audit) {
        return (<Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Type ID</th>
              <th>Status</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>
            {data.audit.map((audit) => (
              <tr key={audit.id}>
                <td>{audit.id}</td>
                <td>{audit.type}</td>
                <td>{audit.type_id}</td>
                <td>{statusMap[audit.status] || "Error"}</td>
                <td>{audit.updated_at}</td>
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

export default React.memo(AuditTable);
