import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      name
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($name: String!, $email: String!, $password: String!) {
  addUser(name: $name, email: $email, password: $password) {
    token
    user {
      _id
      name
      email
    }
  }
}
`;

export const SAVE_PWD = gql`
  mutation savePwd($input: PwdInput!) {
    savePwd(input: $input) {
        _id
        name
        email
        pwdCount
        savedPasswords {
          #_id
          password
          site
      }
    }
  }
`;

export const REMOVE_PWD = gql`
  mutation removePwd($id: String!) {
    removePwd(_id: $id) {
        name
        pwdCount
        savedPasswords {
          password
          site
        }
    }
  }
`;

