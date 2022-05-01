import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Consulta } from '../models/Consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultarService {

  private URL = "http://localhost:8080/listar";

  constructor(private http: HttpClient) { }

  public getMuseo(consulta: Consulta){
    return this.http.post<Consulta>(this.URL, consulta).subscribe(data => console.log(data));
  }
}
