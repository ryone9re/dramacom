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

export type Comment = {
  id: string;
  author: string;
  targetUser: string;
  targetDrama: string;
  content: string;
  watchedEpisode: number;
};
