import { useNavigate } from "react-router-dom";

// Custom hook for navigation
const useNavigateToLogin = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  return navigateToLogin;
};

export default useNavigateToLogin;
