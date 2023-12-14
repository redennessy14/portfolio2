import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import AnimatedModel from "../../components/AnimatedModel/AnimatedModel";
import NameBlock from "../../components/NameBlock/NameBlock";

const HomePage = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setIsLoading(false);
          clearInterval(loadingInterval);
          return 100;
        } else {
          return prevProgress + 10;
        }
      });
    }, 500);

    return () => clearInterval(loadingInterval);
  }, []);

  if (isLoading) {
    return <div className="loading">Loading... {loadingProgress}%</div>;
  }

  return (
    <div className="homepage">
      <Navbar />
      <AnimatedModel />
    </div>
  );
};

export default HomePage;
