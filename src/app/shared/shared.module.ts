import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DateService]
})
export class SharedModule { }
