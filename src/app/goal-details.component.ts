import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DateService } from './shared/services';
import { LearningGoal } from './core/models';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: []
})
export class GoalDetailsComponent {
  @Input() public goal: LearningGoal;
  @Output() public update: EventEmitter<LearningGoal> = new EventEmitter();
  @Output() public remove: EventEmitter<boolean> = new EventEmitter();

  constructor(private dateService: DateService) {}

  public updateItem(form) {
    const updatedItem = {
      title: form.value.title,
      dueDate: this.dateService.getDateFromString(form.value.dueDate)
    };

    this.update.emit(updatedItem);
  }

  public removeItem() {
    this.remove.emit(true)
  }
}
