import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppHoverDirective } from './hover.directive';
import { GoalDetailsComponent } from './goal-details.component'
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHoverDirective,
    GoalDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
