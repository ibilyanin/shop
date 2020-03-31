import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByProperty',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  private GetPropertyValue(value: any, name: string): any {
    if (name.indexOf('.') > 0) {
      const nameArray = name.split('.');
      let currentValue = value;
      let currentIndex = 0;
      while (currentIndex <= nameArray.length - 1) {
          currentValue = currentValue[nameArray[currentIndex]];
          currentIndex++;
      }
      return currentValue;
    } else {
      return value[name];
    }
  }

  private HasProperty(value: any, name: string): boolean {
    if (name.indexOf('.') > 0) {
      const nameArray = name.split('.');
      let currentValue = value;
      let currentIndex = 0;
      while (currentIndex <= nameArray.length - 1) {
        const currentPropertyName = nameArray[currentIndex];
        if (currentValue == null) { return false; }
        if (!currentValue.hasOwnProperty(currentPropertyName)) {  return false; }
        currentValue = currentValue[currentPropertyName];
        currentIndex++;
      }
      return true;
    } else {
      return value.hasOwnProperty(name);
    }
  }

  transform(value: any[], propertyName: string, asc?: boolean): any[] {
    if (!value) {
      return value;
    }
    if (value.length <= 1) {
      return value;
    }
    if (!propertyName || propertyName === '') {
      return asc ? value.sort() : value.sort().reverse();
    }
    const direction = asc ? 1 : -1;

    if (this.HasProperty(value[0], propertyName)) {
      value.sort((a, b) => this.GetPropertyValue(a, propertyName) > this.GetPropertyValue(b, propertyName) ? direction : -direction);
    }
    return value;
  }
}
