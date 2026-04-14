# Quélys — Site Astro
## Restaurant bistronomique · Nantes

Thème Astro généré par Pixamine.

---

## Stack

- **Astro v4** (statique)
- **Tailwind CSS v3** (design tokens charte Quélys)
- **GitHub + Vercel** (déploiement automatique)
- **Brevo** (formulaire de contact)
- **Zenchef / TheFork** (réservation en ligne)

---

## Démarrage rapide

```bash
npm install
npm run dev        # → http://localhost:4321
npm run build      # → /dist
npm run preview
```

---

## Structure

```
src/
  layouts/
    Base.astro          ← Nav + Footer + SEO (commun à toutes les pages)
  pages/
    index.astro         ← Page d'accueil (8 sections)
    a-propos.astro
    la-carte.astro
    evenements.astro
    contact.astro
    mentions-legales.astro
    blog/
      index.astro       ← Listing articles
  styles/
    global.css          ← Variables CSS + composants (.btn-primary, etc.)
public/
  images/
    logo-quelys.png     ← Logo fond bleu (fourni)
    hero-salle.jpg      ← À remplacer — salle du restaurant
    hero-plat.jpg       ← À remplacer — plat dressé
    hero-ambiance.jpg   ← À remplacer — ambiance clients
    chef-plat.jpg       ← À remplacer — mains chef
    chef-portrait.jpg   ← À remplacer — portrait chef
    evenements-salle.jpg← À remplacer — salle privatisée
    insta-1.jpg → 6.jpg ← À remplacer — grille Instagram
    og-quelys.jpg       ← À remplacer — image OG (1200×630px)
    blog/               ← Images des articles de blog
```

---

## Design tokens (Tailwind)

| Token      | Hex        | Usage                          |
|------------|------------|--------------------------------|
| `cobalt`   | `#1F3464`  | Couleur principale, fonds, nav |
| `muted`    | `#8196A9`  | Textes secondaires             |
| `sky`      | `#ACC4D8`  | Fonds légers, bandeau cartes   |
| `apricot`  | `#DD9C7A`  | CTAs, accents, prix            |
| `peach`    | `#C97E5D`  | Hover states                   |
| `surface`  | `#F7F8FA`  | Fond général des pages         |

---

## Intégrations à configurer

### Réservation (Zenchef / TheFork)
Chercher dans les fichiers : `https://www.zenchef.com/quelys-nantes`
Remplacer par l'URL réelle du restaurant.

### Formulaire Brevo
Dans `src/pages/contact.astro` :
```
action="https://app.brevo.com/form/VOTRE_ID_FORMULAIRE"
```

### Google Analytics (optionnel)
Ajouter dans `src/layouts/Base.astro` dans `<head>`.

---

## Images à remplacer

Dimensions recommandées :
- **Hero (3 photos)** : 1000×1400px (portrait)
- **Chef plat / portrait** : 800×1000px
- **Événements salle** : 1200×900px
- **Grille Instagram** : 600×600px (carré)
- **OG image** : 1200×630px

---

## Déploiement Vercel

1. Push le repo sur GitHub
2. Connecter à Vercel → Framework preset : **Astro**
3. Chaque push sur `main` → déploiement automatique

---

## Ajouter un article de blog

Créer `src/pages/blog/[slug].astro` en suivant ce modèle :

```astro
---
import Base from '../../layouts/Base.astro';
const article = {
  title: "Titre de l'article",
  description: "Meta description 155 caractères max",
  date: "2025-04-01",
  categorie: "Coulisses",
  image: "/images/blog/mon-article.jpg",
  temps: "4 min",
};
---
<Base title={`${article.title} — Quélys`} description={article.description}>
  <!-- contenu -->
</Base>
```

---

*Généré par Pixamine · pixamine.fr*
