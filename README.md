# CTM — Refonte du site (concept)

Maquette de démonstration d'une refonte du site [ctm.ma](https://ctm.ma), construite à partir
d'une analyse stratégique : gagner la bataille de la **réservation en direct** face aux
agrégateurs (marKoub) et concurrents (Supratours, ALSA).

> Concept / démo uniquement — non affilié à la Compagnie de Transports au Maroc.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Three.js** via `@react-three/fiber` + `@react-three/drei` (bus 3D du hero, low-poly, sans asset externe)
- **GSAP** + **ScrollTrigger** (animation du hero, reveals au scroll, compteurs animés)

## Démarrer

```bash
npm install
npm run dev      # serveur de dev
npm run build    # build de production
npm run preview  # prévisualiser le build
```

## Structure de la page

Le découpage suit le brief stratégique et le langage visuel des références fournies :

| Section | Composant | Rôle |
|---------|-----------|------|
| Navigation + langues | `Navbar` | 5 piliers, sélecteur FR/AR/EN/ES, CTA sticky |
| Hero + bus 3D + barre de recherche | `Hero`, `BusModel`, `SearchBar` | Entrée dans le tunnel en 1 écran |
| Lignes populaires | `PopularRoutes` | Cartes trajet + prix « à partir de » |
| Pourquoi CTM + stats | `WhyCTM` | Convertir l'atout confiance (depuis 1919) |
| CTM Premium | `Premium` | Mettre en avant le différenciateur |
| Messagerie + suivi colis | `Messagerie` | Activer un revenu unique |
| Réseau / carte | `NetworkMap` | Couverture nationale |
| App + réservation directe | `AppDownload` | Détourner les utilisateurs des agrégateurs |
| Pied de page | `Footer` | Liens, langues, newsletter |

## Design

- Couleurs : **rouge CTM** (`#E2001A`) pour l'action, dégradé **ciel → blanc** pour l'atmosphère voyage.
- Composants : barre de recherche flottante « glass », cartes arrondies, badges de prix, boutons pill.
- Le bus 3D est généré à partir de primitives — aucun fichier `.glb` à charger ; le canvas est en `lazy` + `Suspense` pour ne pas bloquer le premier rendu.
