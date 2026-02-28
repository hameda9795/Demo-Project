/**
 * Blog Post Detail Page
 * Dakwerken Van der Berg
 * 
 * @description Individual blog post page with full content
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ArrowLeft,
  User,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import type { BlogPost, BlogCategory } from "@/types";

// Demo blog posts data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Hoe herkent u stormschade aan uw dak?",
    slug: "stormschade-herkennen",
    excerpt: "Na een hevige storm is het belangrijk om uw dak te controleren op beschadigingen.",
    content: `
      <p>Na een hevige storm is het essentieel om uw dak te controleren op eventuele beschadigingen. Stormschade aan een dak kan variëren van kleine, nauwelijks zichtbare barstjes tot ernstige structurele problemen die directe aandacht vereisen.</p>
      
      <h2>Waar moet u op letten?</h2>
      
      <p>Bij het inspecteren van uw dak na storm zijn er verschillende zaken waar u op moet letten:</p>
      
      <ul>
        <li><strong>Losse of ontbrekende dakpannen</strong> - Dit is het meest voorkomende probleem na storm</li>
        <li><strong>Beschadigde nokvorsten</strong> - Deze beschermen uw dak tegen waterindringing</li>
        <li><strong>Scheuren in het voegwerk</strong> - Kleine scheuren kunnen grote problemen veroorzaken</li>
        <li><strong>Beschadigde dakgoten</strong> - Controleer op scheuren of verplaatsingen</li>
        <li><strong>Vochtplekken binnen</strong> - Dit kan duiden op lekkages die niet direct zichtbaar zijn</li>
      </ul>
      
      <h2>Wanneer belt u een professional?</h2>
      
      <p>Als u een van de volgende situaties constateert, raden wij aan om direct contact op te nemen met een dakdekker:</p>
      
      <ul>
        <li>Meer dan 5 dakpannen zijn losgeraakt of beschadigd</li>
        <li>U ziet waterdrukken op zolder of plafonds</li>
        <li>Er hangen onderdelen los van het dak</li>
        <li>U hoort ongewone geluiden vanaf het dak</li>
      </ul>
      
      <h2>Preventie is beter dan genezen</h2>
      
      <p>Een goed onderhouden dak weerstand biedt beter aan storm. Zorg voor regelmatige inspecties en onderhoud om de kans op stormschade te minimaliseren.</p>
    `,
    featuredImage: "/images/dakdekker/services/repair-leak.jpg",
    category: "stormschade",
    tags: ["stormschade", "onderhoud", "veiligheid"],
    publishedAt: "2024-02-15",
    author: "Peter van der Berg",
    readingTime: 5,
  },
  {
    id: "2",
    title: "Dakpannen vs. leien: welke kiest u?",
    slug: "dakpannen-vs-leien",
    excerpt: "De keuze tussen dakpannen en leien hangt af van verschillende factoren.",
    content: "<p>De keuze tussen dakpannen en leien is een belangrijke beslissing bij een dakrenovatie. Dakpannen zijn over het algemeen voordeliger en bieden een traditionele uitstraling. Leien zijn duurzamer en geven een luxere uitstraling.</p><h2>Dakpannen voordelen</h2><ul><li>Kosteneffectief</li><li>Gemakkelijk te vervangen</li><li>Vele kleuren en stijlen beschikbaar</li></ul><h2>Leien voordelen</h2><ul><li>Zeer duurzaam (50+ jaar)</li><li>Onderhoudsarm</li><li>Exclusieve uitstraling</li></ul>",
    featuredImage: "/images/dakdekker/services/new-tiles.jpg",
    category: "materialen",
    tags: ["dakpannen", "leien", "renovatie"],
    publishedAt: "2024-02-10",
    author: "Peter van der Berg",
    readingTime: 7,
  },
  {
    id: "3",
    title: "5 tips voor een energiezuinig dak",
    slug: "energiezuinig-dak-tips",
    excerpt: "Een goed geïsoleerd dak kan uw energierekening flink verlagen.",
    content: "<p>Een energiezuinig dak begint met goede isolatie. Hier zijn 5 tips om uw dak energiezuiniger te maken:</p><ol><li><strong>Investeer in goede isolatie</strong> - Kies voor materiaal met hoge Rd-waarde</li><li><strong>Dicht alle naden en kieren</strong> - Tocht zorgt voor warmteverlies</li><li><strong>Overweeg zonnepanelen</strong> - Genereren uw eigen stroom</li><li><strong>Kies lichte kleuren</strong> - Reflecteren zonlicht in de zomer</li><li><strong>Laat jaarlijks inspecteren</strong> - Voorkom isolatieverlies</li></ol>",
    featuredImage: "/images/dakdekker/services/insulation.jpg",
    category: "energiebesparing",
    tags: ["isolatie", "energiebesparing", "duurzaamheid"],
    publishedAt: "2024-02-05",
    author: "Marieke Jansen",
    readingTime: 6,
  },
  {
    id: "4",
    title: "De voorjaarschecklist voor uw dak",
    slug: "voorjaarschecklist-dak",
    excerpt: "Voorjaar is de ideale tijd om uw dak te inspecteren.",
    content: "<p>Met het voorjaar in aantocht is het tijd om uw dak klaar te maken voor het nieuwe seizoen. Gebruik deze checklist:</p><ul><li>Controleer dakgoten op bladeren en vuil</li><li>Inspecteer dakpannen op scheuren</li><li>Bekijk het voegwerk</li><li>Controleer zolder op vochtplekken</li><li>Controleer schoorsteen en ventilatie</li></ul>",
    featuredImage: "/images/dakdekker/services/gutter-cleaning.jpg",
    category: "onderhoudstips",
    tags: ["onderhoud", "voorjaar", "checklist"],
    publishedAt: "2024-01-28",
    author: "Peter van der Berg",
    readingTime: 4,
  },
  {
    id: "5",
    title: "Zonnepanelen op uw dak: wat moet u weten?",
    slug: "zonnepanelen-dak",
    excerpt: "Overweegt u zonnepanelen? Wij vertellen u alles.",
    content: "<p>Zonnepanelen zijn een uitstekende investering. Voordat u ze laat plaatsen, is het belangrijk om uw dak te laten inspecteren. Het dak moet in goede staat zijn en minimaal 10 jaar mee kunnen.</p><h2>Wat moet u controleren?</h2><ul><li>Leeftijd en staat van het dak</li><li>Draagkracht van de dakconstructie</li><li>Orientatie van het dak (zuid is optimaal)</li><li>Eventuele schaduw van bomen of gebouwen</li></ul>",
    featuredImage: "/images/dakdekker/services/solar-roof.jpg",
    category: "energiebesparing",
    tags: ["zonnepanelen", "duurzaamheid", "renovatie"],
    publishedAt: "2024-01-20",
    author: "Marieke Jansen",
    readingTime: 8,
  },
  {
    id: "6",
    title: "Hoe vaak moet u uw dak laten inspecteren?",
    slug: "dakinspectie-frequentie",
    excerpt: "Regelmatige dakinspectie voorkomt verrassingen.",
    content: "<p>Wij raden aan om minimaal eenmaal per jaar uw dak te laten inspecteren, bij voorkeur in het voorjaar. Na hevige stormen of extreme weersomstandigheden is een extra controle aan te raden.</p><h2>Wat kost een dakinspectie?</h2><p>Bij Dakwerken Van der Berg is de eerste dakinspectie altijd gratis. Wij maken foto's en een rapport van de staat van uw dak.</p>",
    featuredImage: "/images/dakdekker/projects/detail-work.jpg",
    category: "onderhoudstips",
    tags: ["onderhoud", "inspectie", "preventie"],
    publishedAt: "2024-01-15",
    author: "Peter van der Berg",
    readingTime: 5,
  },
];

const categories: Record<BlogCategory, { label: string; color: string }> = {
  onderhoudstips: { label: "Onderhoudstips", color: "bg-green-500" },
  stormschade: { label: "Stormschade", color: "bg-red-500" },
  materialen: { label: "Materialen", color: "bg-amber-500" },
  energiebesparing: { label: "Energiebesparing", color: "bg-sky-500" },
  nieuws: { label: "Nieuws", color: "bg-storm-gray" },
};

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Artikel niet gevonden",
    };
  }
  return {
    title: `${post.title} | Dakwerken Van der Berg`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const category = categories[post.category];

  return (
    <main className="min-h-screen bg-cloud-white">
      {/* Header */}
      <header className="bg-white border-b border-storm-gray/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-safety-orange flex items-center justify-center rounded-lg">
                <span className="font-heading font-bold text-white">VdB</span>
              </div>
              <div>
                <div className="font-heading font-bold text-storm-gray text-sm">Dakwerken</div>
                <div className="text-storm-gray/50 text-xs">Van der Berg</div>
              </div>
            </Link>
            <Link href="/dakenkennis/" className="text-storm-gray/60 hover:text-storm-gray transition-colors">
              ← Terug naar kennisbank
            </Link>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <section className="bg-storm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div>
            {/* Category */}
            <Link
              href={`/dakenkennis/?category=${post.category}`}
              className={`inline-block px-4 py-2 ${category.color} text-white text-sm font-medium rounded-full mb-6`}
            >
              {category.label}
            </Link>

            {/* Title */}
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.publishedAt).toLocaleDateString("nl-NL")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readingTime} min leestijd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div>
          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-storm-gray prose-p:text-storm-gray/80 prose-strong:text-storm-gray prose-li:text-storm-gray/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-storm-gray/10">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-storm-gray/40" />
              <span className="font-semibold text-storm-gray">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-storm-gray/5 text-storm-gray/70 rounded-full text-sm hover:bg-storm-gray/10 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 pt-8 border-t border-storm-gray/10">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-storm-gray">Delen:</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles / CTA */}
      <section className="bg-storm-gray/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-storm-gray mb-4">
            Heeft u vragen over dit onderwerp?
          </h2>
          <p className="text-storm-gray/70 mb-8">
            Onze dakdekkers staan voor u klaar met persoonlijk advies.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-safety-orange text-white font-heading font-bold rounded-xl hover:bg-safety-orange/90 transition-colors"
          >
            Neem contact op
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-slate py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Dakwerken Van der Berg. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-white/40 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/dakenkennis/" className="text-white/40 hover:text-white transition-colors">
                Kennisbank
              </Link>
              <Link href="/#contact" className="text-white/40 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
