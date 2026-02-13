import { Component } from '@angular/core';
import {Quiz} from '../shared/quiz/quiz';
import { CourseCard } from "../shared/course-card/course-card";
import { CourseCardData } from '../shared/course-card/course-card.model';
@Component({
  selector: 'app-content',
  imports: [Quiz, CourseCard],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
public mathsCard: CourseCardData = {
    title: 'Mathématiques',
    subtitle: '9ème Année | Comparaison et Ordre dans IR',
    level: '9 ème De base',
    themeColor: 'math',
    isLive: false,
    imageContent:'pi'
  };

  public physicsCard: CourseCardData = {
    title: 'Sciences Physiques',
    subtitle: '8ème Année | Le Voltmètre Numérique',
    level: '8 ème De base',
    themeColor: 'physics',
    isLive: false,
    imageContent:'pi'
  };

  // 3. (Optional but better) Define an array to display multiple cards
}
