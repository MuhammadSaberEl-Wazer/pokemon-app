import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import Layout from "./layout/layout";
import WelcomeLoading from "./pages/WelcomeLoading";
import LoadingSpinner from "./components/common/LoadingSpinner";

const App: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [welcomeStatus, setWelcomeStatus] = useState(true);

  useEffect(() => {
    const hasSeenLoading = localStorage.getItem("hasSeenLoading");
    if (hasSeenLoading) {
      setShowLoading(false);
      setWelcomeStatus(false);
    } else {
      setShowLoading(false);
      const timer = setTimeout(() => {
        setWelcomeStatus(false);
      }, 2600);

      return () => clearTimeout(timer);
    }
  }, []);

  return showLoading ? (
    <LoadingSpinner />
  ) : welcomeStatus ? (
    <WelcomeLoading />
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
