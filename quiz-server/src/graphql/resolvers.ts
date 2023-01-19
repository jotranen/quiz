import { Question } from './Question';
import { User } from './User'

const resolvers = {
  Query: {
    ...User.resolvers.queries,
    ...Question.resolvers.queries,
  },
  Mutation: {
    ...User.resolvers.mutations,
  }
};

export default resolvers;