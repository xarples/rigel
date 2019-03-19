import { UserInputError } from 'apollo-server'
import { Context } from '../../types/Context'

export default {
  Query: {
    async client (parent, args, context: Context) {
      if (!args.id) {
        return new UserInputError('id argument invalid', {
          invalidArgs: Object.keys(args)
        })
      }

      return context.prisma.client({ id: args.id })
    },
    async clients (parent, args, context: Context) {
      return context.prisma.clients()
    }
  }
}