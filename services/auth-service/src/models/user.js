import { DataTypes } from 'sequelize';
import { sequelize } from '../../db.js';

export const User = sequelize.define('User', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  date_naissance: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [8, 20], // Ajuste selon ton besoin
    },
  },
  mot_de_passe: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 100], // Mot de passe d'au moins 6 caractères
    },
  },
}, {
  tableName: 'users',
  timestamps: true, // createdAt et updatedAt
});
