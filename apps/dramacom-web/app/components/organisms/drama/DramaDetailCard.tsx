import type React from "react";
import { LikeIcon, PlayIcon, StarIcon } from "~/components/atoms/icons";
import type { Drama } from "~/types";

export type DoramaDetailCardProps = {
  title: Drama["title"];
  thumbnail: Drama["thumbnail"];
  description: Drama["description"];
  casts: Drama["casts"];
  director: Drama["director"];
  subTitle?: string;
  rating: number;
  screenplay?: string;
  genres?: string[];
  releaseYear?: number;
};

const DoramaDetailCard: React.FC<DoramaDetailCardProps> = ({
  title,
  subTitle,
  thumbnail: imageSrc,
  rating,
  description,
  screenplay,
  director,
  genres,
  releaseYear,
}) => {
  return (
    <div className="bg-darkgray shadow-lg rounded-lg overflow-hidden flex items-center">
      <div className="w-1/2 p-10">
        <img
          className="w-auto h-auto object-cover object-center"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="p-10 text-white flex-1">
        <h2 className="title-font text-2xl font-bold">{title}</h2>
        <h3 className="title-font text-xl mb-2">{subTitle}</h3>
        <p className="leading-relaxed mb-3">あらすじ：{description}</p>
        <div className="">
          <p className="mb-2">脚本: {screenplay}</p>
          <p className="mb-2">監督: {director}</p>
        </div>
        <div className="flex items-center flex-wrap ">
          <span className="text-primary mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            {rating} <StarIcon />
          </span>
          <span className="text-gray-500 inline-flex items-center leading-none text-sm">
            {genres?.join(", ")} | {releaseYear}
          </span>
        </div>
        <div className="flex justify-end items-center space-x-4">
          <button
            type="button"
            className="btn btn-primary flex justify-center items-center"
            onClick={() => {
              /* 再生ボタンのクリックイベントハンドラ */
            }}
          >
            <PlayIcon />
          </button>
          <button
            type="button"
            className="btn btn-secondary flex justify-center items-center"
            onClick={() => {
              /* お気に入りボタンのクリックイベントハンドラ */
            }}
          >
            <LikeIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoramaDetailCard;
