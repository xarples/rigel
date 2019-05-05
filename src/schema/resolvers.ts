import { resolvers as userResolvers } from './user'
import { QueryResolvers } from '../generated/graphql';

const resolvers = {
  ...userResolvers,
}

export default resolvers
