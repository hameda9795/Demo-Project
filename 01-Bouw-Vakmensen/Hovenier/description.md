
---

**📋 Mavared Lazem baraye Hovenier Proje:**

| Title | Description Kortah | Vijegi-haye Khas (Site) |
|-------|-------------------|-------------------------|
| **Groen & Tuin Architectuur** | Professionele hovenier website met focus op tuinontwerp, aanleg en onderhoud. Organisch design met natuurlijke vormen, seizoensgebonden content en ecologische focus. | • **Drijvende CTA knop** (groene gloed, blad icoon, linkt naar techsolutionsutrecht.nl/contact)<br>• **Before/After slider** (tuin transformaties cruciaal)<br>• **TuinOntwerper tool** (interactieve keuze: stijl, functies, prijsindicatie)<br>• **Seizoenskalender** (wat te doen wanneer in tuin)<br>• **Eco-calculator** (duurzaamheidsscore, waterbesparing)<br>• **Planten database** (6 inheemse planten met filters)<br>• **Organische vormen** (geen rechthoeken, alleen blobs/curves)<br>• **DEMO labels** (alle contactgegevens duidelijk als voorbeeld gemarkeerd) |
| **Admin Dashboard** | Beheersysteem voor tuinprojecten met seizoensplanning. | • **Weer widget** (buitenwerk planning)<br>• **Seizoensgebonden taken** (lente/herfst werk)<br>• **Planten voorraad** (administratie)<br>• **Project kaart** (Amsterdam regio)<br>• **Klanttijdlijn** (groei foto's)<br>• **Login**: demo/demo123 |
| **Klant Portal** | Persoonlijke tuinomgeving voor opdrachtgevers. | • **Mijn Tuin profiel** (ontwerp PDF)<br>• **Onderhoudsschema** (wanneer komt de hovenier?)<br>• **Groei timeline** (foto's over tijd)<br>• **Seizoens tips** (persoonlijk advies)<br>• **Hulp nodig knop** (link naar echte contact) |
| **Tuinblog** | Seizoensgebonden content voor SEO. | • **Maandtaak** (wat te doen deze maand)<br>• **Downloadbare jaarkalender** (PDF)<br>• **Duurzaam tuinieren tips**<br>• **Onderhouds gidsen** |

**⚠️ Rahnama baraye Floating Button dar Layout:**

Dar `app/layout.tsx` hatman in component ra ezafe konid ta dar hameye safahat namayesh dade shavad:

```typescript
// app/layout.tsx
import { FloatingCTA } from '@/components/FloatingCTA';
import { DemoBadge } from '@/components/DemoBadge';

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className="relative">
        <DemoBadge /> {/* "DEMO" label dar gooshe */}
        {children}
        <FloatingCTA 
          link="https://techsolutionsutrecht.nl/contact"
          label="Direct Contact"
        />
      </body>
    </html>
  );
}