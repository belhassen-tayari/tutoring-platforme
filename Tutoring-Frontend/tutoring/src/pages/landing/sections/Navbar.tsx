import logo from "../../../assets/icons/logo.png";
import lock from "../../../assets/icons/Lock.png";
import useNavigateToLogin from "@/hooks/home/useNavigateToLogin";

const Navbar = () => {
  const navigateToLogin = useNavigateToLogin(); // Use the custom hook

  return (
    <div className="flex justify-around items-center h-20 w-full px-8 py-4">
      <div className="flex items-start">
        <img className="w-16" src={logo} alt="eDex Logo" />
      </div>
      <ul className="flex space-x-8 text-white items-center content-center justify-center">
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#teacher">
          <li>Course</li>
        </a>
        <a href="#subjects">
          <li>Subjects</li>
        </a>
        <a href="#feedback">
          <li>Feedback</li>
        </a>
        <a href="#footer">
          <li>Contact</li>
        </a>
      </ul>
      <div className="flex space-x-6">
        <button
          onClick={navigateToLogin}
          className="flex items-center space-x-2 text-white transition-colors"
        >
          <img src={lock} alt="Lock Icon" />
          <i className="fas fa-lock"></i> Login
        </button>
        <button className="px-4 py-2 text-sm bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-full transition-all">
          Sign up for Free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
