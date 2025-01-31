import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Loader from "./Components/Loader";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Detector from "./Pages/Detector";
import Schedule from "./Pages/Schedule";
import Contact from "./Pages/Contact";
import Volume from "./Pages/Volume";
import { AuthProvider, useAuth } from "./Context/AuthContext";

function AppContent() {
  const { user } = useAuth();

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detect" element={<Detector />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vol" element={<Volume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
