import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router, Data} from '@angular/router';
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
  private page: number = 0;
  private objets: Array<any>;
  private pages: Array<number>;
  
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {}
   setPage(i, event: any) {
    event.preventdDefault();
    this.page = i;
    this.getDevices(i);
  }
  ngOnInit() {
    //  this._data.goal.subscribe(res => this.goals = res);
//    this.httpClient.get('http://localhost:8080/projet_WOT/objets/')
//      .subscribe(devices => {
//       console.log(devices);
//        this.devices = devices
//      }
//      );
    this.getDevices(this.page);
  }
  getDevices(page: number) {
this.httpClient.get('http://localhost:8080/projet_WOT/objets/' + '?page=' )
   .subscribe(devices => {
       console.log(devices);
        this.objets = devices['Elemnt'];
       this.pages = new Array(devices['nbPage']);
      }
      );
  }
  
  sendMeHome() {
    this.router.navigate(['home']);
  }
 

}
