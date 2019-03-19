import { importSchema } from 'graphql-import'
import { gql } from 'apollo-server'
import clientResolvers from './clients/resolvers'
import userResolvers from './users/resolvers'

const schema = importSchema('./src/schema/schema.graphql')

console.log(schema)

export const typeDefs = gql(schema)

export const resolvers = {
  ...clientResolvers,
  ...userResolvers,
}