import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    user(id: ID!): User
    users: [User]
  }

  extend type Mutation {
    createUser(user: UserInputCreate!): UserMutationResponse
    updateUser(id: Int, username: String, payload: UserInputUpdate!): UserMutationResponse
    deleteUser(id: Int, username: String): UserMutationResponse
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    username: String!
    password: String!
    createdAt: String
    updatedAt: String
  }

  input UserInputCreate {
    firstName: String!
    lastName: String
    email: String!
    username: String!
    password: String!
  }

  input UserInputUpdate {
    firstName: String
    lastName: String
    email: String
    username: String
    password: String
  }

  type UserMutationResponse implements MutationResponseInterface {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }
`