import { Injectable } from '@angular/core';
import { AddapplicationRequest } from '../Models/add-application-request.model';

@Injectable({
  providedIn: 'root'
})
export class GestionApplicationService {
  AddapplicationRequest(model: AddapplicationRequest) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  // Méthode pour ajouter un application
  addapplication(model: AddapplicationRequest) {
    // Implémentez la logique pour ajouter un application ici
    console.log('Adding application:', model);
  }

  // Méthode pour effectuer une demande d'ajout de application
  addapplicationRequest(model: AddapplicationRequest) {
    // Implémentez la logique pour effectuer une demande d'ajout de application ici
    console.log('Requesting to add application:', model);
  }
}
