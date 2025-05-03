const User = require('../models/User');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

exports.createUser = async (userData) => {
  //  la logique de validation supplémentaire
    if (!userData.email || !userData.password) {
        throw new Error('Email and password are required');
    }
    if (userData.password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
    }
    if (userData.role && !['voter', 'admin'].includes(userData.role)) {
        throw new Error('Invalid role');
    }
    if (userData.role) {
        userData.role = userData.role.toLowerCase();
    }
  // hachage de mot de passe avant la création
  const hashedPassword = await bcrypt.hash(userData.password, SALT_ROUNDS);
  return await User.create({ ...userData, password: hashedPassword });
};

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  return user;
};

exports.getUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.getUserByRole = async (role) => {
  return await User.findAll({ where: { role } });
};

exports.getAllUsers = async () => {
  return await User.findAll();
};

exports.getUserById = async (id) => {
  return await User.findByPk(id);
};

exports.updateUser = async (id, updateData) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User not found');
  }
  return await user.update(updateData);
};


exports.deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User not found');
  }
  return await user.destroy();
};