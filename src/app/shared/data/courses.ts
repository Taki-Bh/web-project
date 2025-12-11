// Définition des types pour garantir la cohérence
type CourseLevel = 'Bac' | '3ème' | '2ème' | '1ère';
type CourseSection = 'Math' | 'Phy' | 'Chimie' | 'Informatique' | 'Economie';

export interface Course {
  level: CourseLevel;
  section: CourseSection;
  name: string;
  id: string;
}

export const COURSES: Course[] = [
  // --- NIVEAU BAC (Terminal) (4 entrées) ---
  {
    level: 'Bac',
    section: 'Math',
    name: 'Fonctions Exponentielles et Logarithmiques',
    id: 'bac-math-fel'
  },
  {
    level: 'Bac',
    section: 'Phy',
    name: 'Les Oscillations dans les Circuits RLC',
    id: 'bac-phy-rlc'
  },
  {
    level: 'Bac',
    section: 'Chimie',
    name: 'Réactions d\'Oxydoréduction et Titrage',
    id: 'bac-chi-ort'
  },
  {
    level: 'Bac',
    section: 'Economie',
    name: 'Théorie de la Croissance et Développment',
    id: 'bac-eco-tcd'
  },

  // --- NIVEAU 3ème Année (4 entrées) ---
  {
    level: '3ème',
    section: 'Math',
    name: 'Produit Scalaire dans le Plan et l\'Espace',
    id: '3eme-math-pspe'
  },
  {
    level: '3ème',
    section: 'Phy',
    name: 'Le Travail et l\'Énergie Mécanique',
    id: '3eme-phy-tem'
  },
  {
    level: '3ème',
    section: 'Chimie',
    name: 'Structure et Réactivité des Composés Organiques',
    id: '3eme-chi-srco'
  },
  {
    level: '3ème',
    section: 'Informatique',
    name: 'Introduction aux Bases de Données (SQL)',
    id: '3eme-info-sql'
  },

  // --- NIVEAU 2ème Année (4 entrées) ---
  {
    level: '2ème',
    section: 'Math',
    name: 'Dérivabilité, Tangentes et Variations de Fonctions',
    id: '2eme-math-dtvf'
  },
  {
    level: '2ème',
    section: 'Phy',
    name: 'Le Champ Électrostatique et Potentiel',
    id: '2eme-phy-ceep'
  },
  {
    level: '2ème',
    section: 'Chimie',
    name: 'Liaisons Chimiques et Géométrie des Molécules',
    id: '2eme-chi-lcgm'
  },
  {
    level: '2ème',
    section: 'Economie',
    name: 'Fonctionnement du Marché et Offre/Demande',
    id: '2eme-eco-fmod'
  },

  // --- NIVEAU 1ère Année (4 entrées) ---
  {
    level: '1ère',
    section: 'Math',
    name: 'Calcul Vectoriel et Repères du Plan',
    id: '1ere-math-cvrp'
  },
  {
    level: '1ère',
    section: 'Phy',
    name: 'Mouvements Rectilignes et Référentiels',
    id: '1ere-phy-mrr'
  },
  {
    level: '1ère',
    section: 'Chimie',
    name: 'Le Modèle Atomique et la Classification Périodique',
    id: '1ere-chi-macp'
  },
  {
    level: '1ère',
    section: 'Informatique',
    name: 'Programmation: Structures de Contrôle',
    id: '1ere-info-psc'
  },
];