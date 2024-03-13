export interface Episode {
  episodeNumber: number;
  seasonNumber: number;
  title: string;
  director: string;
  writer: string;
  airDate: string;
  description: string;
  image: string;
  newEpisode: boolean;
  simpsonNumber: number;
}

interface Episodes {
  episodes: Episode[];
}

export { Episodes };