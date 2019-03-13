import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    user: User
    users: [User]
  }

  type User {
    firstName: String,
    lastName: String
    email: String
    username: String
    password: String
    createdAt: String,
    updatedAt: String
  }
`