import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { LearningGoal } from './core/models';

@Injectable()
export class AppService {
  private mockedGoals: LearningGoal[] = [{
    title: 'Learn components',
    dueDate: 'Mon Mar 20 2017 00:00:00 GMT+0200 (FLE Standard Time)'
  }, {
    title: 'Learn directives',
    dueDate: 'Mon Mar 27 2017 00:00:00 GMT+0200 (FLE Standard Time)'
  }, {
    title: 'Learn pipes',
    dueDate: 'Wed Mar 29 2017 00:00:00 GMT+0200 (FLE Standard Time)'
  }];

  public getGoals() {
    return Observable.of(this.mockedGoals);
  }

  public updateGoal(updatedGoal: LearningGoal) {
    this.mockedGoals[0] = updatedGoal;
  }

  public removeGoal() {
    this.mockedGoals.shift();
  }
}
