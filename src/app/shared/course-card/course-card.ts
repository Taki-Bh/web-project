import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface pour structurer les données que le composant attend
export interface CourseCardData {
  title: string;          // Ex: "Mathématiques"
  subtitle: string;       // Ex: "9ème Année | Théorie des Ensembles"
  level: string;          // Ex: "9 ème De base"
  themeColor: 'math' | 'physics' | 'live'; // Pour le style
  isLive: boolean;        // Pour afficher le tag LIVE
}

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css'],
  imports : [CommonModule],
})
export class CourseCard{
  // Propriété d'entrée pour recevoir les données
  @Input() cardData!: CourseCardData;
  
  // Texte d'exemple pour le bas de la carte (vous pouvez ajuster cette logique)
  get fullCardText(): string {
    return `${this.cardData.title} | ${this.cardData.subtitle}`;
  }
}