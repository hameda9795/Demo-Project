# 🚀 Snel Starten - Het Kleine Paradijs

## ⚠️ Bekend Issue: & in Padnaam

De mapnaam `B&B` bevat een `&` teken. Dit is een speciaal teken in Windows command shells en kan problemen veroorzaken bij het uitvoeren van npm scripts.

## ✅ Oplossingen

### Optie 1: Gebruik `npx` direct (Aanbevolen)

```powershell
cd my-app
npx next dev --port 3456
```

### Optie 2: Gebruik het PowerShell script

```powershell
cd my-app
.\start-dev.ps1
```

### Optie 3: Gebruik het Batch script

```cmd
cd my-app
start-dev.bat
```

### Optie 4: Wijzig package.json scripts (Al gedaan)

De `package.json` is aangepast om `npx` te gebruiken:

```json
{
  "scripts": {
    "dev": "npx next dev --port 3456",
    "build": "npx next build",
    "start": "npx next start",
    "lint": "npx next lint"
  }
}
```

Probeer nu:

```bash
npm run dev
```

## 📋 Stappenplan

1. **Open PowerShell** in de `my-app` map
2. **Installeer dependencies** (eenmalig):
   ```bash
   npm install
   ```
3. **Download afbeeldingen** (eenmalig):
   ```bash
   npm run download-images
   ```
4. **Start de server**:
   ```bash
   npx next dev --port 3456
   ```

5. **Open browser**: http://localhost:3456

## 🔐 Demo Logins

| Pagina | URL | Gebruikersnaam | Wachtwoord |
|--------|-----|----------------|------------|
| Admin | /admin | demo | demo123 |
| Gast Portaal | /portal | gast | gast123 |

## 🆘 Nog steeds problemen?

Als je nog steeds issues ervaart, verplaats dan het project naar een map zonder speciale tekens:

```powershell
# Bijvoorbeeld:
Copy-Item -Recurse "my-app" "C:\Projects\het-kleine-paradijs"
cd "C:\Projects\het-kleine-paradijs"
npm install
npm run dev
```

---

*© 2025 Tech Solutions Utrecht*
