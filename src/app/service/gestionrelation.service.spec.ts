import { Injectable } from '@angular/core';
import { AddrelationRequest } from '../Models/add-relation-request.model';

@Injectable({
  providedIn: 'root'
})
export class GestionRelationService {
  AddgroupeRequest(model: AddrelationRequest) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  // Méthode pour ajouter un relation
  addRelation(model: AddrelationRequest) {
    // Implémentez la logique pour ajouter un relation ici
    console.log('Adding group:', model);
  }

  // Méthode pour effectuer une demande d'ajout d'un relation
  addRelationRequest(model: AddrelationRequest) {
    // Implémentez la logique pour effectuer une demande d'ajout de relation ici
    console.log('Requesting to add relation:', model);
  }
}
