import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddrelationRequest } from '../Models/add-relation-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionRelationService {
  AddgroupeRequest(model: AddrelationRequest) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  
  AddrelationRequest(model: AddrelationRequest): Observable<any> {
    return this.http.post<any>('http://localhost:5007/api/Relation/addrelation', model); // Assurez-vous que l'URL est correcte
  }
}
