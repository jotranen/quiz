import { gql } from "apollo-server-express";
import { Question } from "./Question";
import { User } from "./User";

const typeDefs = gql`
  ${User.types}
  ${Question.types}
  
  type Query {
    ${User.queries}
    ${Question.queries}
  }
  
  type Mutation {
    ${User.mutations}
  }
`;

export default typeDefs;