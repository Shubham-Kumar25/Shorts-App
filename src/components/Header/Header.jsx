import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"; // Updated import path
import CameraAltIcon from "@mui/icons-material/CameraAlt"; // Updated import path
import "./Header.css";

export default function Header() {
  return (
    <div className="video-header">
      <IconButton>
        <ArrowBackIosIcon />
      </IconButton>
      <h3>Shorts</h3>
      <IconButton>
        <CameraAltIcon />
      </IconButton>
    </div>
  );
}
