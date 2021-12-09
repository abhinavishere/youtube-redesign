import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import VideoList from "./Components/Video/VideoList";

function App() {
  return (
    <div className="font-main min-h-screen overflow-x-hidden">
      <Header />
      <VideoList />
      <Footer />
    </div>
  );
}

export default App;
