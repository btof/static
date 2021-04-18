import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import cors from 'cors'
import express, { Application } from 'express'
import { resolvers } from './graphql/resolvers/index'
import { typeDefs } from './graphql/typeDefs'
import { PubSub } from 'graphql-subscriptions'
import config from './config/config'

/**
 * @constant PORT - the port the app will run on.
 */
const PORT: number = config.app.port
const app: Application = express()
export const pubsub = new PubSub()

/**
 * @param schema - the service schema.
 * @param validationRules - since in federation you can get limitless-depth object there is
 * a configured limitation.
 * @param playground - enable the graphql playground environment.
 */
const server: ApolloServer = new ApolloServer({
	typeDefs: typeDefs,
	resolvers: resolvers as any,
	introspection: true
})

app.use('*', cors())
app.use(compression())

server.applyMiddleware({ app })

/**
 * @param {number} port -The port the app would run on.
 * The @constant PORT is defined above.
 */
app.listen({ port: PORT }, (): void =>
	console.log(`GraphQL is now running on http://localhost:${PORT}/graphql`)
)
