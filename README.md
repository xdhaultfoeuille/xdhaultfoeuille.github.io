# SEO — site académique (version 6)

Cette version reprend la version 5 sans changer l’apparence, les contenus scientifiques ou la photo.

Ajouts :
- `sitemap.xml` (index des quatre pages) et `robots.txt`.
- Une adresse canonique (`rel=canonical`) dans chacune des quatre pages HTML.
- Titre et description de la page d’accueil précisant le nom et les domaines de recherche.
- Métadonnées structurées de type `Person` sur la page d’accueil, incluant la graphie sans ligature `oe`.
- Un `h1` sémantique sur la page d’accueil (sans changement de mise en page).

## Installation GitHub Pages

Déposez à la racine du dépôt `xdhaultfoeuille.github.io` les quatre fichiers HTML, `sitemap.xml` et `robots.txt`. L’archive complète conserve également `assets` et `files` et peut être déposée à la place si rien n’a été modifié entre temps. Ne téléversez pas le ZIP lui-même.

## Google Search Console

1. Ajoutez `https://xdhaultfoeuille.github.io/` en **préfixe URL**.
2. Vérifiez votre propriété par le fichier HTML fourni par Google (à mettre à la racine).
3. Dans **Sitemaps**, soumettez `sitemap.xml`.
4. Dans **Inspection de l’URL**, demandez l’indexation de la page d’accueil.

L’indexation et les positions dans les résultats de recherche ne sont jamais garanties.
