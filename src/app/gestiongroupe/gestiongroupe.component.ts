import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GestionGroupeService } from '../service/gestiongroupe.service';
import { AddgroupeRequest } from '../Models/add-groupe-request.model';

@Component({
  selector: 'app-gestiongroupe',
  templateUrl: './gestiongroupe.component.html',
  styleUrls: ['./gestiongroupe.component.css']
})
export class GestiongroupeComponent implements OnDestroy {
  model: AddgroupeRequest = {
    id_groupe: 0,
    nom_groupe: '',
    type_groupe: 0,
  };
  addgroupesubscribe: Subscription; // Correction de la variable
  groupId: any;
  groupName: any;
  groupType: any;

  constructor(private gestionGroupeService: GestionGroupeService) {}

  onFormSubmit() {
    this.addgroupesubscribe = this.gestionGroupeService.AddgroupeRequest(this.model).subscribe({
      next: (response: any) => {
        console.log('Création du groupe réussie!');
        // Vous pouvez ajouter un traitement supplémentaire ici, si nécessaire
      },
      error: (error: any) => {
        console.error('Erreur lors de la création du groupe', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.addgroupesubscribe?.unsubscribe();
  }

  // Méthode pour ajouter un groupe
  addGroupe() {
    // Implémentez la logique pour ajouter un groupe ici
    console.log('Adding group:', this.model);
    // Vous pouvez appeler votre service ici si nécessaire
  }
}
