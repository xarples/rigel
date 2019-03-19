import { UserInputError } from 'apollo-server'
import { Context } from '../../types/Context'

export default {
  Query: {
    async user (parent, args, context: Context) {
      if (!args.id) {
        return new UserInputError('id argument invalid', {
          invalidArgs: Object.keys(args)
        })
      }

      return context.prisma.user({ id: args.id })
    },
    async users (parent, args, context: Context) {
      return context.prisma.users()
    }
  }
}