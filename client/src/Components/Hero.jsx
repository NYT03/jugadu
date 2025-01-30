"use client"

import { useState, useEffect } from "react";
import Loader from "./Loader";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <Loader />
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to HackathonX</h1>
        <p className="text-xl mb-8">Join us for 48 hours of coding, creativity, and innovation!</p>
        <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition-colors">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
