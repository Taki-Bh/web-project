// professor.model.ts
export interface Professor {
  id: number;
  name: string;
  subject: string;
  schedule: string[]; // jours en direct
  color: string;      // pour l’avatar et header
}
