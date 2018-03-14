import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import { DataService } from '../data.service';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
            animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), {optional: true}),
                query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({ opacity: 10, transform: 'translateY(75%)', offset: 1 }),
          ]))]), {optional: true})
              ])
    ])
   ]
  })
export class HomeComponent implements OnInit {
itemCount: number = 4;
  btnText: string = 'Search';
  goaltext: string = 'find by name';
  goals = [];
  slecteType: string = '';
  
  devices: any;
  constructor(private _data: DataService, private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      }



  // methode qui perme de savoir le type de mesure choisi
  selectTypeMesure(event: any) {
    this.slecteType = event.target.value;
    document.location.href = '/objets/' + this.slecteType;
   console.log(this.slecteType);

  }
  //methode qui ex�cute le type de mesure

  // to do methode pour la recherche par nom
  searchByname() {
//    this.goals.push(this.goaltext);
//    this.goaltext = '';
//    this.itemCount = this.goals.length;
//    this._data.changeGoal(this.goals);
      }
  searchBytemperature(){
     document.location.href = '/objets/temperature';
  }

  //la r�derection vers la page du domaine
  gotoPage(i) {
    //this.goals.splice(i, 1);
   // this.goaltext;
   document.location.href = '/domotique';
  //this._data.changeGoal(this.goals);
  }

}
