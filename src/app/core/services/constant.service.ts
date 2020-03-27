import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// это обычный класс, не сервис, его не надо регистрировать, он зарегистрирован в about компоненте
export class ConstantsService {

  private constApp = 'TaskManager';
  private constVersion = '1.0';

  constructor() { }

  getAppValue(): string {
    return this.constApp;
  }

  getVersionValue(): string {
    return this.constApp;
  }
}

export const constServiceInstance = new ConstantsService();

