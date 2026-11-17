# Personal academic website — Xavier D’Haultfœuille

This is a static website designed for GitHub Pages. It contains Home, Research, Teaching, and Software. There is no CV tab: the homepage links directly to the CV PDF.

## Publication sur GitHub (important)

1. Décompresser le ZIP sur l'ordinateur.
2. Ouvrir https://github.com/xdhaultfoeuille/xdhaultfoeuille.github.io.
3. Cliquer sur **Add file > Upload files**.
4. **Déposer le contenu du ZIP à la racine du dépôt, et non pas le ZIP ni un dossier parent.** Vérifier que `index.html`, `research.html`, `teaching.html`, `software.html` sont à la racine. Les dossiers `assets/` et `files/` doivent conserver leur structure.
5. Cliquer sur **Commit changes**. Les fichiers portant le même nom que les anciens seront remplacés.
6. Supprimer éventuellement les anciens fichiers `cv.html`, `style.css`, et `script.js`, inutiles dans la nouvelle version.
7. Vérifier que Settings > Pages utilise `Deploy from a branch`, branche `main`, dossier `/(root)`.

Le CSS et le JavaScript sont intégrés directement à chaque page HTML, évitant qu'un fichier CSS oublié à l'envoi produise une page sans mise en forme (texte trop grand et aligné à gauche).

## Fichiers

- `index.html` : accueil avec une courte biographie et le lien vers le CV.
- `research.html` : articles, working papers et projets, avec champ de recherche.
- `teaching.html` : enseignements.
- `software.html` : logiciels.
- `assets/Xavier_DHaultfoeuille.jpg` : photo.
- `files/Xavier_DHaultfoeuille_CV.pdf` : CV.

Pour modifier le texte d'une page, ouvrir son fichier HTML et changer le texte entre les balises HTML. La feuille de style est intégrée dans chaque fichier entre `<style>` et `</style>`.
