/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express';
import {APIs_V1} from '~/routes/v1';

import exitHook from 'async-exit-hook';
import { connectToMongoDB, closedb } from '~/config/mongodb';
import 'dotenv/config';
// chay server
const start_server = () => {
  const app = express();

  app.use('/v1', APIs_V1);

  const hostname = 'localhost';
  const port = 8017;

  // list collection tu database
  app.get('/', async (req, res) => {
    res.end('Welcome to Trello API');
  });

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`3.Hello ${process.env.AUTHOR}, I am running at ${hostname}:${port}/`);
  });

  exitHook(() => {
    closedb();
  });
};

// ket noi database
// chi khi ket noi thanh cong moi chay server
console.log('1.Connecting to MongoDB...');
connectToMongoDB()
  .then(() => console.log('2.Connected to MongoDB'))
  .then(() => start_server())
  .catch(() => {
    console.error('Error connecting');
    process.exit(0);
  });
