import React from "react";
import VideoItem from "./VideoItem";

const VideoList = () => {
  return (
    <ul className="px-3 pt-5 flex flex-col gap-y-5">
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </ul>
  );
};

export default VideoList;
