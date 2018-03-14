import { Component, OnInit } from '@angular/core';

import { ActivatedRoute  } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

 constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

 devices_son: any;

   ngOnInit() {
    //  this._data.goal.subscribe(res => this.goals = res);
    this.httpClient.get('http://localhost:8080/projet_WOT/objets/sound/')
    .subscribe(devices_temp => {
        console.log(devices_temp);
        this.devices_son = devices_temp 
      }
  );
      }

  sendMeHome() {
    this.router.navigate(['home']);
  }

}
