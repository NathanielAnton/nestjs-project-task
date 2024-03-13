import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return all Simpsons', () => {
      expect(appController.getSimpsons()).toEqual({ Simpsons: [{ SimpsonNumber: 1, name: 'Homer' }] });
    });
    it('should return all episodes', () => {
      expect(appController.getEpisodes()).toEqual({
        episodes: [{
          episodeNumber: 1,
          SimpsonNumber: 1,
          name: 'The Simpson',
        }],
      });
    });
    it('should return episodes by Simpson', () => {
      expect(appController.getEpisodesBySimpson(1)).toEqual({
        episodes: [{
          episodeNumber: 1,
          SimpsonNumber: 1,
          name: 'The Simpson',
        }],
      });
    });
  },
  );
});