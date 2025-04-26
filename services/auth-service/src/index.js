import express from 'express';
import { Router } from 'express';
import dotenv from 'dotenv';
import {router as authRoutes} from './routes/auth.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/auth',authRoutes);

export const router = Router();

// Nouvelle route GET simple
router.get('/hello', (req, res) => {
    console.log('dddddddddd');
    res.send('Hello World');
});

// Nouvelle route GET simple
app.get('//hello', (req, res) => {
    console.log('jksjkjd');
    res.send('Hello World');
});

const PORT = process.env.PORT ||  3000;
app.listen(PORT,
    ()=>{
        console.log(`Auth service is running on port ${PORT}`)
    }
);