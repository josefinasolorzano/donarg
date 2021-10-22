import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public nombre: any;
  constructor(private homeService: HomeService) {}

  ngOnInit(){
        this.homeService.getProyecto().subscribe(data =>{
          //console.log(data);
          this.nombre=data[0].Nombre;
        })
      }

}
