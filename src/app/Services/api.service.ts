import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getAllCars(): Observable<any>{
    //let url = "https://multimarca.gruporivero.com/api/inventory/used/all";
    let url = "https://multimarca.gruporivero.com/api/v1/inventory/used/all";
    return this.http.get<any>(url);
  }
}
