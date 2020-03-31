import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightBackgroundDirective } from './directives/highlight-background.directive';
import { SharedClickDirective } from './directives/shared-click.directive';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './pipes/order-by.pipe';



@NgModule({
  declarations: [HighlightBackgroundDirective, SharedClickDirective, OrderByPipe],
  exports: [
    HighlightBackgroundDirective,
    SharedClickDirective,
    CommonModule,
    FormsModule,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
