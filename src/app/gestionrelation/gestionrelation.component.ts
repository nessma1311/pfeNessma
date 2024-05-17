import { Component, OnDestroy } from '@angular/core';
import { GestionRelationService } from '../service/gestionrelation.service';
import { Subscription } from 'rxjs';
import { AddrelationRequest } from '../Models/add-relation-request.model';

@Component({
  selector: 'app-gestionrelation',
  templateUrl: './gestionrelation.component.html',
  styleUrls: ['./gestionrelation.component.scss']
})
export class GestionrelationComponent implements OnDestroy {
  model: AddrelationRequest = {
    relation_id: 0,
    nom_relation: '',
    date_creation: 0,
  };
  addgroupesubscribe: Subscription;
  groupId: any;
  groupName: any;
  groupType: any;
  selectedOption: string; // Ajout de la propriété pour ngModel
relations: any;

  constructor(private gestionRelationService: GestionRelationService) {}

  onFormSubmit() {
    this.addgroupesubscribe = this.gestionRelationService.AddrelationRequest(this.model).subscribe({
      next: (response: any) => {
        console.log('Création du relation réussie!');
        // Traitement supplémentaire si nécessaire
      },
      error: (error: any) => {
        console.error('Erreur lors de la création du relation', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.addgroupesubscribe?.unsubscribe();
  }

  addrelation() {
    console.log('Adding relation:', this.model);
    // Appeler votre service ici si nécessaire
  }
}
