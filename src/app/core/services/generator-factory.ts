import { GeneratorService } from './generator.service';
import { InjectionToken } from '@angular/core';

export const GENERATOR_VALUE = new InjectionToken<string>('generatorValue');

export function GeneratorFactory(length: number) {
    return (generatorService: GeneratorService) => generatorService.generate(length);
}
