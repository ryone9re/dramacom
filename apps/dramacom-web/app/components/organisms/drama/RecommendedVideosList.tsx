export const RecommendedVideosList: React.FC = () => {
  return (
    <div className="recommended-videos">
      <h2 className="text-xl font-bold">Recommended Videos</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="video-card">
          <iframe
            className="aspect-video"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Video Title"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <h3 className="text-lg font-bold">Video Title</h3>
        </div>
      </div>
    </div>
  );
};
