import React from "react";
import video from "../video.mp4";

export default function Video() {
  return (
    <div>
      <video src={video} width={"100%"} controls></video>
    </div>
  );
}
