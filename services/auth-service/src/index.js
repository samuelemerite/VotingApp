import dotenv from 'dotenv';
import app from './app.js';
import { connectToDB } from '../db.js';
import { sequelize } from '../db.js';


dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Connexion à la base de données
    await connectToDB();
    
    // Synchronisation des modèles avec la base de données
    await sequelize.sync(); 

    // Démarrage du serveur
    app.listen(PORT, () => {
      console.log(`Auth service is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Erreur lors du démarrage du serveur:', error);
  }
};

startServer();
