import React from "react";
import Video from "./components/Video/Video";
import Vid1 from "./assets/videos/video1.mp4";
import Vid2 from "./assets/videos/video2.mp4";
import Vid3 from "./assets/videos/video3.mp4";
import Vid4 from "./assets/videos/video4.mp4";
import "./App.css";

export default function App() {
  const data = [
    {
      channel: "aaa",
      song: "Video-1",
      url: Vid1,
      likes: "320",
      comment: "22",
      shares: "43",
    },
    {
      channel: "bbb",
      song: "Video-2",
      url: Vid2,
      likes: "553",
      comment: "72",
      shares: "61",
    },
    {
      channel: "ccc",
      song: "Video-3",
      url: Vid3,
      likes: "809",
      comment: "33",
      shares: "55",
    },
    {
      channel: "ddd",
      song: "Video-4",
      url: Vid4,
      likes: "436",
      comment: "16",
      shares: "8",
    },
  ];

  return (
    <div className="App">
      <div className="center-content">
        <h3>Shorts App</h3>
        <div className="video-container" id="video-container">
          {data.map((list, i) => (
            <Video
              key={i}
              channel={list.channel}
              song={list.song}
              url={list.url}
              likes={list.likes}
              comment={list.comment}
              shares={list.shares}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
