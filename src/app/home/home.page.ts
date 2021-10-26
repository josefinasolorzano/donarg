import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  HomeCards: any[] =Array(10);
public proyecto: any;
  constructor(private homeService: HomeService) {}

  ngOnInit(){
        this.homeService.getProyecto().subscribe(data =>{
          this.proyecto=data;
        })
      }

}
