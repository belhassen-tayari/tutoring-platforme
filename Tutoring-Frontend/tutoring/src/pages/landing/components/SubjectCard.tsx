import { Component } from "react";
import pen from "./../../../assets/icons/PenNib.png";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

export default class SubjectCard extends Component {
  render() {
    return (
      <div className="group w-fit">
        <div className="flex w-56 h-14 rounded-xl bg-white items-center justify-between px-4 shadow-sm transition ease-in delay-50 group-hover:border-[#FFC27A] group-hover:border-[2px] ">
          <div className="flex gap-4">
            <img src={pen} className="w-6 h-6" />
            <span>Design</span>
          </div>
          <ArrowOutwardOutlinedIcon className=" text-[#FFC27A] group-hover:text-[#FFFFFF] group-hover:bg-[#FFC27A] group-hover:rounded-full p-1"></ArrowOutwardOutlinedIcon>
        </div>
      </div>
    );
  }
}
