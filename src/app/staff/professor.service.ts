// professor.service.ts
import { Injectable } from '@angular/core';
import { Professor } from './professor.model';
import { PROFS } from '../shared/data/staff';
@Injectable({ providedIn: 'root' })
export class ProfessorService {
   private professors: Professor[] = PROFS;
    

  getProfessors(): Professor[] {
    return [...this.professors];
  }
}
