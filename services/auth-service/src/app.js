import express from 'express';
import cors from 'cors'; // Ajout de CORS pour gérer les requêtes cross-origin
import { router as authRoutes } from './routes/auth.js';  // Utilisation de la route auth.js
import dotenv from 'dotenv';

dotenv.config(); // Charger les variables d'environnement

const app = express();
// Middleware pour gérer le JSON dans les requêtes
app.use(express.json());
// Middleware pour CORS (si tu utilises un frontend sur un autre domaine)
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3001' // Frontend à ajuster selon ton environnement
}));



// Routes pour l'authentification
app.use('/api/auth', authRoutes);

export default app;
