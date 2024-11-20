import StatsCard from "@/components/common/StatsCard";
import { Component } from "react";
import usersImage from "../../../assets/icons/users.png";
import cameraImage from "../../../assets/icons/camera.png";
import teachersImage from "../../../assets/icons/users-three.png";
import hatImage from "../../../assets/icons/cap.png";

export default class About extends Component {
  render() {
    return (
      <div className="py-4 flex justify-center bg-[#F1F2F8] gap-10 ">
        <StatsCard
          title="200"
          subTitle="Instructor"
          image={hatImage}
          fromColor="from-[#2AF9B1]"
          toColor="to-[#20B486]"
        />
        <StatsCard
          title="20,000+"
          subTitle="Student"
          image={usersImage}
          fromColor="from-[#A988F9]"
          toColor="to-[#6D3AE9]"
        />
        <StatsCard
          title="10,000+"
          subTitle="Session"
          image={cameraImage}
          fromColor="from-[#FFA4AF]"
          toColor="to-[#EE455A]"
        />
        <StatsCard
          title="1,000,000+"
          subTitle="User"
          image={teachersImage}
          fromColor="from-[#92DAF0]"
          toColor="to-[#21C9FF]"
        />
      </div>
    );
  }
}
