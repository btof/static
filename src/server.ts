import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import cors from 'cors'
import express, { Application } from 'express'
import { resolvers } from './graphql/resolvers/index'
import { typeDefs } from './graphql/typeDefs'
import { PubSub } from 'graphql-subscriptions'
import config from './config/config'
import logger from './logging/logger'

/**
 * @constant PORT - the port the app will run on.
 */
const PORT: number = config.app.port
const app: Application = express()
export const pubsub = new PubSub()

/**
 * @param typeDefs - the types of the graphql
 * @param resolvers - the resolvers of the graphql
 * @param playground - enable the graphql playground environment.
 */
const server: ApolloServer = new ApolloServer({
	typeDefs: typeDefs,
	resolvers: resolvers as any,
	introspection: true
})

app.use(cors())
app.use(compression())

server.applyMiddleware({ app })

/**
 * @param {number} port -The port the app would run on.
 * The @constant PORT is defined above.
 */
app.listen({ port: PORT }, (): void =>
	logger.info(`GraphQL is now running on http://localhost:${PORT}/graphql`)
)
