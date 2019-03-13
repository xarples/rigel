import { typeDefs as rootTypeDefs, resolvers as rootResolvers } from './root'
import { typeDefs as userTypeDefs, resolvers as userResolvers } from './user'

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs
]

export const resolvers = {
  ...rootResolvers,
  ...userResolvers
}