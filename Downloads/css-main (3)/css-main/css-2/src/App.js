import React, { useContext } from "react";
import "./App.css";
import "./components/css/main.css";
import Sidebar from "./components/eachComponent/sidebar";
import Header from "./components/eachComponent/header";
import Realtors from "./components/eachComponent/realtors";
import Features from "./components/eachComponent/features";
import Homes from "./components/eachComponent/homes";
import Gallery from "./components/eachComponent/gallery";
import Footer from "./components/eachComponent/footer";
import StoryContent from "./components/eachComponent/storyContent";
import StoryPictures from "./components/eachComponent/storyPicutures";

function App() {
  return (
    <body className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </body>
  );
}

export default App;
