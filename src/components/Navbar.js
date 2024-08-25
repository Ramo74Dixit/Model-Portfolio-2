import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-24 flex">
      {/* Left Half */}
      <div className="w-[42%] bg-white"></div>

      {/* Right Half */}
      <div className="w-[58%]  bg-[#F7D9C4] flex items-center justify-end p-12">
        <Link to="/" className="mx-4 text-gray-600 hover:text-black">Home</Link>
        <Link to="/profile" className="mx-4 text-gray-600 hover:text-black">Profile</Link>
        <Link to="/gallery" className="mx-4 text-gray-600 hover:text-black">Gallery</Link>
        <Link to="/booking" className="mx-4 text-gray-600 hover:text-black">Booking</Link>
        <Link to="/login" className="mx-4 text-gray-600 hover:text-black">Login</Link>
      </div>
    </div>
  );
}
