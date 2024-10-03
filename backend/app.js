import express, { json } from 'express';
import cors from 'cors';
import { config }  from 'dotenv';
import { sequelize, connectDB } from './config/database.js';
import { syncModels } from './config/syncModel.js';
import usuarioRoutes from './routes/usuarioRouter.js';

config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());

connectDB();
syncModels();

app.use('/api', usuarioRoutes);




app.listen(port, () => {
  console.log(`Servidor iniciado en puerto http://localhost:${port}`);
});
