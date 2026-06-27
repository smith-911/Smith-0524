# Karl Bryan Tchoupe Pembe - Portfolio Premium

Portfolio moderne et premium construit avec Next.js 15, React, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Caractéristiques

- ✨ Design premium et futuriste
- 🎨 Interface utilisateur intuitive et élégante
- 📱 Entièrement responsive (Mobile, Tablet, Desktop)
- 🌙 Mode sombre par défaut
- ⚡ Performance optimisée
- 🎭 Animations fluides avec Framer Motion
- 🔍 SEO optimisé
- ♿ Accessibilité respectée
- 🌐 Multilingue (Français/Anglais)
- 💼 Portfolio complet avec tous les éléments clés

## 📋 Sections

1. **Hero** - Section d'accueil avec présentation personnelle
2. **À propos** - Informations personnelles et CV
3. **Compétences** - Compétences techniques avec barres de progression
4. **Expériences** - Timeline des expériences professionnelles
5. **Projets** - Galerie des projets réalisés
6. **Formation** - Timeline de la formation académique
7. **Certifications** - Certifications professionnelles
8. **Contact** - Formulaire de contact et coordonnées

## 🛠️ Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes
- **Shadcn UI** - Composants UI réutilisables

## 📦 Installation

1. Cloner le repository :
```bash
git clone https://github.com/smith-911/Smith-0524.git
cd Smith-0524
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur

## 🏗️ Structure du projet

```
Smith-0524/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   ├── Navbar.tsx          # Barre de navigation
│   ├── Footer.tsx          # Pied de page
│   ├── BackgroundAnimation.tsx # Animations de fond
│   └── sections/
│       ├── Hero.tsx        # Section héro
│       ├── About.tsx       # À propos
│       ├── Skills.tsx      # Compétences
│       ├── Experience.tsx  # Expériences
│       ├── Projects.tsx    # Projets
│       ├── Education.tsx   # Formation
│       ├── Certifications.tsx # Certifications
│       └── Contact.tsx     # Contact
├── package.json            # Dépendances
├── tsconfig.json          # Configuration TypeScript
├── tailwind.config.ts     # Configuration Tailwind
├── next.config.js         # Configuration Next.js
└── postcss.config.js      # Configuration PostCSS
```

## 🎨 Personnalisation

### Couleurs
Modifier les couleurs dans `tailwind.config.ts` :

```typescript
colors: {
  dark: "#0B1120",
  "dark-secondary": "#111827",
  primary: "#2563EB",
  "primary-light": "#3B82F6",
}
```

### Contenu
Remplir vos informations dans les sections correspondantes :
- Nom, titre et description dans `Hero.tsx`
- Expériences dans `Experience.tsx`
- Projets dans `Projects.tsx`
- Formation dans `Education.tsx`
- Certifications dans `Certifications.tsx`

### Images
Remplacer le placeholder dans `Hero.tsx` avec votre photo de profil.

## 🚀 Déploiement

### Vercel (recommandé)

1. Connecter le repository à Vercel
2. Configurer les variables d'environnement si nécessaire
3. Déployer automatiquement

### Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Build production

```bash
npm run build
npm start
```

## 📊 Performance

- Lighthouse Score: 95+
- Core Web Vitals optimisés
- Lazy loading des images
- Code splitting automatique
- Minification et compression

## 🔐 SEO

- Meta tags optimisés
- Open Graph pour les réseaux sociaux
- Twitter Card
- Sitemap (à ajouter)
- Robots.txt (à ajouter)

## 🌐 Accessibilité

- WCAG 2.1 Level AA
- Contraste suffisant
- Navigation au clavier
- Labels ARIA
- Focus visible

## 📧 Contact

- **Email** : dollarbrayan8@gmail.com
- **Téléphone** : 692 86 06 95
- **Localisation** : Douala, Cameroun
- **WhatsApp** : https://wa.me/237692860695

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

Merci d'avoir consulté mon portfolio !

---

**Développé avec ❤️ par Karl Bryan Tchoupe Pembe**
