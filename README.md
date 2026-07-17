# Portfolio — Zouwéra Seydou

Portfolio personnel (HTML/CSS/JS vanilla, sans framework) — étudiante en Génie Logiciel, ESIG Global Success.

## Structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── design/     → tes créations graphiques (affiches, flyers, posts)
│   │   └── projets/    → captures d'écran de tes projets
│   └── cv/              → ton CV en PDF
└── README.md
```

## À compléter avant mise en ligne

1. **Photo de profil** : ajouter `assets/images/photo-profil.jpg`, puis dans `index.html` remplacer
   le bloc `<div class="placeholder">[ photo ]...</div>` par
   `<img src="assets/images/photo-profil.jpg" alt="Photo de Zouwéra Seydou">`.
2. **CV** : ajouter `assets/cv/cv-zouwera-seydou.pdf`, puis mettre à jour les deux boutons
   "Télécharger le CV" / "Télécharger mon CV" (`href="#"` → `href="assets/cv/cv-zouwera-seydou.pdf" download`).
3. **Liens de contact** : dans la section `#contact` et le `<nav>`, remplacer les `href="#"` par
   tes vrais liens (email en `mailto:...`, WhatsApp en `https://wa.me/...`, LinkedIn, GitHub, Google Sites).
4. **Visuels des projets et du design graphique** : remplacer les blocs `.mockup` et `.design-ph`
   par de vraies images (`<img>`) une fois tes captures/visuels prêts.
5. **Favicon et image de partage** : `assets/images/favicon.png` et `assets/images/og-cover.jpg`.

## Déploiement sur GitHub Pages

1. Crée un dépôt GitHub (ex. `zouwera-portfolio`).
2. Pousse ces fichiers à la racine du dépôt :
   ```
   git init
   git add .
   git commit -m "Premier déploiement du portfolio"
   git branch -M main
   git remote add origin https://github.com/<ton-utilisateur>/zouwera-portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Source : Deploy from a branch → Branch : main → /(root)**.
4. Le site sera disponible à `https://<ton-utilisateur>.github.io/zouwera-portfolio/` après
   quelques minutes.

## Notes techniques

- Aucune dépendance externe hormis les polices Google Fonts (Poppins, Inter, JetBrains Mono).
- `prefers-reduced-motion` est respecté (animations désactivées si l'utilisateur le préfère).
- Un lien d'évitement ("Aller au contenu principal") est présent pour l'accessibilité clavier.
- Le filtre de la galerie Design et les compteurs animés sont gérés en JS pur (`js/main.js`).
