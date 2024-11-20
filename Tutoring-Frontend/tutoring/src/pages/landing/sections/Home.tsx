import { Component } from "react";
import Navbar from "./Navbar";
import image from "../../../assets/images/home-image.png";
import SearchBar from "@/components/common/SearchBar";

export default class Home extends Component {
  render() {
    return (
      <div className="h-screen w-screen bg-[#6176F7] flex flex-col px-36">
        <Navbar />
        <div className="flex-grow flex">
          <div className="w-1/2 h-full px-20 flex py-36 gap-y-3  flex-col text-[#FFC27A] ">
            <h1>START TO SUCCESS</h1>
            <div className="text-white text-4xl font-bold leading-snug">
              <p>
                Access To{" "}
                <span className="underline decoration-yellow-400">5000+</span>{" "}
                Courses
              </p>
              <p>
                from{" "}
                <span className="underline decoration-yellow-400">300</span>{" "}
                Instructors & Institutions
              </p>
            </div>
            <p className="text-sm text-[#CFD3D6]">
              Various versions have evolved over the years, sometimes by
              accident,
            </p>

            <SearchBar></SearchBar>
          </div>

          <div className="w-1/2 h-full flex items-start justify-center content-start">
            <img className="w-[80%]" src={image} />
          </div>
        </div>
      </div>
    );
  }
}
