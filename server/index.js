import express from 'express';
import dotenv from 'dotenv';
 import cors from 'cors';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();

dotenv.config();
app.use(cors());
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = 8000;

Connection(username, password);
app.use(express.json());

app.use('/', Routes);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));