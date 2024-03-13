import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { SimpsonsService } from './simpsons/simpsons.service';
import { EpisodesService } from './simpsons-episodes/simpsons-episodes.service';


const endpoints = {
  simpsons: '/simpsons',
  episodes: '/episodes',
  episodesBySimpson: '/episodes/simpson/:id',
};

@Controller()
export class AppController {
  getEpisodesBySimpson: any;
  getSimpsons(): any {
    throw new Error('Method not implemented.');
  }
  constructor(
    private readonly appService: AppService,
    private SimpsonService: SimpsonsService,
    private episodeService: EpisodesService,
  ) {
  }

  @Get()
  getLog(): Object {
    const fs = require('fs');
    const log = fs.readFileSync('log.json', 'utf8');
    if (log) {
      const logJson = JSON.parse(log);
      logJson.endpoints = endpoints;
      return logJson;
    }

    return { endpoints };

  }

  @Get('doctors')
  getDoctors(): Object {
    return this.SimpsonService.getSimpsons();
  }

  @Get('simpsons/:id')
  getDoctor(@Param('id') id: number): Object {
    return this.SimpsonService.getSimpsonById(id);
  }

  @Get('episodes')
  getEpisodes(): Object {
    return this.episodeService.getEpisodes();
  }

  @Get('episodes/simpsons/:id')
  getEpisodesByDoctor(@Param('id') id: number): Object {
    return this.episodeService.getEpisodesBySimpson(id);
  }

}
