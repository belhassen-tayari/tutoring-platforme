import React from "react";
import { Button } from "../ui/button";

interface LoginButtonProps {
  image: string;
  title: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ image, title }) => {
  return (
    <Button className="bg-white flex content-start justify-start lg:gap-12 gap-8  lg:text-base text-sm border-[1px] border-gray-200 w-full h-12 hover:bg-gray-100 text-gray-800">
      <img className="w-6 h-6 ml-2" src={image} alt="" />
      {title}
    </Button>
  );
};

export default LoginButton;
