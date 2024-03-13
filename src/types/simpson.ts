interface Simpson {
  simpsonNumber: number;
  name: string;
  debutYear: number;
  seasons: number;
  description: string;
  image: string;
}

interface Simpsons {
  characters: Simpson[];
  seasons: number;
}

export { Simpson, Simpsons };
