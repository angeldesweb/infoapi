import { merge } from 'lodash'
import books from './books';
import authors from './authors';

const resolvers = {}

export default merge(resolvers,books,authors)

