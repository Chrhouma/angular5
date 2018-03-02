import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
private goals = new BehaviorSubject<any>(['domotique', 'smart city', 'automobile', 'medical', 'e-santé']);

goal = this.goals.asObservable();
  constructor() {}
  changeGoal(goal)   {
    this.goals.next(goal);
  }
}
