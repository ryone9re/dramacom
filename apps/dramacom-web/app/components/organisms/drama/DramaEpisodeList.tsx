import { Link } from "@remix-run/react";
import type React from "react";

export interface EpisodeProps {
  number: number;
  title: string;
  description: string;
}

interface EpisodeListProps {
  dramaId: string;
  episodes: EpisodeProps[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({ dramaId, episodes }) => {
  return (
    <div>
      {episodes.map((episode) => (
        <Link to={`/drama/${dramaId}/${episode.number}`}>
          <div key={episode.number} className="bg-darkgray p-4 mb-2 rounded">
            <h3 className="text-white text-lg">
              第{episode.number}話: {episode.title}
            </h3>
            <p className="text-gray-400 text-sm">{episode.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EpisodeList;
