import { properties } from "@/lib/data";
import PropertyDetailClient from "./PropertyDetailClient";

// Generate static paths for all properties
export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

interface PageProps {
  params: { id: string };
}

export default function PropertyDetailPage({ params }: PageProps) {
  return <PropertyDetailClient id={params.id} />;
}
