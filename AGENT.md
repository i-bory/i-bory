# AGENT.md - Guide de Référence pour I-BORY

Ce document sert de guide de référence pour les agents de développement et IA travaillant sur le projet **I-BORY**.

---

## 1. Identité de Marque & Contexte

- **Nom de l'entreprise** : `I-BORY` (ou `i-bory`)
- **Slogan officiel** : *"Vous rendre la vie plus facile"*
- **Description / Mission** : *"Nous créons des solutions informatiques à vos problèmes"*
- **Vocation** : Agence d'ingénierie logicielle et de solutions numériques concevant des applications web performantes, des applications mobiles intuitives, des automatisations de processus métier et des intégrations d'intelligence artificielle.

---

## 2. Charte Graphique & Tokens de Style (Palette Charm)

L'interface utilise la palette officielle **Charm** combinée à une ergonomie sobre, moderne et axée sur la lisibilité :

| Élément / Token | Valeur Hex / CSS | Usage |
| :--- | :--- | :--- |
| **Primaire** | `#6986F5` | Couleur dominante Charm, boutons d'action, accents, bordures actives, icônes |
| **Hover Primaire** | `#5371e4` | Survol des boutons primaires et liens interactifs |
| **Primaire Glow** | `rgba(105, 134, 245, 0.28)` | Halos lumineux, ombres portées douces |
| **Primaire Subtil** | `rgba(105, 134, 245, 0.12)` | Arrière-plan des badges, pastilles et conteneurs d'icônes |
| **Noir pur** | `#000000` | Fond global, contraste maximal |
| **Blanc pur** | `#ffffff` | Titres, typographies principales, boutons clairs |
| **Fond Principal** | `#06070a` | Couleur d'arrière-plan de la page |
| **Surface Carte** | `#0e1118` | Cartes, boîtes de dialogue et conteneurs |
| **Bordures Subtiles**| `rgba(255, 255, 255, 0.08)` | Délimitations discrètes |
| **Vert WhatsApp** | `#25D366` | Boutons et badges d'action directe WhatsApp |
| **Typographie** | `'Inter', sans-serif` | Police Google Inter chargée dans `src/index.html` (graisses 300 à 900) |

---

## 3. Structure des Fichiers & Architecture

```text
/home/char-c/Projects/ibory/
├── AGENT.md                 # Ce guide de référence
├── README.md                # Documentation générale
├── package.json             # Dépendances (React 19, react-router-dom, etc.)
├── tsconfig.json            # Configuration TypeScript
├── bunfig.toml              # Configuration Bun
├── src/
│   ├── index.html           # Point d'entrée HTML (Police Inter, Meta SEO)
│   ├── frontend.tsx         # Point de montage React (createRoot)
│   ├── App.tsx              # Configuration du routeur (BrowserRouter, Routes)
│   ├── index.ts             # Serveur HTTP Bun (routes d'API et index.html)
│   ├── utils.css            # Classes utilitaires CSS (m4, text-paragraph, etc.)
│   ├── index.css            # Styles globaux, resets et thèmes
│   ├── components/
│   │   ├── Navbar.tsx       # Barre de navigation responsive avec logo I-BORY
│   │   ├── Footer.tsx       # Pied de page complet avec coordonnées et liens
│   │   └── ScrollToTop.tsx  # Gestion du défilement automatique lors du routing
│   └── pages/
│       ├── Home.tsx         # Page d'accueil (Hero, Services, Projets, Valeurs, CTA)
│       └── Contact.tsx      # Page Contact (WhatsApp direct, Email direct, Formulaire)
```

---

## 4. Système CSS & Fichier `src/utils.css`

Le projet intègre un ensemble complet d'utilitaires CSS personnalisés. Deux syntaxes de marge et de padding sont prises en charge pour un confort d'écriture maximal (`m4` et `m-4`) :

### Typographie
- `.text-hero` : Titre principal imposant (Hero section).
- `.text-title` : Titres de section (H2).
- `.text-subtitle` : Sous-titres et titres de carte (H3/H4).
- `.text-lead` : Paragraphe d'introduction avec emphase.
- `.text-paragraph` : Corps de texte standard fluide et lisible.
- `.text-caption` : Texte secondaire, mentions et légendes.
- Graisses : `.font-light`, `.font-normal`, `.font-medium`, `.font-semibold`, `.font-bold`, `.font-extrabold`.
- Alignements : `.text-center`, `.text-left`, `.text-right`.

