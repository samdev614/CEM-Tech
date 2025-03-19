import React from "react";
import ReactPlayer from "react-player";

const YouTubeEmbed = ({ videoUrl, title }) => {
  return (
    <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
      <h2 className="text-white text-lg font-semibold text-center p-2">{title}</h2>
    </div>
  );
};

export default YouTubeEmbed;
