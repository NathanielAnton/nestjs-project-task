import { Module } from '@nestjs/common';
import { EpisodesService } from './simpsons-episodes.service';

@Module({
  controllers: [EpisodesService],
  providers: [EpisodesService],
})
export class SimpsonsEpisodesModule { }
