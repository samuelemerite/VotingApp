# Utilisation d'une image Node.js officielle (préférer une version stable)
FROM node:18-alpine

# Création et configuration du répertoire de travail
WORKDIR /

# Copie des fichiers de configuration d'abord pour optimiser le cache
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste de l'application
COPY . .

# Commande de démarrage
CMD ["node", "src/index.js"]