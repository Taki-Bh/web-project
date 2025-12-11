// professor.service.ts
import { Injectable } from '@angular/core';
import { Professor } from './professor.model';

@Injectable({ providedIn: 'root' })
export class ProfessorService {
  private professors: Professor[] = [
    { id: 1, name: 'Dr. Sophie Martin', subject: 'Mathématiques', schedule: ['Lundi', 'Mercredi', 'Vendredi'], color: 'blue' },
    { id: 2, name: 'Prof. Ahmed Ben Ali', subject: 'Physique', schedule: ['Mardi', 'Jeudi'], color: 'purple' },
    { id: 3, name: 'Dr. Marie Dubois', subject: 'Chimie', schedule: ['Lundi', 'Mercredi'], color: 'green' },
    { id: 4, name: 'Prof. Karim Mansour', subject: 'Informatique', schedule: ['Mardi', 'Jeudi', 'Samedi'], color: 'orange' },
    { id: 5, name: 'Dr. Leila Trabelsi', subject: 'Biologie', schedule: ['Mercredi', 'Vendredi'], color: 'lime' },
    { id: 6, name: 'Prof. Jean Rousseau', subject: 'Anglais', schedule: ['Lundi', 'Mardi', 'Jeudi'], color: 'indigo' }
  ];

  getProfessors(): Professor[] {
    return [...this.professors];
  }
}
