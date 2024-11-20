import { Component } from "react";
import logo from "../../../assets/icons/logo.png";
import MediaBubble from "../components/MediaBubble";
import fb from "../../../assets/icons/fb.png";
import ig from "../../../assets/icons/ig.png";
import li from "../../../assets/icons/linkedin.png";
import { Button } from "@/components/ui/button";
export default class Footer extends Component {
  render() {
    return (
      <div className="flex h-[400px] bg-[#21212F] px-[200px] py-[60px]">
        <div className="h-full w-1/4 p-7 flex flex-col gap-4">
          <img src={logo} className="w-[25%]" />
          <h1 className="text-white font-semibold text-xl">Contact Us</h1>
          <p className="text-[#E7E9EB] text-sm">Call +216 20 324 571</p>
          <p className="text-[#E7E9EB] text-sm">
            Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
            auctor felis.
          </p>
          <p className="text-[#E7E9EB] text-sm">Email: example@mail.com</p>
          <div>
            <div className="flex gap-6">
              <MediaBubble imageUrl={fb} />
              <MediaBubble imageUrl={ig} />
              <MediaBubble imageUrl={li} />
            </div>
          </div>
        </div>
        <div className="h-full w-1/4 p-7">
          <h1 className="text-white font-normal h-[50px] text-lg">Explore</h1>
          <div className="flex flex-col gap-2">
            <p className="text-[#CFD3D6]">Home</p>
            <p className="text-[#CFD3D6]">About</p>
            <p className="text-[#CFD3D6]">Course</p>
            <p className="text-[#CFD3D6]">Blog</p>
            <p className="text-[#CFD3D6]">Contact</p>
          </div>
        </div>

        <div className="h-full w-1/4 p-7">
          <h1 className="text-white font-normal h-[50px] text-lg">Category</h1>
          <div className="flex flex-col gap-2">
            <p className="text-[#CFD3D6]">Design</p>
            <p className="text-[#CFD3D6]">Development</p>
            <p className="text-[#CFD3D6]">Marketing</p>
            <p className="text-[#CFD3D6]">Business</p>
            <p className="text-[#CFD3D6]">Lifestyle</p>
            <p className="text-[#CFD3D6]">Photography</p>
            <p className="text-[#CFD3D6]">Music</p>
          </div>
        </div>

        <div className="h-full w-1/4 p-7">
          <h1 className="text-white font-normal h-[50px] text-lg">Subscribe</h1>
          <div className="flex flex-col gap-6">
            <p className="text-[#CFD3D6]">
              Lorem Ipsum has been them an industry printer took a galley make
              book.
            </p>
            <input
              className="w-full h-[48px] pl-4 pr-16 text-sm rounded-sm bg-white text-gray-700 focus:outline-none"
              type="email"
              placeholder="Email here"
            />
            <Button className="max-w-max bg-gradient-to-tr from-[#FFC27A] to-[#FFA337] text-base font-medium rounded-full px-12 py-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
