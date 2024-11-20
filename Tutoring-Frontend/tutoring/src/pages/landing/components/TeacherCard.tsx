import { Component } from "react";
import profilePhoto from "../../../assets/images/profile.jpg";
import star from "../../../assets/icons/Star.png";
import starHalf from "../../../assets/icons/star-half.png";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default class TeacherCard extends Component {
  render() {
    return (
      <div className="flex-col items-start h-[320px] w-[222px] rounded-xl shadow-md p-2">
        <div className="absolute mx-2 my-1">
          <Badge variant="secondary" className="opacity-80">
            English
          </Badge>
        </div>
        <div className="w-full h-[200px] rounded-xl overflow-hidden">
          <img src={profilePhoto} className="w-full h-full object-cover" />
        </div>
        <div className="px-2">
          <h1 className="text-[15px] font-semibold pt-2 ">Belhassen Tayari</h1>
          <div className="flex gap-0">
            <img src={star} className="w-5 h-5" />
            <img src={star} className="w-5 h-5" />
            <img src={star} className="w-5 h-5" />
            <img src={star} className="w-5 h-5" />
            <img src={starHalf} className="w-5 h-5" />
            <p className="text-sm text-gray-600">(102)</p>
          </div>
          <Separator className="my-3" />
          <h1 className="font-medium text-sm text-gray-500">$ 500 / H</h1>
        </div>
      </div>
    );
  }
}
