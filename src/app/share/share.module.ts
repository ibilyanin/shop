import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightBackgroundDirective } from './directives/highlight-background.directive';
import { SharedClickDirective } from './directives/shared-click.directive';



@NgModule({
  declarations: [HighlightBackgroundDirective, SharedClickDirective],
  exports: [
    HighlightBackgroundDirective,
    SharedClickDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
