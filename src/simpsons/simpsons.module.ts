import { DynamicModule, Module } from '@nestjs/common';
import { SimpsonsService } from './simpsons.service';
import { Simpsons } from '../types/simpson';

@Module({})
export class SimpsonsModule {
  static register(options: Simpsons): DynamicModule {
    return {
      module: SimpsonsModule,
      providers: [
        {
          provide: SimpsonsService,
          useValue: new SimpsonsService(options),
        },
      ],
      exports: [SimpsonsService],
    };
  }
}