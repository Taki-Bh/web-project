import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  date: Date;
  imageUrl: string;
  readTime: string;
}

@Component({
  selector: 'app-articles',
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  searchTerm: string = '';
  selectedCategory: string = 'all';
  
  categories: string[] = ['all', 'Mathématiques', 'Sciences Expérimentales', 'Sciences Informatiques', 'Français', 'Arabe', 'Philosophie', 'Histoire-Géographie', 'Anglais'];
  
  allArticles: Article[] = [
    {
      id: 1,
      title: 'Les Fonctions Exponentielles',
      description: 'Comprendre les propriétés et applications des fonctions exponentielles avec des exercices pratiques et des méthodes de résolution.',
      category: 'Mathématiques',
      author: 'Prof. Ahmed Mansour',
      date: new Date('2024-11-20'),
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
      readTime: '12 min'
    },
    {
      id: 2,
      title: 'La Photosynthèse et Respiration Cellulaire',
      description: 'Découvrez les processus biologiques essentiels qui permettent aux êtres vivants de produire et utiliser l\'énergie.',
      category: 'Sciences Expérimentales',
      author: 'Prof. Leila Ben Salah',
      date: new Date('2024-11-18'),
      imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=250&fit=crop',
      readTime: '15 min'
    },
    {
      id: 3,
      title: 'Introduction aux Algorithmes de Tri',
      description: 'Apprenez les algorithmes de tri classiques : tri à bulles, tri par insertion, et tri rapide avec des exemples en Python.',
      category: 'Sciences Informatiques',
      author: 'Prof. Karim Abdelli',
      date: new Date('2024-11-22'),
      imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
      readTime: '10 min'
    },
    {
      id: 4,
      title: 'L\'Argumentation dans le Texte Littéraire',
      description: 'Maîtrisez les techniques d\'argumentation et analysez les stratégies persuasives dans les textes classiques et modernes.',
      category: 'Français',
      author: 'Prof. Sophie Mercier',
      date: new Date('2024-11-15'),
      imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=250&fit=crop',
      readTime: '14 min'
    },
    {
      id: 5,
      title: 'الأدب العربي في العصر العباسي',
      description: 'دراسة شاملة للأدب العربي في العصر العباسي مع التركيز على أهم الشعراء والكتاب وخصائص هذا العصر الذهبي.',
      category: 'Arabe',
      author: 'Prof. محمد الصادق',
      date: new Date('2024-11-17'),
      imageUrl: 'https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=400&h=250&fit=crop',
      readTime: '13 min'
    },
    {
      id: 6,
      title: 'La Conscience et l\'Inconscient',
      description: 'Exploration philosophique de la conscience selon Freud, Descartes et les philosophes contemporains.',
      category: 'Philosophie',
      author: 'Prof. Jean-Paul Dubois',
      date: new Date('2024-11-12'),
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop',
      readTime: '16 min'
    },
    {
      id: 7,
      title: 'Les Limites et Continuité',
      description: 'Étude approfondie des limites de fonctions, continuité et applications aux calculs de dérivées.',
      category: 'Mathématiques',
      author: 'Prof. Nadia Trabelsi',
      date: new Date('2024-11-25'),
      imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=250&fit=crop',
      readTime: '11 min'
    },
    {
      id: 8,
      title: 'Les Réactions Chimiques Redox',
      description: 'Comprendre les réactions d\'oxydoréduction, équilibrer les équations et résoudre les exercices types du baccalauréat.',
      category: 'Sciences Expérimentales',
      author: 'Prof. Fatma Gharbi',
      date: new Date('2024-11-19'),
      imageUrl: 'https://images.unsplash.com/photo-1532634993-15f421e42ec0?w=400&h=250&fit=crop',
      readTime: '12 min'
    },
    {
      id: 9,
      title: 'Les Bases de Données Relationnelles',
      description: 'Introduction au modèle relationnel, langage SQL et conception de bases de données avec des exemples pratiques.',
      category: 'Sciences Informatiques',
      author: 'Prof. Youssef Hamdi',
      date: new Date('2024-11-21'),
      imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
      readTime: '14 min'
    },
    {
      id: 10,
      title: 'La Seconde Guerre Mondiale',
      description: 'Analyse des causes, déroulement et conséquences de la Seconde Guerre mondiale avec chronologie détaillée.',
      category: 'Histoire-Géographie',
      author: 'Prof. Marc Rousseau',
      date: new Date('2024-11-16'),
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
      readTime: '18 min'
    },
    {
      id: 11,
      title: 'Le Romantisme Français',
      description: 'Découvrez le mouvement romantique en France à travers les œuvres de Victor Hugo, Lamartine et Musset.',
      category: 'Français',
      author: 'Prof. Claire Bernard',
      date: new Date('2024-11-14'),
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
      readTime: '13 min'
    },
    {
      id: 12,
      title: 'English Grammar: Conditional Sentences',
      description: 'Master the four types of conditional sentences with clear explanations, examples, and practice exercises.',
      category: 'Anglais',
      author: 'Prof. Sarah Johnson',
      date: new Date('2024-11-23'),
      imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=250&fit=crop',
      readTime: '10 min'
    },
    {
      id: 13,
      title: 'النحو العربي: الجملة الفعلية',
      description: 'شرح مفصل للجملة الفعلية وأركانها مع أمثلة تطبيقية وتمارين محلولة لطلاب الباكالوريا.',
      category: 'Arabe',
      author: 'Prof. أمينة الزهراء',
      date: new Date('2024-11-13'),
      imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop',
      readTime: '11 min'
    },
    {
      id: 14,
      title: 'La Liberté selon Sartre',
      description: 'Analyse de la conception existentialiste de la liberté chez Jean-Paul Sartre et ses implications morales.',
      category: 'Philosophie',
      author: 'Prof. Pierre Lefebvre',
      date: new Date('2024-11-11'),
      imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=250&fit=crop',
      readTime: '15 min'
    },
    {
      id: 15,
      title: 'Les Suites Numériques',
      description: 'Étude complète des suites arithmétiques, géométriques et récurrentes avec méthodes de résolution.',
      category: 'Mathématiques',
      author: 'Prof. Riadh Maalej',
      date: new Date('2024-11-24'),
      imageUrl: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&h=250&fit=crop',
      readTime: '13 min'
    }
  ];

  get filteredArticles(): Article[] {
    return this.allArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           article.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           article.author.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = this.selectedCategory === 'all' || article.category === this.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }

  onSearchChange(term: string): void {
    this.searchTerm = term;
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}