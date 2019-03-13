import { ApolloServer } from 'apollo-server'
import { resolvers, typeDefs } from './schema'

const port = process.env.PORT || 5000
const server = new ApolloServer({
  typeDefs,
  resolvers
})

async function main () {
  const { url } = await server.listen(port)
  console.log(`Server listening on ${url}`)
}

main()

