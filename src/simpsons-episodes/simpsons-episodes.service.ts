import { Episodes } from '../types/episode';

const episodes: Episodes = {
  episodes: [
    {
      episodeNumber: 1,
      seasonNumber: 1,
      title: 'Simpsons Roasting on an Open Fire',
      director: 'David Silverman',
      writer: 'Mimi Pond',
      airDate: 'December 17, 1989',
      description: 'Homer discovers he will not be getting a Christmas bonus and so the family does not have enough money to buy presents. He decides to keep their financial troubles a secret and gets a job as a mall Santa.',
      image: 'https://example.com/simpsons_roasting_on_an_open_fire.jpg',
      newEpisode: false,
      simpsonNumber: 3
    },
    {
      episodeNumber: 2,
      seasonNumber: 1,
      title: 'Bart the Genius',
      director: 'David Silverman',
      writer: 'Jon Vitti',
      airDate: 'January 14, 1990',
      description: 'Bart cheats on an intelligence test and is declared a genius. He is sent to a school for gifted children, but he soon realizes that he does not fit in with his new classmates.',
      image: 'https://example.com/bart_the_genius.jpg',
      newEpisode: false,
      simpsonNumber: 2
    },
    {
      episodeNumber: 3,
      seasonNumber: 1,
      title: 'Homer\'s Odyssey',
      director: 'Wes Archer',
      writer: 'Jay Kogen & Wallace Wolodarsky',
      airDate: 'January 21, 1990',
      description: 'Homer is fired from his job at the nuclear power plant and decides to become a safety advocate. However, his efforts are met with resistance from the townspeople.',
      image: 'https://example.com/homers_odyssey.jpg',
      newEpisode: false,
      simpsonNumber: 1
    },
  ]
}

export class EpisodesService {
  getEpisodes(): Episodes {
    return episodes;
  }

  getEpisodesBySimpson(id: number) {
    return episodes.episodes.filter((episode) => episode.simpsonNumber == id);
  }
}
