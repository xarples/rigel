import { ApolloServer } from 'apollo-server'
import { resolvers, typeDefs } from './schema'
import { Prisma } from './prisma-client'

const isDev: boolean = process.env.NODE_ENV !== 'production'
const prisma = new Prisma({ endpoint: 'http://prisma:4466', debug: isDev })
const port = +process.env.PORT || 5000
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma
  }
})

async function main () {
  const { url } = await server.listen(port)
  console.log(`Server listening on ${url}`)
}

if (!module.parent) {
  main()
}

export default server


