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
  
  categories: string[] = ['all', 'Programmation', 'Design', 'Marketing', 'Business', 'Data Science'];
  
  allArticles: Article[] = [
    {
      id: 1,
      title: 'Introduction à Angular',
      description: 'Découvrez les bases du framework Angular et comment créer votre première application web moderne.',
      category: 'Programmation',
      author: 'Marie Dupont',
      date: new Date('2024-11-15'),
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      readTime: '8 min'
    },
    {
      id: 2,
      title: 'Les principes du Design UI/UX',
      description: 'Apprenez les fondamentaux du design d\'interface et d\'expérience utilisateur pour créer des applications intuitives.',
      category: 'Design',
      author: 'Thomas Martin',
      date: new Date('2024-11-10'),
      imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
      readTime: '12 min'
    },
    {
      id: 3,
      title: 'Marketing Digital en 2024',
      description: 'Les stratégies essentielles pour réussir votre marketing digital et atteindre vos objectifs commerciaux.',
      category: 'Marketing',
      author: 'Sophie Bernard',
      date: new Date('2024-11-05'),
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      readTime: '10 min'
    },
    {
      id: 4,
      title: 'TypeScript: Guide complet',
      description: 'Maîtrisez TypeScript et ses fonctionnalités avancées pour écrire du code JavaScript plus robuste.',
      category: 'Programmation',
      author: 'Pierre Leroy',
      date: new Date('2024-11-20'),
      imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop',
      readTime: '15 min'
    },
    {
      id: 5,
      title: 'Entrepreneuriat moderne',
      description: 'Comment lancer et développer votre startup dans l\'écosystème entrepreneurial actuel.',
      category: 'Business',
      author: 'Julie Petit',
      date: new Date('2024-11-18'),
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop',
      readTime: '11 min'
    },
    {
      id: 6,
      title: 'Introduction au Machine Learning',
      description: 'Découvrez les concepts fondamentaux du machine learning et leurs applications pratiques.',
      category: 'Data Science',
      author: 'Ahmed Benali',
      date: new Date('2024-11-12'),
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      readTime: '14 min'
    },
    {
      id: 7,
      title: 'Responsive Design avec CSS Grid',
      description: 'Créez des layouts modernes et responsives en utilisant CSS Grid et Flexbox.',
      category: 'Design',
      author: 'Laura Garcia',
      date: new Date('2024-11-08'),
      imageUrl: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=400&h=250&fit=crop',
      readTime: '9 min'
    },
    {
      id: 8,
      title: 'SEO: Optimisation pour 2024',
      description: 'Les dernières techniques d\'optimisation SEO pour améliorer votre visibilité sur les moteurs de recherche.',
      category: 'Marketing',
      author: 'Marc Dubois',
      date: new Date('2024-11-22'),
      imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop',
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