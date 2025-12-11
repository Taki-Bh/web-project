// professor.service.ts
import { Injectable } from '@angular/core';
import { Professor } from './professor.model';
import { STAFF } from '../shared/data/staff';
@Injectable({ providedIn: 'root' })
export class ProfessorService {
   private professors: Professor[] = STAFF;
    

  getProfessors(): Professor[] {
    return [...this.professors];
  }
}
