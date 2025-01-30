import { Route, Routes } from "react-router-dom";
import "./App.css";
import Teamcard from "./components/Teamcard";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
function App() {
  const user = true;
  console.log("user")
  return (
    <>
      {/* <ActiveProvider> */}
        {user ? (
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/t" element={<Teamcard />} />
          </Routes>
        )}
      {/* </ActiveProvider> */}
    </>
  );
}

export default App;
