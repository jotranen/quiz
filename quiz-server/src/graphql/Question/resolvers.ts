const queries = {
  question: (root, args) => {
    return {
      id: args.id,
      lang: args.lang,
      question: questions[args.id][args.lang].question,
      answers: questions[args.id][args.lang].answers.answers,
    };
  },
};

type Answer = {
  answers: string[],
  answer: number
}

type Question = {
  [lang: string]: { question: string, answers: Answer }
}

type Questions = {
  [id: number]: Question
} 

let questions: Questions = {
  1: {
    en: {
      question: "What is the capital of France?",
      answers: { answers: ["Paris", "London", "Berlin", "Rome"], answer: 1 },
    },
    fi: {
      question: "Mikä on Ranskan pääkaupunki?",
      answers: { answers: ["Pariisi", "Lontoo", "Berliini", "Rooma"], answer: 1 },
    }
  },
  2: {
    en: {
      question: "What is the capital of England?",
      answers: { answers: ["Paris", "London", "Berlin", "Rome"], answer: 2 },
    },
    fi: {
      question: "Mikä on Englannin pääkaupunki?",
      answers: { answers: ["Pariisi", "Lontoo", "Berliini", "Rooma"], answer: 2 },
    }
  }
}

// const mutations = {
//   createQuestion: (root, args) => {
//     const newQuestion = {
//       id: "54321",
//       email: args.email,
//       password: args.password,
//       loggedIn: false,
//       firstName: args.firstName,
//       lastName: args.lastName,
//     };
    
//     return newQuestion;
//   },
// };
  
  // export const resolvers = { queries, mutations };
  export const resolvers = { queries };