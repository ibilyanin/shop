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

