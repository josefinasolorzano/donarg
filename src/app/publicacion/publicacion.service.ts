import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  constructor(private http: HttpClient) {}
  cargardatos(datos) {
    console.log('info ', datos);
    return this.http.post('http://localhost:3001/CargarProyecto', { datos });
  }
}
