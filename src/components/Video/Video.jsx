import React, { useRef, useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Video.css";

export default function Video({ channel, song, url, likes, comment, shares }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const vidRef = useRef();

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVideoInView(true);
      } else {
        setIsVideoInView(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(vidRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVideoInView) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  }, [isVideoInView]);

  const handleVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="video-cards">
      <Header />
      <video
        onClick={handleVideoClick}
        onPlay={() => setIsVideoPlaying(true)}
        onPause={() => setIsVideoPlaying(false)}
        className="video-player"
        ref={vidRef}
        src={url}
        loop
        autoPlay={isVideoInView}
      />

      <Footer
        channel={channel}
        song={song}
        likes={likes}
        comment={comment}
        shares={shares}
      />
    </div>
  );
}
