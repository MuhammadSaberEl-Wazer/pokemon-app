import React, { useEffect, useState } from "react";

const WelcomeLoading: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          localStorage.setItem("hasSeenLoading", "true");
          return 100;
        }
        return prevProgress + 1;
      });
    }, 18);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <img
        src="../../app-imgs/pokeball.webp"
        alt="Pokemon"
        className="w-[150px] h-[184px] animate-bounce"
      />
      <h1 className="text-4xl font-bold mt-4" style={{ color: "#2E7CF6" }}>
        Pokemon App
      </h1>
      <p className="text-lg mt-2" style={{ color: "#2E7CF6" }}>
        Welcome! Ihorizons
      </p>
      <div className="w-64 h-2 bg-gray-200 rounded-full mt-6">
        <div
          className="h-full rounded-full"
          style={{ width: `${progress}%`, backgroundColor: "#2E7CF6" }}
        ></div>
      </div>
    </div>
  );
};

export default WelcomeLoading;
