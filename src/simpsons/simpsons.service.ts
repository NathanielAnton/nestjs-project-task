import { Injectable } from '@nestjs/common';
import { Simpson, Simpsons } from '../types/simpson';

@Injectable()
export class SimpsonsService {
  constructor(private readonly options: Simpsons) { }

  getSimpsons(): Simpsons {
    return this.options;
  }

  getSimpsonById(id: number): Simpson | { error: string } {
    const simpson = this.options.characters.find(simpson => simpson.simpsonNumber === id);
    if (!simpson) {
      return { error: 'Simpson not found' };
    }
    return simpson;
  }
}
