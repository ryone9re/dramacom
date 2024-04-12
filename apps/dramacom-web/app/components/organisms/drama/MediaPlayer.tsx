import type React from "react";

const extractVideoID = (url: string) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
};

const MediaPlayer: React.FC<{ src: string }> = ({ src }) => {
  const videoID = extractVideoID(src);
  const embedUrl = videoID ? `https://www.youtube.com/embed/${videoID}` : "";

  return (
    <div className="player bg-base-300 p-4">
      <iframe
        className="w-full aspect-video"
        src={embedUrl}
        title="Media Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default MediaPlayer;
