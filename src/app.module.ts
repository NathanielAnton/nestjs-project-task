import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';
import { SimpsonsModule } from './simpsons/simpsons.module';
import { Simpsons } from './types/simpson';
import { EpisodesService } from './simpsons-episodes/simpsons-episodes.service';

const simpsons: Simpsons = {
  characters: [
    {
      simpsonNumber: 1,
      name: 'Homer',
      debutYear: 1987,
      seasons: 32,
      description: 'Homer Simpson is the bumbling husband of Marge and father of Bart, Lisa, and Maggie.',
      image: 'https://example.com/homer.jpg',
    },
    {
      simpsonNumber: 2,
      name: 'Marge',
      debutYear: 1987,
      seasons: 32,
      description: 'Marge Simpson is the patient wife of Homer and mother of Bart, Lisa, and Maggie.',
      image: 'https://example.com/marge.jpg',
    },
    {
      simpsonNumber: 3,
      name: 'Bart',
      debutYear: 1987,
      seasons: 32,
      description: 'Bart Simpson is the mischievous son of Homer and Marge.',
      image: 'https://example.com/bart.jpg',
    },
    {
      simpsonNumber: 4,
      name: 'Lisa',
      debutYear: 1987,
      seasons: 32,
      description: 'Lisa Simpson is the intelligent and saxophone-playing daughter of Homer and Marge.',
      image: 'https://example.com/lisa.jpg',
    },
    {
      simpsonNumber: 5,
      name: 'Maggie',
      debutYear: 1987,
      seasons: 32,
      description: 'Maggie Simpson is the pacifier-sucking baby of Homer and Marge.',
      image: 'https://example.com/maggie.jpg',
    }
  ],
  seasons: 32,
};


@Module({
  imports: [
    SimpsonsModule.register(simpsons),
  ],
  controllers: [AppController],
  providers: [AppService, EpisodesService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
