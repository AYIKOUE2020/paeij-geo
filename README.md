[![Netlify Status](https://api.netlify.com/api/v1/badges/c911bf95-1984-4999-8c16-842394587a9e/deploy-status)](https://app.netlify.com/sites/paeij-sp/deploys)

# Comment installer l'application

Télécharger le dossier dans le repertoire de travail. S'assurer que nodejs [https://nodejs.org](Nodejs) est installé sur votre ordinateur.
## Installer les dépendances

Dans le répertoire du projet, faite `npm install` pour installer l'ensemble des dépendances du projet.

### `npm start`

Exécuter l'application en mode développement
Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

La page se rechargera si vous faites des modifications. \
Vous verrez également les éventuelles erreurs de peluche dans la console.

### `npm run build`

Construit l'application pour la production dans le dossier `build`.
Il regroupe correctement React en mode production et optimise le build pour obtenir les meilleures performances.

Le build est minifié et les noms de fichiers incluent les hashs.\
Votre application est prête à être déployée !
