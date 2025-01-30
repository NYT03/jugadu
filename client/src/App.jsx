import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./Components/Loader"; // Import your Loader component
import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Detector from "./Pages/Detector";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate loading for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  const user = true;
  console.log("user");

  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detect" element={<Detector />} />
        </Routes>
      ) : (
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      )}
    </>
  );
}

export default App;
