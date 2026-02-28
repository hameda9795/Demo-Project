
---

**📋 Mavared Lazem baraye Schilder Proje:**

| Title | Description Kortah | Vijegi-haye Khas (Site) |
|-------|-------------------|-------------------------|
| **Kleur & Verf Meesters** | Professionele schilders website met focus op kleuradvies, binnen- en buitenschilderwerk. Vrolijk, kleurrijk design met interactieve tools voor kleurkeuze. | • **Drijvende CTA knop** (verf emmer icoon, gradient kleuren, linkt naar techsolutionsutrecht.nl/contact)<br>• **Kleurenkiezer tool** (kamers van kleur veranderen, visuele selector)<br>• **Before/After slider** (essentieel voor schilders, 4 transformaties)<br>• **Verf calculator** (m² naar liters + prijsindicatie)<br>• **Soorten afwerking** (Mat/Satijn/Hoogglans uitleg met textures)<br>• **Seizoens advies** (wanneer schilderen buiten?)<br>• **5 jaar garantie** badges (kwaliteit accentueren)<br>• **DEMO labels** (alle contactgegevens duidelijk als voorbeeld) |
| **Admin Dashboard** | Beheersysteem voor schilderprojecten met kleuradministratie. | • **Project pipeline** (Kanban: Offerte → Planning → Uitvoering)<br>• **Verf voorraad** (RAL kleuren beheer)<br>• **Kalender** (afspraken per dag)<br>• **Foto documentatie** (before/after upload)<br>• **Offerte calculator** (marge berekening)<br>• **Login**: demo/demo123 |
| **Klant Portal** | Omgeving waar klanten hun schilderwerk volgen. | • **Project voortgang** (0-100% balk)<br>• **Gekozen RAL kleuren** (overzicht)<br>• **Geplande data** (wanneer komen de schilders?)<br>• **Voortgangs foto's** (dagelijkse updates)<br>• **Factuur preview** |
| **VerfTips Blog** | Content marketing voor SEO en autoriteit. | • **Kleur van het jaar** (trends)<br>• **Onderhoud advies** (hoe lang blijft verf mooi?)<br>• **Oppervlakte berekenen** (guide)<br>• **Downloadbare checklist** (PDF) |

**⚠️ Rahnama baraye Demo Marking:**

Baraye tamiz bodan, in component ra besazid:

```typescript
// components/DemoBanner.tsx
export const DemoBanner = () => (
  <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50 text-sm font-semibold">
    ⚠️ DEMO WEBSITE - Alle contactgegevens zijn fictief (Voorbeeld) - 
    <a href="https://techsolutionsutrecht.nl/contact" className="underline ml-2">
      Echte website bezoeken
    </a>
  </div>
);