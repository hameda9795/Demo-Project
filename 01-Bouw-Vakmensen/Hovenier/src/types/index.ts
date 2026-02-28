export interface Project {
  id: string;
  title: string;
  category: 'stadstuin' | 'villa' | 'bedrijfstuin' | 'dakterras';
  image: string;
  description: string;
  location: string;
}

export interface Plant {
  id: string;
  name: string;
  latinName: string;
  image: string;
  sunExposure: 'zon' | 'halfschaduw' | 'schaduw';
  waterNeeds: 'laag' | 'gemiddeld' | 'hoog';
  seasonColor: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: number;
}

export interface GardenDesign {
  type: 'stadstuin' | 'villa' | 'bedrijfstuin';
  style: 'modern' | 'landelijk' | 'mediterraans' | 'ecologisch';
  features: string[];
}

export type Season = 'lente' | 'zomer' | 'herfst' | 'winter';

export interface MaintenanceTask {
  month: string;
  season: Season;
  tasks: string[];
  tip: string;
}
