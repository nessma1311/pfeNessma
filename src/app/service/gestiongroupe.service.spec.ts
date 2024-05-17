import { Injectable } from '@angular/core';
import { AddgroupeRequest } from '../Models/add-groupe-request.model';

@Injectable({
  providedIn: 'root'
})
export class GestionGroupeService {
  AddgroupeRequest(model: AddgroupeRequest) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  // Méthode pour ajouter un groupe
  addGroupe(model: AddgroupeRequest) {
    // Implémentez la logique pour ajouter un groupe ici
    console.log('Adding group:', model);
  }

  // Méthode pour effectuer une demande d'ajout de groupe
  addGroupeRequest(model: AddgroupeRequest) {
    // Implémentez la logique pour effectuer une demande d'ajout de groupe ici
    console.log('Requesting to add group:', model);
  }
}
