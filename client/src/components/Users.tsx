import { useQuery, gql } from '@apollo/client';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
  }

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <ul>
      {data.users.map((user: User) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}

export default Users;
