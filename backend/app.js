import express, { json } from 'express';
import cors from 'cors';
import { sequelize, connectDB } from './config/database.js';
import { config }  from 'dotenv';

config();





const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());

connectDB();


app.listen(port, () => {
  console.log(`Servidor iniciado en puerto http://localhost:${port}`);
});
