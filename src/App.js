import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import Booking from "./components/Booking";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><MainPage /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/booking" element={<Layout><Booking /></Layout>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

function Layout({ children }) {
  const location = useLocation();
  const noNavbarRoutes = ['/login'];

  return (
    <div>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default App;
