import React from "react";
import { Table } from "reactstrap";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const UserQuery = gql`
  {
    users {
      id
      name
      email
      active
    }
  }
`;

function UserTable() {
  return (
    <Query query={UserQuery}>
      {({ data }) => {
        if (data && data.users) {
        return (<Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.active ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </Table>)
        }
        return (<div>No users found.</div>)
      }}
    </Query>
  );
}

export default React.memo(UserTable);
