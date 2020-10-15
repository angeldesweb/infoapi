import { books } from '../db'

export default {
    Query : {
        books: () => books,
    }
}