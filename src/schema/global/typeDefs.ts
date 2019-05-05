import { gql } from 'apollo-server'

export default gql`
  type Query {
    _root: String
  }

  type Mutation {
    _root: String
  }

  interface MutationResponseInterface {
    code: Int!
    success: Boolean!
    message: String!
  }
`