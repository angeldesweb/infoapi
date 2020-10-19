import { merge } from 'lodash'
import usuarios from './usuarios';
import clasificaciones from './clasificaciones';
import fichas from './fichas';

const resolvers = {}

export default merge(resolvers,usuarios,clasificaciones,fichas)

