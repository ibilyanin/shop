import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: ConfigModel;

  constructor() { }

  getConfig(): ConfigModel {
    return this.config;
  }

  setConfig(config: ConfigModel): void {
    this.config = {...this.config, ...config};
  }
}
