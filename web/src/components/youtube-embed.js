import React from "react";
import getYouTubeID from "get-youtube-id";

function YouTubePreview({ value }) {
  const id = getYouTubeID(value.url);
  const url = `https://www.youtube.com/embed/${id}`;

  if (!id) {
    return <div>Missing YouTube URL</div>;
  }

  return (
    <div className="mb-6" style={{ width: "100%", minWidth: 400, maxWidth: 800 }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          paddingTop: "56.25%"
        }}
      >
        <p>
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              width: "100%",
              height: "100%",
              border: "none"
            }}
            title="YouTube video player"
            src={url}
            width={560}
            height={315}
            allowFullScreen="allowfullscreen"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </p>
      </div>
    </div>

    /*
<iframe
width="100%"
height="315"
src={url}
title="YouTube video player"
frameborder="0"
allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
/>
*/
  );
}

export default YouTubePreview;