### Espacements
- Marges : `.m0` à `.m8` (ou `.m-0` à `.m-8`).
- Marges ciblées : `.mt-4`, `.mb-4`, `.my-4`, `.mx-auto`.
- Paddings : `.p0` à `.p8` (ou `.p-0` à `.p-8`).
- Paddings verticaux / horizontaux : `.py-4`, `.px-4`, `.py-10`.

### Couleurs & Fonds
- Textes : `.text-primary` (`#6986F5`), `.text-white`, `.text-black`, `.text-muted`.
- Fonds : `.bg-primary`, `.bg-black`, `.bg-white`, `.bg-surface`, `.bg-primary-subtle`.
- Bordures : `.border-primary`, `.border-subtle`, `.border-primary-subtle`.
- Dégradés texte : `.gradient-text-primary`.

### Mise en Page & Grilles
- Flexbox : `.flex`, `.flex-col`, `.items-center`, `.justify-between`, `.justify-center`, `.gap-2` à `.gap-8`.
- CSS Grid : `.grid`, `.grid-cols-1`, `.grid-cols-2`, `.grid-cols-3`, `.grid-cols-4`.
- Conteneurs : `.container` (largeur max 1200px centrée), `.container-narrow` (largeur max 840px).

### Composants Atomiques
- Boutons : `.btn`, `.btn-primary`, `.btn-outline`, `.btn-whatsapp`, `.btn-mail`.
- Cartes : `.card`, `.card-hover` (élévation avec bordure lumineuse au survol).
- Badges : `.badge`, `.badge-whatsapp`.

---

## 5. Routage & Pages de l'Application

Le routage est géré avec `react-router-dom` via `<BrowserRouter>` :

1. **Page d'Accueil (`/`)** :
   - **Hero** : Présentation forte de I-BORY, slogan *"Vous rendre la vie plus facile"*, description *"Nous créons des solutions informatiques à vos problèmes"*, boutons d'action et métriques d'impact.
   - **Section "Ce que nous faisons" (`#services`)** : 6 domaines clés (Web/SaaS, Mobile, Automatisation, IA & Data, Cloud & Sécurité, Audit/Conseil).
   - **Section "Nos projets" (`#projets`)** : Vitrine interactive de projets avec filtres de catégories, métriques d'impact et stack technique.
   - **Section "Pourquoi I-BORY" (`#valeurs`)** : 4 engagements fondamentaux.
   - **Bannière CTA** : Accès direct vers la page contact.

2. **Page "Nous contacter" (`/contact`)** :
   - **WhatsApp Instantané** : Lien direct `https://wa.me/...` avec message pré-rempli.
   - **Email Direct** : Adresse `contact@i-bory.com`, lien `mailto:` et bouton de copie rapide.
   - **Formulaire interactif complet** : Saisie du nom, email, téléphone, type de projet, budget indicatif, message, avec état de confirmation interactif.
   - **Étapes de suivi & FAQ** : Explication du délai de traitement (< 24h) et devis gratuit.

3. **Redirection Fallback** :
   - Toute URL inconnue (`*`) redirige automatiquement vers `/`.

---

## 6. Commandes de Développement & Production

```bash
# Lancer le serveur de développement avec rechargement à chaud (HMR)
bun run dev

# Compiler l'application pour la production (bundle minifié et optimisé dans /dist)
bun run build

# Démarrer le serveur en mode production
bun run start
```

---

## 7. Directives pour les Futures Évolutions

- **Ajout de routes** : Toujours enregistrer les nouvelles routes dans `src/App.tsx` au sein de `<Routes>` et ajouter les liens correspondants dans `src/components/Navbar.tsx` et `src/components/Footer.tsx`.
- **Cohérence des styles** : Privilégier systématiquement les classes de `src/utils.css` (`m4`, `text-paragraph`, `card`, `btn-primary`, etc.) et les variables CSS `--primary`, `--black`, `--white` pour respecter la charte de couleur Charm.
- **Accessibilité** : Maintenir des attributs `aria-label`, des contrastes élevés, des balises de formulaires explicites (`label`, `inputmode`, `autocomplete`) et préserver les animations désactivables via `prefers-reduced-motion`.
