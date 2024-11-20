import { Component } from "react";
import about from "../../../assets/images/about.svg";

export default class Contact extends Component {
  render() {
    return (
      <div className="flex h-[550px] bg-[#E7E9EB] content-center items-center justify-center">
        <div className="flex">
            <img className="w-[500px] " src={about} />

          <div className=" w-[60%] mt-16">
            <div className=" p-8  max-w-md mx-auto text-start justify-center flex-col content-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Join <span className="text-blue-600">World's largest</span>{" "}
                learning platform today
              </h1>
              <p className="mt-4 text-gray-600">
                Start learning by registering for free
              </p>
              <p className="mt-4 text-gray-500 text-sm">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-400 text-white font-bold rounded-full shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                Sign up for Free
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
