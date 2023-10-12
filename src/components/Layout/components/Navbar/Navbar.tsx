import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-[25px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Home Link */}
          <div>
            <Link to="/" className="text-white text-2xl font-bold">
              Weather Insights
            </Link>
          </div>
          {/* Navigation Links */}
          <div>
            <ul className="flex space-x-7 ">
              {/* Link to Next 7 Days Forecast */}
              <li>
                <Link to="/next_seven_days" className="text-white">
                  Next 7 Days
                </Link>
              </li>
              {/* Link to About Us Page */}
              <li>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
