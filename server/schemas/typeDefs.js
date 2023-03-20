const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    name: String
    email: String
    pwdCount: Int
    savedPasswords: [Password]
}

type Password {
    _id: ID
    site: String!
    password: String!
}

type Auth {
    token: ID!
    user: User
}

input PwdInput {
    _id: ID
    site: String!
    password: String!
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    savePwd(input: PwdInput): User
    removePwd(_id: String!): User
}

`;
module.exports = typeDefs;