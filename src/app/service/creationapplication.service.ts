import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddapplicationRequest } from '../Models/add-application-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionApplicationService {

  constructor(private http: HttpClient) { }
  
  AddgroupeRequest(model: AddapplicationRequest): Observable<any> {
    return this.http.post<any>('http://localhost:5007/api/Application/api/addapplication', model); // Assurez-vous que l'URL est correcte
  }
}
