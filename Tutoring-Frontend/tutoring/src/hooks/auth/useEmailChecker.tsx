import { toast } from "@/components/ui/use-toast";
import { AUTH_ENDPOINT } from "@/global/Constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useEmailChecker = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const checkEmail = async () => {
    try {
      if (email === "") {
        toast({
          variant: "destructive",
          title: "Something went wrong.",
          description: "Email is required for this action.",
        });
        return;
      }

      const response = await fetch(`${AUTH_ENDPOINT}/checkEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        toast({
          variant: "destructive",
          title: "Something went wrong.",
          description: errorData.error || "An unknown error occurred.",
        });
      } else {
        setEmailExists(true);
      }
    } catch (error) {
      console.error("Error checking email:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "An error occurred while checking the email.",
      });
    }
  };

  const signIn = async () => {
    try {
      if (email === "" || password === "") {
        toast({
          variant: "destructive",
          title: "Missing credentials.",
          description: "Both email and password are required.",
        });
        return;
      }

      const response = await fetch(`${AUTH_ENDPOINT}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        toast({
          variant: "destructive",
          title: "Sign-in failed.",
          description: errorData.error || "An unknown error occurred.",
        });
      } else {
        const userData = await response.json(); // Assume response includes user data
        const user = userData.student || userData.teacher;
        // Redirect based on user role
        if (user.role === "student") {
          navigate("/home"); // Replace with your student dashboard route
        } else if (user.role === "teacher") {
          navigate("/teacher"); // Replace with your teacher dashboard route
        } else {
          navigate("/"); // Default route or handle other roles
        }
      }
    } catch (error) {
      console.error("Error signing in:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "An error occurred while signing in.",
      });
    }
  };

  return {
    email,
    password,
    emailExists,
    handleInputChange,
    checkEmail,
    signIn,
  };
};
