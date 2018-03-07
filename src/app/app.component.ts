import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  title = 'app';
 devices: any;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    //  this._data.goal.subscribe(res => this.goals = res);
    this.httpClient.get('http://localhost:8080/projet_WOT/objets/')
    .subscribe(devices => {
        console.log(devices);
        this.devices = devices 
      }
  );
      }
}
