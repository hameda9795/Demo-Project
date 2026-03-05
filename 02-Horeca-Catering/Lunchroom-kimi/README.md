# De Lunchkamer - Next.js + Tailwind CSS

Yek website Horeca & Catering ba estefade az **Next.js 14**, **React**, **TypeScript**, va **Tailwind CSS**.

## 🚀 Shoru Kar

### Pre-requisites
- Node.js 18+ va npm/yarn

### Nasb Va Ejra

```bash
# 1. Nasb dependencies
npm install

# 2. Ejra dar halat development
npm run dev

# 3. Baz kardan dar browser
# http://localhost:3000
```

### Build Baraye Production

```bash
npm run build
npm start
```

## 📁 Structure Project

```
src/
├── app/                    # Next.js App Router
│   ├── dashboard/          # Safhe dashboard
│   ├── login/              # Safhe login
│   ├── signup/             # Safhe signup
│   ├── globals.css         # Styles global
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── sections/           # Section-haye safhe
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── MenuSection.tsx
│   │   ├── CateringSection.tsx
│   │   ├── GallerySection.tsx
│   │   └── ContactSection.tsx
│   ├── CustomCursor.tsx    # Cursor sفارسی
│   ├── FloatingButton.tsx  # Dokme floating
│   ├── Footer.tsx          # Footer
│   ├── Header.tsx          # Header va navigation
│   └── ScrollReveal.tsx    # Animation scroll
├── hooks/
│   └── useScrollReveal.ts  # Hook baraye scroll animation
├── lib/                    # Utility functions
└── types/                  # TypeScript types
```

## 🎨 Features

- **Custom Cursor**: Cursor sفارسی ba hover effect
- **Scroll Animations**: Animation-haye smooth moghe scroll
- **Responsive Design**: Responsive baraye mobile, tablet, desktop
- **Menu Tabs**: Tab-haye interactive baraye menu
- **Forms**: Form-haye validation dar login, signup, contact
- **Dashboard**: Panel modiriyat ba tables va stats

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (body), Playfair Display (display)
- **Icons**: Lucide React

## 📝 Safhe-ha

1. **Homepage** (`/`): Landing page ba tamami section-ha
2. **Login** (`/login`): Safhe vorod
3. **Signup** (`/signup`): Safhe sabte nam
4. **Dashboard** (`/dashboard`): Panel modiriyat

## ⚙️ Config-haye Tailwind

Dar `tailwind.config.ts` rang-ha va font-haye zir tarif shode-and:

```typescript
colors: {
  primary: '#1a1a1a',
  secondary: '#f5f1eb',
  accent: '#c75b39',
  'accent-light': '#e07a5f',
  'warm-white': '#faf8f5',
  cream: '#f2efe9',
  stone: '#8b8680',
  'stone-light': '#b5b0a8',
}
```

## 🖼️ Images

Tamami images az Unsplash estefade shode-and. Baraye estefade dar production, image-hara download va dar folder `public/images` gharar dahid.

## 📄 License

In yek demo project ast. Tamami hoghogh mahfooz ast.
