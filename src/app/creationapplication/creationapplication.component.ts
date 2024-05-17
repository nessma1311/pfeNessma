import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creationapplication',
  templateUrl: './creationapplication.component.html',
  styleUrls: ['./creationapplication.component.scss']
})
export class CreationapplicationComponent implements OnInit {
  fonctionnalites: any;
  segmentClient: any;
  nomApplication: any;

  constructor() { }

  ngOnInit(): void {
  }

  ajouterApplication() {
    // Implémentez votre logique pour ajouter une application ici
    console.log('Ajout de l\'application...');
  }

  ajouterFonctionnalite() {
    // Implémentez votre logique pour ajouter une fonctionnalité ici
    console.log('Ajout de la fonctionnalité...');
  }
}
