import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { GoalDetailsComponent } from './goal-details.component';
import { AppService } from './app.service';
import { LearningGoal } from './core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .fancy-font {
      font-family: cursive;
    }
  `]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(GoalDetailsComponent) childComponent: GoalDetailsComponent;
  public learningGoals: LearningGoal[]= [];
  public fancyFont = false;

  constructor(private appService: AppService) {}

  public ngOnInit() {
    this.appService.getGoals().subscribe((goals: LearningGoal[]) => {
      this.learningGoals = goals;
    });
  }

  public ngAfterViewInit() {
    console.log(this.childComponent);
  }

  public updateGoal(updatedGoal) {
    this.appService.updateGoal(updatedGoal);
  }

  public removeGoal() {
    this.appService.removeGoal();
  }

  public toggleFont() {
    this.fancyFont = !this.fancyFont;
  }
}
