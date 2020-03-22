import { Component, OnInit } from '@angular/core';
import { ConfigOptionsService } from './../../../core/services/config-options.service';
import { constants } from './../../../core/services/constant.service';
import { ConfigModel } from 'src/app/core/models/config.model';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { generatorFactory } from 'src/app/core/services/generator-factory';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
