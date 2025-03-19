import React from 'react'
import YouTubeEmbed from './YouTubeEmbed'
import { videos } from '@/data/videos'

const VideoPortfolio = () => {
  return (

    <div className="max-w-6xl mx-auto p-4 mt-12 gap-2">
      <h1 className='heading'>
  My <span className='text-orange'>Video Editing Work</span>
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 rounded-md">
        {videos.map((video) => (
          <YouTubeEmbed
            key={video.url}
            videoUrl={`https://www.youtube.com/watch?v=${video.url}`}
            title={video.title}
          />
        ))}
      </div>
    </div>
  )
}

export default VideoPortfolio

//<h1 className="heading">
//My <span className="text-orange">work experience</span>
//</h1>
  