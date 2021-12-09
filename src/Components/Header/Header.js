import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CastOutlinedIcon from "@mui/icons-material/CastOutlined";

const Header = () => {
  return (
    <header className="w-full flex overflow-hidden items-center py-2 px-3">
      <img
        className="h-6 mr-auto"
        src="/assets/youtube-logo.png"
        alt="Youtube Logo"
      />
      <button className="text-2xl flex items-center">
        <CastOutlinedIcon fontSize="inherit" />
      </button>
      <button className="text-2xl flex items-center ml-4 relative">
        <NotificationsOutlinedIcon fontSize="inherit" />
        <span className="absolute text-xs top-0 left-1 bg-red-600 px-1 text-white rounded-lg">
          9+
        </span>
      </button>
      <button className="text-2xl flex items-center ml-4">
        <SearchIcon fontSize="inherit" />
      </button>
      <button className="w-8 ml-4">
        <img src="/assets/Userpicavatar.png" alt="User Avatar" />
      </button>
    </header>
  );
};

export default Header;
