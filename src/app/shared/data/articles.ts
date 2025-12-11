export interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  instructorId: number;
  date: Date;
  imageUrl: string;
  readTime: string;
  content?: string;
}

export const ARTICLES_DATA: Article[] = [
  {
    id: 1,
    title: 'Les Fonctions Exponentielles',
    description: 'Comprendre les propriétés et applications des fonctions exponentielles avec des exercices pratiques et des méthodes de résolution.',
    category: 'Mathématiques',
    instructorId: 101, // Dr. Mouaddeb Ghazi
    date: new Date('2024-11-20'),
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
    readTime: '12 min',
    content: `
      <h2>Introduction aux Fonctions Exponentielles</h2>
      <p>Les fonctions exponentielles sont des fonctions fondamentales en mathématiques, définies par f(x) = a^x où a est une constante positive différente de 1.</p>
      
      <h3>Propriétés principales</h3>
      <ul>
        <li>Croissance rapide pour a > 1</li>
        <li>Décroissance pour 0 < a < 1</li>
        <li>Passage par le point (0, 1)</li>
        <li>Asymptote horizontale y = 0</li>
      </ul>
      
      <h3>Applications</h3>
      <p>Les fonctions exponentielles modélisent de nombreux phénomènes naturels : croissance démographique, désintégration radioactive, intérêts composés...</p>
    `
  },
  {
    id: 2,
    title: 'La Photosynthèse et Respiration Cellulaire',
    description: 'Découvrez les processus biologiques essentiels qui permettent aux êtres vivants de produire et utiliser l\'énergie.',
    category: 'Sciences Expérimentales',
    instructorId: 105, // Dr. Leila Trabelsi - Biologie
    date: new Date('2024-11-18'),
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=250&fit=crop',
    readTime: '15 min',
    content: `
      <h2>La Photosynthèse</h2>
      <p>La photosynthèse est le processus par lequel les plantes convertissent l'énergie lumineuse en énergie chimique.</p>
      
      <h3>Équation générale</h3>
      <p>6 CO₂ + 6 H₂O + lumière → C₆H₁₂O₆ + 6 O₂</p>
      
      <h3>La Respiration Cellulaire</h3>
      <p>Processus inverse qui libère l'énergie stockée dans le glucose pour produire de l'ATP.</p>
    `
  },
  {
    id: 3,
    title: 'Tech . Web et Multimédia',
    description: 'Apprenez le framework de Angular : Routing, Reactive Forms, Services.',
    category: 'Sciences Informatiques',
    instructorId: 104, // Prof. Mohamed LASSOUED - Informatique
    date: new Date('2024-11-22'),
    imageUrl: 'https://images.unsplash.com/photo-1699885960867-56d5f5262d38?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    readTime: '10 min',
    content: `
      <h2>Les Algorithmes de Tri</h2>
      <p>Le tri est une opération fondamentale en informatique qui consiste à organiser des données selon un ordre défini.</p>
      
      <h3>Tri à Bulles</h3>
      <p>Complexité : O(n²) - Simple mais inefficace pour de grandes listes.</p>
      
      <h3>Tri Rapide (Quick Sort)</h3>
      <p>Complexité moyenne : O(n log n) - L'un des algorithmes les plus efficaces.</p>
    `
  },
  {
    id: 4,
    title: 'L\'Argumentation dans le Texte Littéraire',
    description: 'Maîtrisez les techniques d\'argumentation et analysez les stratégies persuasives dans les textes classiques et modernes.',
    category: 'Français',
    instructorId: 114, // Prof. Lucas Bernard - Littérature Française
    date: new Date('2024-11-15'),
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=250&fit=crop',
    readTime: '14 min',
    content: `
      <h2>L'Art de l'Argumentation</h2>
      <p>L'argumentation est l'art de convaincre et persuader à travers le discours.</p>
      
      <h3>Les Types d'Arguments</h3>
      <ul>
        <li>Arguments logiques et rationnels</li>
        <li>Arguments d'autorité</li>
        <li>Arguments par l'exemple</li>
        <li>Arguments affectifs</li>
      </ul>
    `
  },
  {
    id: 5,
    title: 'الأدب العربي في العصر العباسي',
    description: 'دراسة شاملة للأدب العربي في العصر العباسي مع التركيز على أهم الشعراء والكتاب وخصائص هذا العصر الذهبي.',
    category: 'Arabe',
    instructorId: 123, // Dr. Amel Cherif - Arabe Classique
    date: new Date('2024-11-17'),
    imageUrl: 'https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=400&h=250&fit=crop',
    readTime: '13 min',
    content: `
      <h2>العصر العباسي الذهبي</h2>
      <p>يعتبر العصر العباسي من أزهى عصور الأدب العربي حيث ازدهرت الثقافة والعلوم.</p>
      
      <h3>أهم الشعراء</h3>
      <ul>
        <li>أبو نواس</li>
        <li>البحتري</li>
        <li>أبو تمام</li>
        <li>المتنبي</li>
      </ul>
    `
  },
  {
    id: 6,
    title: 'La Conscience et l\'Inconscient',
    description: 'Exploration philosophique de la conscience selon Freud, Descartes et les philosophes contemporains.',
    category: 'Philosophie',
    instructorId: 109, // Dr. Claire Dupont - Philosophie
    date: new Date('2024-11-12'),
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop',
    readTime: '16 min',
    content: `
      <h2>La Conscience</h2>
      <p>Descartes définit la conscience comme "la connaissance immédiate de nos pensées".</p>
      
      <h3>L'Inconscient selon Freud</h3>
      <p>Freud révolutionne la psychologie en découvrant l'inconscient, partie cachée de notre psychisme.</p>
    `
  },
  {
    id: 7,
    title: 'Les Limites et Continuité',
    description: 'Étude approfondie des limites de fonctions, continuité et applications aux calculs de dérivées.',
    category: 'Mathématiques',
    instructorId: 134, // Prof. Tarek Hachicha - Mathématiques
    date: new Date('2024-11-25'),
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=250&fit=crop',
    readTime: '11 min',
    content: `
      <h2>Les Limites de Fonctions</h2>
      <p>Une limite décrit le comportement d'une fonction lorsque la variable s'approche d'une valeur donnée.</p>
      
      <h3>Continuité</h3>
      <p>Une fonction est continue en un point si elle n'a pas de "saut" en ce point.</p>
    `
  },
  {
    id: 8,
    title: 'Les Réactions Chimiques Redox',
    description: 'Comprendre les réactions d\'oxydoréduction, équilibrer les équations et résoudre les exercices types du baccalauréat.',
    category: 'Sciences Expérimentales',
    instructorId: 103, // Dr. Marie Dubois - Chimie
    date: new Date('2024-11-19'),
    imageUrl: 'https://images.unsplash.com/photo-1532634993-15f421e42ec0?w=400&h=250&fit=crop',
    readTime: '12 min',
    content: `
      <h2>Oxydoréduction</h2>
      <p>Les réactions redox impliquent un transfert d'électrons entre espèces chimiques.</p>
      
      <h3>Règles d'équilibrage</h3>
      <p>Conservation de la masse et de la charge électrique.</p>
    `
  },
  {
    id: 9,
    title: 'Les Bases de Données Relationnelles',
    description: 'Introduction au modèle relationnel, langage SQL et conception de bases de données avec des exemples pratiques.',
    category: 'Sciences Informatiques',
    instructorId: 129, // Dr. Zied Boughanmi - Informatique
    date: new Date('2024-11-21'),
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
    readTime: '14 min',
    content: `
      <h2>Les Bases de Données</h2>
      <p>Une base de données relationnelle organise les données en tables liées entre elles.</p>
      
      <h3>Le langage SQL</h3>
      <p>SELECT, INSERT, UPDATE, DELETE - Les commandes essentielles.</p>
    `
  },
  {
    id: 10,
    title: 'La Seconde Guerre Mondiale',
    description: 'Analyse des causes, déroulement et conséquences de la Seconde Guerre mondiale avec chronologie détaillée.',
    category: 'Histoire-Géographie',
    instructorId: 107, // Dr. Nadia Ben Salem - Histoire
    date: new Date('2024-11-16'),
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    readTime: '18 min',
    content: `
      <h2>La Seconde Guerre Mondiale (1939-1945)</h2>
      <p>Le conflit le plus meurtrier de l'histoire de l'humanité.</p>
      
      <h3>Chronologie</h3>
      <ul>
        <li>1939 : Invasion de la Pologne</li>
        <li>1944 : Débarquement en Normandie</li>
        <li>1945 : Fin de la guerre</li>
      </ul>
    `
  },
  {
    id: 11,
    title: 'Le Romantisme Français',
    description: 'Découvrez le mouvement romantique en France à travers les œuvres de Victor Hugo, Lamartine et Musset.',
    category: 'Français',
    instructorId: 136, // Prof. Noureddine Jlassi - Littérature Comparée
    date: new Date('2024-11-14'),
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
    readTime: '13 min',
    content: `
      <h2>Le Romantisme</h2>
      <p>Mouvement littéraire et artistique du XIXe siècle privilégiant l'expression des sentiments.</p>
      
      <h3>Caractéristiques</h3>
      <ul>
        <li>Exaltation du moi et des sentiments</li>
        <li>Culte de la nature</li>
        <li>Fascination pour l'histoire</li>
      </ul>
    `
  },
  {
    id: 12,
    title: 'English Grammar: Conditional Sentences',
    description: 'Master the four types of conditional sentences with clear explanations, examples, and practice exercises.',
    category: 'Anglais',
    instructorId: 106, // Prof. Jean Rousseau - Anglais
    date: new Date('2024-11-23'),
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=250&fit=crop',
    readTime: '10 min',
    content: `
      <h2>Conditional Sentences</h2>
      <p>Conditionals express hypothetical situations and their consequences.</p>
      
      <h3>Types</h3>
      <ul>
        <li>Zero conditional: General truths</li>
        <li>First conditional: Real future possibilities</li>
        <li>Second conditional: Unreal present situations</li>
        <li>Third conditional: Unreal past situations</li>
      </ul>
    `
  },
  {
    id: 13,
    title: 'النحو العربي: الجملة الفعلية',
    description: 'شرح مفصل للجملة الفعلية وأركانها مع أمثلة تطبيقية وتمارين محلولة لطلاب الباكالوريا.',
    category: 'Arabe',
    instructorId: 123, // Dr. Amel Cherif - Arabe Classique
    date: new Date('2024-11-13'),
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop',
    readTime: '11 min',
    content: `
      <h2>الجملة الفعلية</h2>
      <p>الجملة الفعلية هي التي تبدأ بفعل.</p>
      
      <h3>أركان الجملة الفعلية</h3>
      <ul>
        <li>الفعل</li>
        <li>الفاعل</li>
        <li>المفعول به (في الجملة المتعدية)</li>
      </ul>
    `
  },
  {
    id: 14,
    title: 'La Liberté selon Sartre',
    description: 'Analyse de la conception existentialiste de la liberté chez Jean-Paul Sartre et ses implications morales.',
    category: 'Philosophie',
    instructorId: 109, // Dr. Claire Dupont - Philosophie
    date: new Date('2024-11-11'),
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=250&fit=crop',
    readTime: '15 min',
    content: `
      <h2>La Liberté Existentialiste</h2>
      <p>Pour Sartre, l'homme est "condamné à être libre".</p>
      
      <h3>Concepts clés</h3>
      <ul>
        <li>L'existence précède l'essence</li>
        <li>La mauvaise foi</li>
        <li>La responsabilité totale</li>
      </ul>
    `
  },
  {
    id: 15,
    title: 'Les Suites Numériques',
    description: 'Étude complète des suites arithmétiques, géométriques et récurrentes avec méthodes de résolution.',
    category: 'Mathématiques',
    instructorId: 141, // Dr. Wajih Gharbi - Mathématiques
    date: new Date('2024-11-24'),
    imageUrl: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&h=250&fit=crop',
    readTime: '13 min',
    content: `
      <h2>Les Suites Numériques</h2>
      <p>Une suite est une fonction définie sur les entiers naturels.</p>
      
      <h3>Types de suites</h3>
      <ul>
        <li>Suite arithmétique : u(n+1) = u(n) + r</li>
        <li>Suite géométrique : u(n+1) = u(n) × q</li>
        <li>Suite récurrente</li>
      </ul>
    `
  }
];