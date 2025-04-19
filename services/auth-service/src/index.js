import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();
app.use(express.json());
