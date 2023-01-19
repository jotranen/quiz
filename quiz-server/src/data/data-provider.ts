// import Knex from 'knex'
const { Knex } = require('knex');
// import {Redis} from 'ioredis'

import PostgresProvider from './postgres-provider'
// import RedisProvider from './RedisProvider'

// type Knex = typeof Knex

export interface DataClient {
  postgres: typeof Knex,
//   redis: Redis,
}

export async function create (): Promise<DataClient> {
  return {
    postgres: await PostgresProvider.create(),
    // redis: await RedisProvider.create(),
  }
}

export default {create}