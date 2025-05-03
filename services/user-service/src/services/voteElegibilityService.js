const User = require('../models/User');

exports.checkVoteEligibility = async (userId) => {
  const user = await User.findByPk(userId);
  
  if (!user) throw new Error('User not found');
  if (user.hasVoted) throw new Error('User has already voted');
  if (!user.isEligible) throw new Error('User is not eligible to vote');
  
  // Vérification de l'âge (ex: 18 ans minimum)
  const age = calculateAge(user.birthDate);
  if (age < 18) throw new Error('User is underage');
  
  return true;
};

function calculateAge(birthDate) {
  // Implémentation du calcul d'âge
}