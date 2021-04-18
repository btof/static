import { Resolvers } from '../../types/graphql'
import { pubsub } from '../../server';

export const BOOK_ADDED = "BOOK_ADDED";

export const booksSubscriptions: Partial<Resolvers> = {
	Subscription: {
		bookAdded: {
			subscribe: () => pubsub.asyncIterator([BOOK_ADDED])
		}
	}
}