import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import Booking from "./components/Booking";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer"
export default function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
