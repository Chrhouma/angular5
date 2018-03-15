import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';
import {_document} from '@angular/platform-browser/src/browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  lat: number = 15.2667153;
  lng: number = 17.9227905951;
  oki:  string = '0021695484735';
 devices: any;
  goaltext: string = 'find by name';
  goals = [];
  slecteType: string = '';
    btnText: string = 'Search';
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    //  this._data.goal.subscribe(res => this.goals = res);
    this.httpClient.get('http://localhost:8080/projet_WOT/objets/temperature')
    .subscribe(devices => {
        console.log(devices);
        this.devices = devices

      }
  );

      }



    // methode qui perme de savoir le type de mesure choisi
  selectTypeMesure(event: any) {
    this.slecteType = event.target.value;
   // document.location.href = '/objets/' + this.slecteType;
     this.router.navigate(['/objets/' + this.slecteType]);
   console.log(this.slecteType);

  }
   searchBytemperature(){
     document.location.href = '/objets/temperature';
  }
}
