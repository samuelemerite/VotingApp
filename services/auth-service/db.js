import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      // host: process.env.DB_HOST,
      host: '172.18.0.2',
      dialect: 'mysql',
      logging: false,
      port: 3306,  // Spécifier le port 3307
    }
  );
  
  export const connectToDB = async () => {
    let attempts = 0;
    const maxAttempts = 5;
    const delay = 5000;  // Délai de 5 secondes avant de réessayer
  
    while (attempts < maxAttempts) {
      try {
        await sequelize.authenticate();
        console.log('✅ Connexion à la base de données réussie');
        return;  // Quitte dès que la connexion est réussie
      } catch (error) {
        attempts++;
        console.error(`❌ Échec de la connexion (tentative ${attempts}):`, error);
        if (attempts < maxAttempts) {
          console.log(`Attente de ${delay / 1000} secondes avant de réessayer...`);
          await new Promise(resolve => setTimeout(resolve, delay));  // Attendre avant de réessayer
        } else {
          console.error('❌ Échec de la connexion à la base de données après plusieurs tentatives.');
          process.exit(1);  // Quitte le processus si les tentatives échouent
        }
      }
    }
  };