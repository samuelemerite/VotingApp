import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const register = async (req, res) => {
  const { nom, prenom, date_naissance, email, telephone, mot_de_passe } = req.body;
  console.log('requete recu dans register')
  res.status(201).json({ message: nom });

  try {


    // Création de l'utilisateur
    console.log("Données reçues :", req.body);
    const newUser = await User.create({
      nom,
      prenom,
      date_naissance,
      email,
      telephone,
      mot_de_passe,
    });

    res.status(201).json({ message: 'Utilisateur enregistré avec succès.', userId: newUser.id });
  } catch (error) {
    console.error('Erreur register:', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de l\'inscription.' });
  }
};

//  Connexion
export const login = async (req, res) => {
  const { email, mot_de_passe } = req.body;

  try {
    // Vérifie si l'utilisateur existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Email ou mot de passe invalide.' });
    }

    // Vérifie le mot de passe
    const isMatch = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    if (!isMatch) {
      return res.status(400).json({ error: 'Email ou mot de passe invalide.' });
    }

    // Génère le token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      SECRET_KEY,
      { expiresIn: '2h' }
    );

    res.json({ message: 'Connexion réussie.', token });
  } catch (error) {
    console.error('Erreur login:', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la connexion.' });
  }
};