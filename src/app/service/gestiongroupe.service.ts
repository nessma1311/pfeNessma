import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddgroupeRequest } from '../Models/add-groupe-request.model'; // Assurez-vous que le chemin d'accès au modèle est correct
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionGroupeService {

  constructor(private http: HttpClient) { }
  
  AddgroupeRequest(model: AddgroupeRequest): Observable<any> {
    return this.http.post<any>('http://localhost:5007/api/Groupe/api/addgroupe', model); // Assurez-vous que l'URL est correcte
  }
}
