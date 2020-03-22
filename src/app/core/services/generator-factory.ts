import { GeneratorService } from './generator.service';

export function generatorFactory(length: number): string {
    const generatorService =  new GeneratorService();
    return generatorService.generate(length);
}
