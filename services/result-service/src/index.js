import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import { apiResult } from '../../../votingApp/src/services/api.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/result',resultRoutes);

const PORT = process.env.PORT ||  3000;
app.listen(PORT,
    ()=>{
        console.log(`Auth service is running on port ${PORT}`)
    }
);