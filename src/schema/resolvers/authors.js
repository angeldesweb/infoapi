import { authors } from '../db'

export default {
    Query : {
        authors : () => authors,
    }
}