export type DramaEpisode = {
  id: string;
  episodeNumber: number;
  title: string;
  summary: string;
};

export type Drama = {
  id: string;
  title: string;
  description: string;
  casts: string[];
  director: string[];
  thumbnail: string;
  episodes: DramaEpisode[];
};
