// staff.ts
import { Component } from '@angular/core';
import { ProfessorService } from './professor.service';
import { Professor } from './professor.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './staff.html',
  styleUrls: ['./staff.css'],
})
export class Staff {
  professors: Professor[] = [];
  filteredProfessors: Professor[] = [];

  searchText: string = '';
  sortField: 'name' | 'subject' = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';

  // Pagination
  page: number = 1;
  pageSize: number = 3;

  constructor(private profService: ProfessorService) {
    this.professors = this.profService.getProfessors();
    this.filteredProfessors = [...this.professors];
  }

  filterAndSort() {
    // Filtre par nom ou matière
    this.filteredProfessors = this.professors.filter(p =>
      p.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      p.subject.toLowerCase().includes(this.searchText.toLowerCase())
    );

    // Tri
    this.filteredProfessors.sort((a, b) => {
      let fieldA = a[this.sortField].toLowerCase();
      let fieldB = b[this.sortField].toLowerCase();
      if (fieldA < fieldB) return this.sortDirection === 'asc' ? -1 : 1;
      if (fieldA > fieldB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    // Reset page
    this.page = 1;
  }

  nextPage() { if (this.page * this.pageSize < this.filteredProfessors.length) this.page++; }
  prevPage() { if (this.page > 1) this.page--; }
}
