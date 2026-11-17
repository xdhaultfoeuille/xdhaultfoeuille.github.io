# Site académique de Xavier D’Haultfœuille

Ce dossier est prêt à être publié sur **https://xdhaultfoeuille.github.io/**. Il comprend une version personnalisée du site, fondée sur le CV et la photo fournis, et sur des liens récupérés sur l’ancien site CREST.

## Publication depuis le site GitHub (sans installation de logiciel)

1. Ouvrir le dépôt : https://github.com/xdhaultfoeuille/xdhaultfoeuille.github.io
2. Sur l’onglet **Code**, choisir **Add file → Upload files**.
3. **Décompresser d’abord l’archive ZIP** sur l’ordinateur, puis déposer le contenu décompressé sur GitHub. Il faut transférer les fichiers HTML, `style.css`, `script.js`, ainsi que les dossiers `assets` et `files` : ne pas transférer l’archive ZIP telle quelle.
4. Cliquer sur **Commit changes**, sur la branche `main`.
5. Si ce n’est pas déjà fait : **Settings → Pages → Deploy from a branch**, sélectionner `main` et `/(root)` puis enregistrer.
6. Vérifier la nouvelle version sur https://xdhaultfoeuille.github.io/ après la publication.

**Attention :** si le dépôt contient déjà des fichiers de site, enregistrer éventuellement une copie de l’ancienne version. Les fichiers transmis portant les mêmes noms remplaceront les anciens.

## Structure des fichiers

- `index.html` : page d’accueil et aperçu des recherches.
- `research.html` : 40 articles / chapitres, 9 working papers, 2 projets en cours et un livre.
- `cv.html` : parcours académique, formation, distinctions et liens vers le CV.
- `teaching.html` : enseignements actuels et passés.
- `software.html` : commandes Stata et logiciels R, avec quelques liens.
- `style.css` : styles graphiques et mise en page.
- `script.js` : barre de recherche de la page Publications.
- `assets/Xavier_DHaultfoeuille.jpg` : photo réduite en taille de fichier, sans retouche du contenu.
- `files/Xavier_DHaultfoeuille_CV.pdf` : version PDF du CV Word fourni.
- `files/Xavier_DHaultfoeuille_CV.docx` : CV Word fourni.

## Points à vérifier avant mise en ligne

- **Statuts des articles :** les mentions « forthcoming », « under revision », etc., viennent du CV fourni et peuvent changer.
- **Liens vers les articles :** certains ont été retrouvés sur l’ancien site CREST ou arXiv. Pour d’autres, aucun lien n’a été ajouté sans vérification ; on pourra les compléter.
- **Travaux en cours :** les deux projets indiqués comme « Work in progress » dans le CV sont repris. Les supprimer de `research.html` si tu ne souhaites pas les rendre publics.
- **Résumé des articles :** quelques courtes descriptions ont été ajoutées. Pour les autres, nous pourrons reprendre et mettre à jour les résumés de l’ancien site après validation.
- **CV :** lorsqu’il sera mis à jour, il faudra remplacer le PDF du dossier `files` (et éventuellement le Word).
- Les polices Google utilisées dans le style sont facultatives : des polices locales prennent le relais en l’absence de connexion.

## Modifier le site

Chaque page est un fichier HTML ordinaire, modifiable dans GitHub. On peut aussi modifier `style.css` pour changer les couleurs et la typographie.
