import { UserInputError } from 'apollo-server'
import { QueryResolvers, MutationResolvers, UserMutationResponse } from '../../generated/graphql';

const Query: QueryResolvers = {
  async user (parent, args, context): Promise<any> {
    if (!args.id) {
      return new UserInputError('id argument invalid', {
        invalidArgs: Object.keys(args)
      })
    }

    return context.prisma.user({ id: args.id })
  },
  async users (parent, args, context): Promise<any> {
    return context.prisma.users()
  }
} 

const Mutation: MutationResolvers = {
  async createUser (parent, args, context) {
    const user = await context.prisma.createUser(args.user)
    const response: UserMutationResponse = {
      code: 200,
      message: 'user created',
      success: true,
      user
    }
    return response
  }
}

export default { Query, Mutation }