import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Article, ARTICLES_DATA } from '../shared/data/articles';
import { PROFS } from '../shared/data/staff';

@Component({
  selector: 'app-articles',
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  searchTerm: string = '';
  selectedCategory: string = 'all';
  selectedArticle: Article | null = null;
  showArticleModal: boolean = false;
  
  categories: string[] = ['all', 'Mathématiques', 'Sciences Expérimentales', 'Sciences Informatiques', 'Français', 'Arabe', 'Philosophie', 'Histoire-Géographie', 'Anglais'];
  
  allArticles: Article[] = ARTICLES_DATA;
  professors = PROFS;

  getProfessorName(instructorId: number): string {
    const prof = this.professors.find(p => p.id === instructorId);
    return prof ? prof.name : 'Unknown';
  }

  get filteredArticles(): Article[] {
    return this.allArticles.filter(article => {
      const professorName = this.getProfessorName(article.instructorId);
      const matchesSearch = article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           article.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           professorName.toLowerCase().includes(this.searchTerm.toLowerCase());
      
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

  openArticle(article: Article): void {
    this.selectedArticle = article;
    this.showArticleModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeArticle(): void {
    this.showArticleModal = false;
    this.selectedArticle = null;
    document.body.style.overflow = 'auto';
  }
}