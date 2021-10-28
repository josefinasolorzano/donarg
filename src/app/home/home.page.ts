import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  HomeCards: any[] =Array(2);
public proyecto: any;
  constructor(private homeService: HomeService) {}

  ngOnInit(){
        this.homeService.getProyecto().subscribe(data =>{
          this.proyecto=data;
        })
      }


    loadData(event) {
      setTimeout(() => {
        console.log('Done');

        var masHomeCards = Array(2);
        this.HomeCards.push(...masHomeCards);
        event.target.complete();
  
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        //if (data.length == 1000) {
        //  event.target.disabled = true;
        //}
      }, 2000);
    }  
}
