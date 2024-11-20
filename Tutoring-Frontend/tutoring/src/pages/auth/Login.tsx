import LoginButton from "@/components/common/LoginButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import google from "../../assets/icons/google.png";
import facebook from "../../assets/icons/facebook.png";
import logo from "../../assets/icons/logo.png";
import { useEmailChecker } from "@/hooks/auth/useEmailChecker";
import { Toaster } from "@/components/ui/toaster";

export default function Login() {
  const {
    email,
    password,
    emailExists,
    handleInputChange,
    checkEmail,
    signIn,
  } = useEmailChecker(); // Use the custom hook

  return (
    <div>
      <Toaster />
      <div className="w-screen h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-sm flex flex-col justify-evenly items-center text-center space-y-8 bg-white p-6 md:rounded-lg md:shadow-sm">
          <img className="lg:w-24 w-24" src={logo} alt="Logo" />
          <h1 className="text-xl lg:text-3xl text-gray-800">Welcome back!</h1>
          <div className="w-full">
            <Input
              className="h-12 w-full"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleInputChange}
              disabled={emailExists}
            />
            {emailExists && (
              <Input
                className="h-12 w-full mt-2"
                placeholder="Enter your password"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            )}
          </div>
          <Button
            className="w-full h-12 "
            onClick={emailExists ? signIn : checkEmail}
          >
            {emailExists ? "Sign In" : "Continue"}
          </Button>
          <div className="flex content-center justify-center gap-2 text-sm lg:text-base">
            <p>Don't have an account?</p>
            <a href="#" className="text-teal-500">
              Signup
            </a>
          </div>
          <div className="flex items-center my-4 w-full">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="space-y-2 w-full">
            <LoginButton image={google} title="Continue with Google" />
            <LoginButton image={facebook} title="Continue with Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}
