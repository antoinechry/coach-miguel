# Coach Miguel — app iPhone (Capacitor)

L'app embarque `index.html` et `meteo.html` de la racine du dépôt. Les données restent dans Supabase (projet `coach-miguel`), comme sur le site.

## Installer sur ton iPhone (test, avec Xcode)
1. Sur le Mac : `git clone https://github.com/antoinechry/coach-miguel.git` (ou `git pull` si déjà cloné).
2. Ouvrir `mobile/ios/App/App.xcodeproj` dans Xcode (double-clic). Xcode télécharge Capacitor tout seul (Swift Package, pas de CocoaPods) : attendre la fin de « Resolving Package Graph ».
3. Cible **App** → onglet **Signing & Capabilities** : cocher « Automatically manage signing », **Team** = Beyond The Track. Bundle ID : `fr.beyondthetrack.coachmiguel`.
4. Brancher l'iPhone en USB (la 1re fois : « Se fier à cet ordinateur »). Sur l'iPhone : Réglages → Confidentialité et sécurité → **Mode développeur** activé (redémarrage demandé).
5. En haut d'Xcode, choisir ton iPhone comme destination, puis ▶︎ (Cmd+R).

## Après une modification de l'app web
Les fichiers embarqués sont dans `ios/App/App/public` (copie de la racine). Pour les mettre à jour (Node.js nécessaire) :
```
cd mobile
npm install        # la 1re fois
npm run sync       # copie index.html, meteo.html, icônes → ios/App/App/public
```
Puis ▶︎ dans Xcode. Sans ça, l'app garde l'ancienne version (pas de bouton « Nouvelle version » dans l'app).

## Particularités dans l'app
- `IS_APP` (index.html) : vrai dans l'app ; coupe la recherche de nouvelle version.
- « Mot de passe oublié » : le lien de l'e-mail ouvre le site (GitHub Pages), on y choisit le nouveau mot de passe puis on se reconnecte dans l'app.
- Liens externes (intervals.icu…) : s'ouvrent dans Safari.
- iPhone seulement, portrait. Icône et écran de démarrage tirés du logo (`resources/icon.svg`).
