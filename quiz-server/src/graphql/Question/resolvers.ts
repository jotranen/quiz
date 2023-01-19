const queries = {
  question: (root, args) => {
    return {
      id: args.id,
      lang: args.lang,
      question: "Test question",
    };
  },
};
  
const mutations = {
  createQuestion: (root, args) => {
    const newQuestion = {
      id: "54321",
      email: args.email,
      password: args.password,
      loggedIn: false,
      firstName: args.firstName,
      lastName: args.lastName,
    };
    
    return newQuestion;
  },
};
  
  // export const resolvers = { queries, mutations };
  export const resolvers = { queries };