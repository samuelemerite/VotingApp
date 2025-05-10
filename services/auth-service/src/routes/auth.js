import express from 'express';
import { register, login } from '../controllers/authController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

export const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'auth-service opérationnel ✅' });
});

router.post('/register', register);
router.post('/login', login);

// ✅ Exemple de route protégée
router.get('/profile', authenticate, (req, res) => {
  res.json({ message: `Bienvenue utilisateur ID ${req.user.id}` });
});


