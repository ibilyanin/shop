import { Component, OnInit } from '@angular/core';
import { CategoryEnum } from '../category-enum.enum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name:string;
  description:string;
  price:number;
  Category:CategoryEnum;
  IsAvailable:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
