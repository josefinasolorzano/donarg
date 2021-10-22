import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getProyecto(){
        return this.http.get('http://localhost:3001/Proyecto');
      }
    
}
