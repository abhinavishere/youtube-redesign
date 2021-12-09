import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const Footer = () => {
  return (
    <footer className="bg-white z-50 fixed bottom-0 w-full flex items-center justify-evenly space-x-5 text-xs px-3 py-2 border-t-2 border-gray-300 text-gray-400">
      <a
        href="/"
        className="flex flex-col items-center justify-center hover:text-red-600 font-medium"
      >
        <HomeOutlinedIcon />
        <span>Home</span>
      </a>
      <a
        href="/"
        className="flex flex-col items-center justify-center hover:text-red-600 font-medium"
      >
        <WhatshotOutlinedIcon />
        <span>Trending</span>
      </a>
      <a
        href="/"
        className="flex flex-col items-center justify-center hover:text-red-600 font-medium"
      >
        <SubscriptionsOutlinedIcon />
        <span>Subscription</span>
      </a>
      <a
        href="/"
        className="flex flex-col items-center justify-center hover:text-red-600 font-medium"
      >
        <FolderOutlinedIcon />
        <span>Library</span>
      </a>
    </footer>
  );
};

export default Footer;
