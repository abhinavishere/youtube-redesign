import React from "react";

const VideoItem = () => {
  return (
    <li>
      <a href="/">
        <div className="relative rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/assets/DemoVideoThumbnail.jpg"
            alt=""
          />
          <span className="absolute bottom-4 right-3 bg-gray-800 bg-opacity-40 py-1 px-2 text-xs rounded-md text-gray-200">
            8:00
          </span>
        </div>
        <div className="">
          <h3 className="font-bold text-lg">Selecting the right hotel</h3>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <p className="flex gap-x-1">
              <span>123k views</span>
              <span>.</span>
              <span>1 months ago</span>
            </p>
            <p>Dollie Blair</p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default VideoItem;
