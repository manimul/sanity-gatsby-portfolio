
import React from 'react'
import getYouTubeID from 'get-youtube-id'

function YouTubePreview  ({value}) { 
const id = getYouTubeID(value.url)
const url = `https://www.youtube.com/embed/${id}`

if (!id) {
  return <div>Missing YouTube URL</div>
}

return  (
<iframe
width="auto" 
height="auto" 
src={url} 
title="YouTube video player" 
frameborder="0" 
allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 

/>
)
}

export default YouTubePreview

