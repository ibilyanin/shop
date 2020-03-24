import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  validSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  validSymbolsLength = 62;

  constructor() { }

  generate(n: number) {
    let generedString = '';
    for (let i = 0; i < n; i++) {
      generedString += this.validSymbols.charAt(Math.floor(Math.random() * this.validSymbolsLength));
    }
    return generedString;
  }

}
