import React from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite"; // Corrected import path
import CommentIcon from "@mui/icons-material/Comment"; // Corrected import path
import SendIcon from "@mui/icons-material/Send"; // Corrected import path
import "./Footer.css";

export default function Footer({ channel, song, likes, comment, shares }) {
  return (
    <div className="video-footer">
      <div className="video-text">
        <h3>
          {channel} . ({song})
          <Button>
            <h4 style={{ color: "white" }}>Follow</h4>
          </Button>
        </h3>
      </div>
      <div className="footer-buttons">
        <div className="flex-box">
          <FavoriteIcon />
          <span>{likes}</span>
        </div>
        <div className="flex-box">
          <CommentIcon />
          <span>{comment}</span>
        </div>
        <div className="flex-box">
          <SendIcon />
          <span>{shares}</span>
        </div>
      </div>
    </div>
  );
}
