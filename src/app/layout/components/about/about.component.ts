import { Component, OnInit, Inject, Host, Optional } from '@angular/core';
import { ConfigOptionsService } from './../../../core/services/config-options.service';
import { ConstantsService, constServiceInstance } from './../../../core/services/constant.service';
import { ConfigModel } from 'src/app/core/models/config.model';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { GeneratorFactory, GENERATOR_VALUE } from 'src/app/core/services/generator-factory';
import { LocalStorageService } from 'src/app/core/services/loacal-storage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    GeneratorService,
      {provide: GENERATOR_VALUE, useFactory: GeneratorFactory(50), deps: [GeneratorService]},
      {provide: ConstantsService, useValue: constServiceInstance},
      {provide: localStorage, useClass: LocalStorageService }, // где взялся токен localStorage?
//      {provide: ConfigOptionsService, useClass: ConfigOptionsService }
  ]
})
export class AboutComponent implements OnInit {
  constant: string;
  generatedValue: string;
  login: string;

  constructor(
    @Host() @Optional() private configService: ConfigOptionsService,
    private constantService: ConstantsService,
    @Inject(GENERATOR_VALUE) private generator: string) { }

  ngOnInit(): void {
    if (this.configService) {
      this.configService.setConfig(new ConfigModel(1, 'login', 'email@email.com'));
      this.login = this.configService.getConfig().login;
    }

    this.constant = this.constantService.getAppValue();
    this.generatedValue = this.generator;
  }

}
