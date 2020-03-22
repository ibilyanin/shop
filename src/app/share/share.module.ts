import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightBackgroundDirective } from './highlight-background.directive';



@NgModule({
  declarations: [HighlightBackgroundDirective],
  exports: [
    HighlightBackgroundDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
