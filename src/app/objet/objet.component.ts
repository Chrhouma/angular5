import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.css']
})
export class ObjetComponent implements OnInit {
  devices: any;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    //  this._data.goal.subscribe(res => this.goals = res);
    this.httpClient.get('http://localhost:8080/projet_WOT/objets/humidity/')
      .subscribe(devices => {
        console.log(devices);
        this.devices = devices
      }
      );
  }
  sendMeHome() {
    this.router.navigate(['home']);
  }

}
