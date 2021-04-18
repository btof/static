import { Resolvers } from '../../types/graphql'
import { booksMutations, booksQueries } from './booksResolvers'
import { booksSubscriptions } from './booksSubscriptions'
import { merge } from 'lodash';

export const resolvers: Resolvers = merge({}, booksQueries, booksMutations, booksSubscriptions);